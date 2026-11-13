"""CROP SIMULATOR — Soybean production digital twin (web package).

Marco César Prado Soares, PhD. Data Coordinator.
marcosoares.feq@gmail.com

UI designed with AI support (Cursor / Composer).
Based on Industrial Data Science Workflow (idsw):
https://github.com/marcosoares-92/IndustrialDataScienceWorkflow

Public UCI soybean cultivars dataset — for training, testing, experimenting
and didactic purposes only. No proprietary information is used.
"""

from .core import (
    ControlVars,
    run_simulation,
    visualize_yield,
    download_excel_with_data,
    run_simulation_web,
    build_excel_bytes,
)
from .utils import update_control_vars


def cropsim_start_msg(PT=True):
    """Return welcome text (PT or EN). Does not print."""
    if PT is False:
        ControlVars.language_pt = False

    if ControlVars.language_pt:
        return (
            "Bem-vindo ao Crop Simulator! Este simulador aplica deep learning "
            "para reproduzir a produção de soja na Fazenda Pequizeiro (Balsas, MA, Brasil), "
            "com base em dados públicos UCI (safra 2022/2023). "
            "Artigo: https://doi.org/10.46420/TAES.e230005 — "
            "Dados: https://archive.ics.uci.edu/dataset/913/forty+soybean+cultivars+from+subsequent+harvests. "
            "Uso didático / experimental apenas; nenhum dado proprietário."
        )
    return (
        "Welcome to the Crop Simulator! This tool applies deep learning to reproduce "
        "soybean production at farm Pequizeiro (Balsas, MA, Brazil), based on the public UCI "
        "dataset (harvest 2022/2023). Paper: https://doi.org/10.46420/TAES.e230005 — "
        "Data: https://archive.ics.uci.edu/dataset/913/forty+soybean+cultivars+from+subsequent+harvests. "
        "For training, testing, experimenting and didactic purposes only; no proprietary data."
    )
