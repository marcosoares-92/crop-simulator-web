"""
Crop Simulator — Flask web application (Tycoon-style control panel).

Marco César Prado Soares, PhD. Data Coordinator.
marcosoares.feq@gmail.com

UI designed with AI support (Cursor / Composer).
Public UCI data — training, testing, experimenting and didactic use only.
No proprietary information is used.
"""

from __future__ import annotations

import os
import sys
import threading
from pathlib import Path

from flask import (
    Flask,
    jsonify,
    render_template,
    request,
    send_file,
    session,
)
import io

BASE_DIR = Path(__file__).resolve().parent
BACKEND_DIR = BASE_DIR / "backend"
MODELS_DIR = BASE_DIR / "models"

sys.path.insert(0, str(BACKEND_DIR))

from crop_simulator import (  # noqa: E402
    ControlVars,
    build_excel_bytes,
    cropsim_start_msg,
    run_simulation_web,
)

# Point models to local copies shipped with the web app
ControlVars.cluster_model_path = str(MODELS_DIR / "kmeans_model.pkl")
ControlVars.lstm_model_path = str(MODELS_DIR / "lstm.keras")

app = Flask(
    __name__,
    static_folder="static",
    template_folder="templates",
)
app.secret_key = os.environ.get("FLASK_SECRET_KEY", "crop-simulator-didactic-public-key")

# Serialize model runs (TensorFlow + shared ControlVars)
_sim_lock = threading.Lock()

CULTIVARS = [
    "74K75RSF CE",
    "77HO111I2X - GUAPORÉ",
    "79I81RSF IPRO",
    "82HO111 IPRO - HO COXIM IPRO",
    "82I78RSF IPRO",
    "83IX84RSF I2X",
    "96R29 IPRO",
    "97Y97 IPRO",
    "98R30 CE",
    "ADAPTA LTT 8402 IPRO",
    "ATAQUE I2X",
    "BRASMAX BÔNUS IPRO",
    "BRASMAX OLIMPO IPRO",
    "ELISA IPRO",
    "EXPANDE LTT 8301 IPRO",
    "FORTALECE L090183 RR",
    "FORTALEZA IPRO",
    "FTR 3179 IPRO",
    "FTR 3190 IPRO",
    "FTR 3868 IPRO",
    "FTR 4280 IPRO",
    "FTR 4288 IPRO",
    "GNS7700 IPRO",
    "GNS7900 IPRO - AMPLA",
    "LAT 1330BT",
    "LTT 7901 IPRO",
    "LYNDA IPRO",
    "M 8644 IPRO",
    "MANU IPRO",
    "MONSOY 8330I2X",
    "MONSOY M8606I2X",
    "NEO 760 CE",
    "NEO 790 IPRO",
    "NK 7777 IPRO",
    "NK 8100 IPRO",
    "NK 8770 IPRO",
    "PAULA IPRO",
    "SUZY IPRO",
    "SYN2282IPRO",
    "TMG 22X83I2X",
]

PARAM_RANGES = {
    "PH": {"min": 47.6, "max": 94.8, "default": 63.3, "step": 0.1},
    "IFP": {"min": 7.2, "max": 26.4, "default": 16.8, "step": 0.1},
    "NLP": {"min": 20.2, "max": 123.0, "default": 43.0, "step": 0.1},
    "NGL": {"min": 0.94, "max": 14.86, "default": 1.71, "step": 0.01},
    "NS": {"min": 0.4, "max": 9.0, "default": 3.7, "step": 0.1},
    "MHG": {"min": 127.1, "max": 216.0, "default": 156.7, "step": 0.1},
}


def _apply_language(lang: str | None) -> None:
    if lang == "en":
        ControlVars.language_pt = False
    else:
        ControlVars.language_pt = True


@app.route("/")
def index():
    lang = session.get("lang", "pt")
    _apply_language(lang)
    return render_template(
        "index.html",
        cultivars=CULTIVARS,
        ranges=PARAM_RANGES,
        lang=lang,
        welcome=cropsim_start_msg(PT=(lang != "en")),
        author="Marco César Prado Soares, PhD. Data Coordinator. marcosoares.feq@gmail.com",
        ai_credit="UI designed with AI support (Cursor / Composer).",
    )


@app.route("/api/language", methods=["POST"])
def api_language():
    data = request.get_json(force=True, silent=True) or {}
    lang = data.get("lang", "pt")
    if lang not in ("pt", "en"):
        lang = "pt"
    session["lang"] = lang
    _apply_language(lang)
    return jsonify({"lang": lang, "welcome": cropsim_start_msg(PT=(lang != "en"))})


@app.route("/api/simulate", methods=["POST"])
def api_simulate():
    data = request.get_json(force=True, silent=True) or {}
    lang = data.get("lang") or session.get("lang", "pt")
    session["lang"] = lang
    _apply_language(lang)

    try:
        start_date = str(data.get("start_date", "2024-02-21"))
        end_date = str(data.get("end_date", "2025-10-01"))
        cultivar = str(data.get("cultivar", "MONSOY 8330I2X"))
        PH = float(data.get("PH", PARAM_RANGES["PH"]["default"]))
        IFP = float(data.get("IFP", PARAM_RANGES["IFP"]["default"]))
        NLP = float(data.get("NLP", PARAM_RANGES["NLP"]["default"]))
        NGL = float(data.get("NGL", PARAM_RANGES["NGL"]["default"]))
        NS = float(data.get("NS", PARAM_RANGES["NS"]["default"]))
        MHG = float(data.get("MHG", PARAM_RANGES["MHG"]["default"]))
    except (TypeError, ValueError) as exc:
        return jsonify({"ok": False, "error": f"Invalid parameters: {exc}"}), 400

    if cultivar not in CULTIVARS:
        return jsonify({"ok": False, "error": "Unknown cultivar"}), 400

    # Guard extreme spans (LSTM over thousands of days is slow on free hosts)
    from datetime import datetime as dt

    try:
        d0 = dt.strptime(start_date, "%Y-%m-%d")
        d1 = dt.strptime(end_date, "%Y-%m-%d")
    except ValueError:
        return jsonify({"ok": False, "error": "Dates must be YYYY-MM-DD"}), 400
    if d1 <= d0:
        return jsonify({"ok": False, "error": "end_date must be after start_date"}), 400
    if (d1 - d0).days > 800:
        return jsonify({
            "ok": False,
            "error": "Date span too large (max 800 days) for the public demo host.",
        }), 400

    try:
        with _sim_lock:
            result = run_simulation_web(
                start_date, end_date, cultivar, PH, NLP, NGL, NS, IFP, MHG
            )
    except Exception as exc:  # noqa: BLE001 — surface to UI for didactic app
        return jsonify({"ok": False, "error": str(exc)}), 500

    return jsonify({"ok": True, **result})


@app.route("/api/export-excel", methods=["GET"])
def api_export_excel():
    with _sim_lock:
        payload = build_excel_bytes()
    if not payload:
        return jsonify({"ok": False, "error": "No simulations to export"}), 400
    return send_file(
        io.BytesIO(payload),
        mimetype="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        as_attachment=True,
        download_name="soybean_crop_simulations.xlsx",
    )


@app.route("/api/status", methods=["GET"])
def api_status():
    return jsonify({
        "ok": True,
        "simulations": ControlVars.simulation_counter,
        "models_ready": os.path.isfile(ControlVars.cluster_model_path)
        and os.path.isfile(ControlVars.lstm_model_path),
        "lang": "pt" if ControlVars.language_pt else "en",
    })


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 7860))
    app.run(host="0.0.0.0", port=port, debug=False)
