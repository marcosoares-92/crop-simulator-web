---
title: Crop Simulator Soybean
emoji: 🌱
colorFrom: green
colorTo: yellow
sdk: docker
app_port: 7860
pinned: false
license: mit
---

# Crop Simulator — Soybean Production Control Panel

Browser UI for the soybean crop digital twin based on the public UCI dataset
*Forty Soybean Cultivars from Subsequent Harvests*.

**Author:** Marco César Prado Soares, PhD. Data Coordinator. marcosoares.feq@gmail.com  
**UI:** designed with AI support (Cursor / Composer).

Public data only — for training, testing, experimenting and didactic purposes.  
No proprietary information is used.

- Paper: https://doi.org/10.46420/TAES.e230005  
- Dataset: https://archive.ics.uci.edu/dataset/913/forty+soybean+cultivars+from+subsequent+harvests  
- Backend style / analytics lineage: [Industrial Data Science Workflow](https://github.com/marcosoares-92/IndustrialDataScienceWorkflow)

## Local run (optional)

```bash
cd web_apps/crop_simulator_web
pip install -r requirements.txt
python app.py
```

Open http://127.0.0.1:7860

## Deploy

See `DEPLOY.md` in this folder (browser-oriented Hugging Face Spaces + personal GitHub).
