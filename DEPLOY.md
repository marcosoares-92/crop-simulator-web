# Deploy Crop Simulator (browser-first)

Target: **Hugging Face Spaces** (Docker) linked to your **personal GitHub** account.  
End users only need a URL in the browser.

## A. Prepare a public GitHub repository (browser)

1. Open https://github.com/new while logged into your **personal** GitHub account.
2. Repository name suggestion: `crop-simulator-web`
3. Visibility: **Public**
4. Do **not** add a README if you will upload this folder’s files (or replace later).
5. Click **Create repository**.

### Upload files (drag and drop, no terminal)

1. On the new empty repo page, click **uploading an existing file**.
2. On your computer, open the folder  
   `web_apps/crop_simulator_web`
3. Select **all contents** of that folder (not the parent `web_apps` folder):  
   `app.py`, `requirements.txt`, `Dockerfile`, `README.md`, `DEPLOY.md`,  
   `backend/`, `models/`, `static/`, `templates/`, `exports/` (optional empty).
4. Drag them into the GitHub upload area.
5. Commit message example: `Initial Crop Simulator web app`
6. Click **Commit changes**.

> Important: include `models/kmeans_model.pkl` and `models/lstm.keras`.  
> Do **not** upload Crop project `[PRESENTATION]` files.

## B. Create a Hugging Face Space (browser)

1. Open https://huggingface.co/ and sign in (free account is enough).
2. Click your avatar → **New Space**.
3. Settings:
   - **Space name:** e.g. `crop-simulator-soybean`
   - **License:** MIT (or your preference)
   - **SDK:** **Docker**
   - **Space hardware:** CPU basic (free) is enough for demos; first build is slow because of TensorFlow.
   - Visibility: **Public**
4. Create the Space.

## C. Connect the Space to GitHub (browser)

**Option 1 — Push from GitHub UI is already done; clone into Space via “Add files”**

If the Space is empty:

1. In the Space, open the **Files** tab.
2. Use **Add file → Upload files** and upload the same files as in section A  
   **or** use **Files and versions → Contribute → open a pull request** if you prefer.

**Option 2 — Import from GitHub (recommended when available)**

1. In the Space settings / files area, look for **Import from Git repository** / link GitHub.
2. Authorize Hugging Face to read your personal GitHub.
3. Select `crop-simulator-web` and import.

After files are present (`Dockerfile` at the Space root), Hugging Face builds automatically.

## D. Wait for the build

1. Open the **Logs** / **Build** panel on the Space.
2. First build can take **10–25 minutes** (TensorFlow + scikit-learn).
3. When status is **Running**, open the Space URL, e.g.  
   `https://huggingface.co/spaces/<your-user>/crop-simulator-soybean`

## E. Use the simulator

1. Choose **PT** or **EN**.
2. Set dates, cultivar and sliders on **PLANTAÇÃO / FARM**.
3. Click **INICIAR SIMULAÇÃO / START SIMULATION**.
4. Inspect chart and table on **DADOS / DATA**.
5. **BAIXAR EXCEL / DOWNLOAD EXCEL** exports all runs in the current server session.

## Troubleshooting

| Symptom | What to do |
|--------|------------|
| Build fails on TensorFlow | Confirm `Dockerfile` and `requirements.txt` are at Space **root**. |
| `kmeans` / model file missing | Re-upload `models/` folder. |
| Simulation timeout | Shorten the date span (max 800 days enforced). Free CPU Spaces are slow for long series. |
| Excel empty | Run at least one simulation first. |

## Authorship shown in the UI

Marco César Prado Soares, PhD. Data Coordinator. marcosoares.feq@gmail.com  
UI designed with AI support (Cursor / Composer).  
Public didactic data only — no proprietary information.
