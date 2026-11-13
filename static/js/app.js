(() => {
  const I18N = {
    pt: {
      title: "Crop Simulator",
      subtitle: "Painel de Controle da Produção Rural",
      kpi_sims: "SIMULAÇÕES",
      kpi_mean: "GY MÉDIA",
      kpi_range: "GY MIN–MAX",
      kpi_days: "DIAS",
      tab_farm: "PLANTAÇÃO",
      tab_data: "DADOS E GRÁFICOS",
      tab_guide: "GUIA DOS PARÂMETROS",
      tab_about: "MISSÃO E APOIO",
      hs_field: "Campo",
      hs_yield: "Produtividade",
      controls_title: "Condições de cultivo",
      controls_hint: "Abra cada item para ver o significado do parâmetro. Depois use os botões da barra inferior.",
      help_dates_sum: "Datas da simulação",
      help_dates: "Definem o período diário da série. O modelo prevê produtividade (GY) para cada dia entre início e fim (máx. 800 dias neste demo).",
      help_cultivar_sum: "Híbrido / cultivar",
      help_cultivar: "Uma entre 40 cultivares do experimento público (UCI). Doze delas entram com one-hot no LSTM; as demais usam codificação zero.",
      help_ph_sum: "PH — Altura da planta (cm)",
      help_ph: "Altura do solo até a inserção da última folha (régua milimetrada). Faixa experimental aproximada: 47,6–94,8 cm.",
      help_ifp_sum: "IFP — Inserção da 1ª vagem (cm)",
      help_ifp: "Altura do solo até a inserção da primeira vagem. Faixa: 7,2–26,4 cm.",
      help_nlp_sum: "NLP — Hastes e ramos",
      help_nlp: "Número de hastes/ramos por contagem manual. Também alimenta NGP (leguminosas/planta) por regressão linear. Faixa: 20,2–123.",
      help_ngl_sum: "NGL — Grãos por planta",
      help_ngl: "Número de grãos por planta (contagem). Faixa: 0,94–14,86.",
      help_ns_sum: "NS — Grãos por vagem",
      help_ns: "Número de grãos por vagem (contagem). Faixa: 0,4–9,0.",
      help_mhg_sum: "MHG — Massa de mil sementes (g)",
      help_mhg: "Thousand seed weight (massa de mil sementes), em gramas. Faixa: 127,1–216,0 g.",
      lbl_start: "Início",
      lbl_end: "Fim",
      lbl_cultivar: "Híbrido",
      lbl_ph: "Altura da planta (PH, cm)",
      lbl_ifp: "Inserção da vagem (IFP, cm)",
      lbl_nlp: "Hastes e ramos (NLP)",
      lbl_ngl: "Grãos por planta (NGL)",
      lbl_ns: "Grãos por vagem (NS)",
      lbl_mhg: "Massa de mil sementes (MHG, g)",
      gazette_idle: "Gazeta da fazenda: aguardando partida da simulação.",
      gazette_ok: "Gazeta da fazenda: simulação #{n} concluída. GY média = {mean} kg/ha. Veja a aba Dados e Gráficos.",
      gazette_err: "Gazeta da fazenda: falha — {err}",
      btn_run: "INICIAR SIMULAÇÃO",
      btn_run_help: "Roda o modelo (KMeans + LSTM) com os parâmetros acima e gera a série de produtividade (GY, kg/ha). O resultado aparece na aba Dados e Gráficos.",
      btn_excel: "BAIXAR EXCEL",
      btn_excel_help: "Baixa todas as simulações desta sessão (planilhas de dados + relatório de parâmetros). Só funciona depois de pelo menos uma simulação.",
      chart_title: "Produtividade de grãos (kg/ha)",
      chart_hint: "Gráfico Plotly interativo: zoom, pan e exportar PNG pelo ícone de câmera na barra do gráfico.",
      table_title: "Tabela da última simulação",
      guide_title: "Guia dos parâmetros e da resposta",
      guide_intro: "Valores inspirados no ensaio público de 40 cultivares de soja (safra 2022/2023, Balsas–MA). O simulador sintetiza uma série diária com variação estatística e prevê GY.",
      guide_resp: "Resposta principal: produtividade de grãos GY (kg/ha), umidade padronizada a 13%.",
      guide_ngp: "Também retorna NGP (leguminosas por planta), calculado a partir de NLP.",
      guide_models: "Modelos em runtime: KMeans (cluster) + LSTM (.keras).",
      guide_actions: "Fluxo: ajuste parâmetros → Iniciar simulação → veja gráfico/tabela → Baixar Excel (e PNG no Plotly).",
      about_title: "Missão e material de apoio",
      about_public: "Usa apenas dados públicos (UCI + artigo científico).",
      about_didactic: "Destinado a treinamento, testes, experimentação e fins didáticos.",
      about_no_prop: "Nenhuma informação proprietária é utilizada.",
      loading: "Calculando produtividade de grãos…",
    },
    en: {
      title: "Crop Simulator",
      subtitle: "Rural Production Control Panel",
      kpi_sims: "SIMULATIONS",
      kpi_mean: "MEAN GY",
      kpi_range: "GY MIN–MAX",
      kpi_days: "DAYS",
      tab_farm: "FARM",
      tab_data: "DATA & CHARTS",
      tab_guide: "PARAMETER GUIDE",
      tab_about: "MISSION & SUPPORT",
      hs_field: "Field",
      hs_yield: "Yield",
      controls_title: "Crop conditions",
      controls_hint: "Expand each item to read the parameter meaning. Then use the bottom action buttons.",
      help_dates_sum: "Simulation dates",
      help_dates: "Define the daily series span. The model predicts yield (GY) for each day from start to end (max 800 days in this demo).",
      help_cultivar_sum: "Cultivar",
      help_cultivar: "One of 40 cultivars from the public UCI experiment. Twelve enter the LSTM as one-hot; others use zero encoding.",
      help_ph_sum: "PH — Plant height (cm)",
      help_ph: "From soil surface to the last leaf insertion (millimeter ruler). Approx. range: 47.6–94.8 cm.",
      help_ifp_sum: "IFP — First pod insertion (cm)",
      help_ifp: "From soil surface to the first pod. Range: 7.2–26.4 cm.",
      help_nlp_sum: "NLP — Stems / branches",
      help_nlp: "Stem/branch count. Also drives NGP (legumes per plant) via linear regression. Range: 20.2–123.",
      help_ngl_sum: "NGL — Grains per plant",
      help_ngl: "Grains per plant (manual count). Range: 0.94–14.86.",
      help_ns_sum: "NS — Grains per pod",
      help_ns: "Grains per pod (manual count). Range: 0.4–9.0.",
      help_mhg_sum: "MHG — Thousand seed weight (g)",
      help_mhg: "Thousand seed weight in grams. Range: 127.1–216.0 g.",
      lbl_start: "Start",
      lbl_end: "End",
      lbl_cultivar: "Cultivar",
      lbl_ph: "Plant height (PH, cm)",
      lbl_ifp: "First pod insertion (IFP, cm)",
      lbl_nlp: "Number of stems (NLP)",
      lbl_ngl: "Grains per plant (NGL)",
      lbl_ns: "Grains per pod (NS)",
      lbl_mhg: "Thousand seed weight (MHG, g)",
      gazette_idle: "Farm gazette: waiting to start the simulation.",
      gazette_ok: "Farm gazette: simulation #{n} complete. Mean GY = {mean} kg/ha. See Data & Charts.",
      gazette_err: "Farm gazette: failure — {err}",
      btn_run: "START SIMULATION",
      btn_run_help: "Runs KMeans + LSTM with the settings above and builds the GY (kg/ha) series. Results open in Data & Charts.",
      btn_excel: "DOWNLOAD EXCEL",
      btn_excel_help: "Downloads all simulations in this session (data sheets + parameter reports). Needs at least one completed run.",
      chart_title: "Grain yield (kg/ha)",
      chart_hint: "Interactive Plotly chart: zoom, pan, and export PNG via the camera icon on the chart toolbar.",
      table_title: "Latest simulation table",
      guide_title: "Parameter and response guide",
      guide_intro: "Values inspired by the public 40-cultivar soybean trial (2022/2023, Balsas–MA). The simulator synthesizes a daily series with statistical variation and predicts GY.",
      guide_resp: "Main response: grain yield GY (kg/ha), moisture standardized to 13%.",
      guide_ngp: "Also returns NGP (legumes per plant), derived from NLP.",
      guide_models: "Runtime models: KMeans (cluster) + LSTM (.keras).",
      guide_actions: "Flow: set parameters → Start simulation → inspect chart/table → Download Excel (and PNG from Plotly).",
      about_title: "Mission and support material",
      about_public: "Uses public data only (UCI + scientific paper).",
      about_didactic: "For training, testing, experimenting and didactic purposes.",
      about_no_prop: "No proprietary information is used.",
      loading: "Computing grain yield…",
    },
  };

  let lang = document.body.dataset.lang || "pt";
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));

  function t(key, vars = {}) {
    let s = (I18N[lang] && I18N[lang][key]) || I18N.pt[key] || key;
    Object.keys(vars).forEach((k) => { s = s.replace(`{${k}}`, vars[k]); });
    return s;
  }

  function applyI18n() {
    $$("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key) el.textContent = t(key);
    });
    document.documentElement.lang = lang;
    $("#btn-pt").classList.toggle("active", lang === "pt");
    $("#btn-en").classList.toggle("active", lang === "en");
  }

  function syncSliders() {
    ["PH", "IFP", "NLP", "NGL", "NS", "MHG"].forEach((id) => {
      const input = $("#" + id);
      const val = Number(input.value);
      const shown = id === "NGL" ? val.toFixed(2) : val.toFixed(1);
      $("#val-" + id).textContent = shown;
      $("#meter-" + id).textContent = shown;
      if (id === "PH") $("#hs-ph").textContent = `${shown} cm`;
    });
    $("#hs-cultivar").textContent = $("#cultivar").value;
  }

  function setLoader(on) {
    $("#loader").classList.toggle("hidden", !on);
    $("#btn-run").disabled = on;
  }

  function renderTable(columns, rows) {
    const thead = $("#results-table thead");
    const tbody = $("#results-table tbody");
    thead.innerHTML = "";
    tbody.innerHTML = "";
    if (!columns || !columns.length) return;
    const hr = document.createElement("tr");
    columns.forEach((c) => {
      const th = document.createElement("th");
      th.textContent = c;
      hr.appendChild(th);
    });
    thead.appendChild(hr);
    rows.slice(0, 200).forEach((row) => {
      const tr = document.createElement("tr");
      columns.forEach((c) => {
        const td = document.createElement("td");
        const v = row[c];
        td.textContent = typeof v === "number" ? Number(v).toFixed(3) : v;
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
  }

  function renderChart(chartPayload) {
    const el = $("#yield-chart");
    if (!el || typeof Plotly === "undefined") return;
    const trace = {
      x: chartPayload.x,
      y: chartPayload.y,
      type: "scatter",
      mode: "lines",
      name: chartPayload.y_label,
      line: { color: "#e8b84a", width: 2.5 },
      fill: "tozeroy",
      fillcolor: "rgba(232, 184, 74, 0.18)",
    };
    const layout = {
      paper_bgcolor: "rgba(0,0,0,0)",
      plot_bgcolor: "rgba(18,24,12,0.65)",
      font: { color: "#f3efe4", family: "Outfit, sans-serif" },
      margin: { t: 28, r: 24, b: 56, l: 64 },
      xaxis: {
        title: chartPayload.x_label,
        gridcolor: "rgba(107,122,78,0.35)",
        zeroline: false,
      },
      yaxis: {
        title: chartPayload.y_label,
        gridcolor: "rgba(107,122,78,0.35)",
        zeroline: false,
      },
      hovermode: "x unified",
    };
    const config = {
      responsive: true,
      displaylogo: false,
      toImageButtonOptions: {
        format: "png",
        filename: "crop_simulator_gy",
        height: 650,
        width: 1100,
        scale: 2,
      },
      modeBarButtonsToRemove: ["lasso2d", "select2d"],
    };
    Plotly.newPlot(el, [trace], layout, config);
  }

  async function setLanguage(next) {
    lang = next;
    document.body.dataset.lang = lang;
    applyI18n();
    try {
      const res = await fetch("/api/language", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lang }),
      });
      const data = await res.json();
      if (data.welcome) $("#welcome-text").textContent = data.welcome;
    } catch (_) { /* UI still switches */ }
  }

  async function runSimulation() {
    setLoader(true);
    const payload = {
      lang,
      start_date: $("#start_date").value,
      end_date: $("#end_date").value,
      cultivar: $("#cultivar").value,
      PH: Number($("#PH").value),
      IFP: Number($("#IFP").value),
      NLP: Number($("#NLP").value),
      NGL: Number($("#NGL").value),
      NS: Number($("#NS").value),
      MHG: Number($("#MHG").value),
    };
    try {
      const res = await fetch("/api/simulate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!data.ok) throw new Error(data.error || "Simulation failed");

      const s = data.summary;
      $("#kpi-sims").textContent = String(s.simulation_number);
      $("#kpi-mean").textContent = `${s.mean_gy.toFixed(1)}`;
      $("#kpi-range").textContent = `${s.min_gy.toFixed(0)}–${s.max_gy.toFixed(0)}`;
      $("#kpi-days").textContent = String(s.n_days);
      $("#hs-yield").textContent = `${s.mean_gy.toFixed(1)} kg/ha`;
      $("#gazette").textContent = t("gazette_ok", {
        n: s.simulation_number,
        mean: s.mean_gy.toFixed(1),
      });

      renderTable(data.columns, data.rows);
      renderChart(data.chart);

      $$(".tab").forEach((btn) => btn.classList.toggle("active", btn.dataset.tab === "data"));
      $$(".tab-panel").forEach((p) => p.classList.toggle("active", p.id === "panel-data"));
    } catch (err) {
      $("#gazette").textContent = t("gazette_err", { err: err.message || String(err) });
    } finally {
      setLoader(false);
    }
  }

  function initTabs() {
    $$(".tab").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.tab;
        $$(".tab").forEach((b) => b.classList.toggle("active", b === btn));
        $$(".tab-panel").forEach((p) => p.classList.toggle("active", p.id === `panel-${id}`));
        if (id === "data" && $("#yield-chart") && typeof Plotly !== "undefined") {
          Plotly.Plots.resize($("#yield-chart"));
        }
      });
    });
  }

  function init() {
    applyI18n();
    syncSliders();
    initTabs();
    ["PH", "IFP", "NLP", "NGL", "NS", "MHG"].forEach((id) => {
      $("#" + id).addEventListener("input", syncSliders);
    });
    $("#cultivar").addEventListener("change", syncSliders);
    $("#btn-run").addEventListener("click", runSimulation);
    $("#btn-pt").addEventListener("click", () => setLanguage("pt"));
    $("#btn-en").addEventListener("click", () => setLanguage("en"));
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
