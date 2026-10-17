// ============================================================================
// OMNI-WRITE STUDIO: 前端互動邏輯與雙語渲染控制器 (js/app.js)
// ============================================================================

(function () {
  // 雙語字典 (i18n Dictionary)
  const i18n = {
    zh: {
      appTitle: "OmniWrite 寫作方法論總合工作台",
      appSubtitle: "橫跨 6 大領域 × 24 種社群與商業面試載體 × 16 大經典寫作架構的智慧範本與方向生成引擎",
      presetLabel: "🎲 載入實戰範例：",
      presetPlaceholder: "選擇一個跨領域範例快速體驗...",
      apiBtn: "🔑 AI 模型與 API 設定",
      apiReady: "🟢 AI 已就緒",
      step1Title: "STEP 1｜輸入你的寫作主題與素材",
      step1Sub: "填入越具體，生成的結構範本與切角方向越精準（支援隨時修改即時更新）",
      labelTopic: "核心主題 / 面試題目 / 想寫的內容 (Topic)",
      phTopic: "例如：AI 時代的個人知識管理、跨部門衝突面試題、新產品上市提案...",
      labelAudience: "目標受眾 / 面試官背景 / 讀者群 (Target Audience)",
      phAudience: "例如：焦慮的職場工作者、科技業招聘主管 (Hiring Manager)、公司決策層...",
      labelPain: "受眾痛點 / 逆境衝突 / 研究缺口 (Pain / Obstacle / Gap)",
      phPain: "例如：跨部門優先級分歧且時間緊迫、看了很多書卻寫不出東西...",
      labelGoal: "寫作目的與行動呼籲 (Goal & CTA)",
      phGoal: "例如：90秒內展現高階決策力拿下Offer、引發留言收藏、說服主管批准預算...",
      labelTone: "語氣與文風 (Tone & Style)",
      phTone: "例如：沉穩自信數據說話、犀利真誠、專業嚴謹、溫柔克制...",
      step2Title: "STEP 2｜選擇使用範圍（領域 Field ＆ 社群/商業載體 Community）",
      step2Sub: "不同領域、面試場景與社群平台有截然不同的節奏、黃金字數與評分偏好",
      selectPlatformTitle: "選擇目標社群、商業提案或面試問答載體：",
      step3Title: "STEP 3｜選擇寫作/答題方法論 (Writing Methodology)",
      step3Sub: "系統已根據你選擇的領域標註「🔥 領域首選」，亦可自由切換或混搭第二種技法",
      hybridLabel: "🔀 進階混搭（選填第二種輔助寫作法）：",
      hybridNone: "— 單一主架構（不混搭）—",
      recommendedBadge: "🔥 領域首選",
      tabBlueprint: "🧭 寫作方向與結構範本",
      tabEditor: "✍️ 互動草稿與檢核工作台",
      tabAI: "✨ AI 即時生成 & Master Prompt",
      tabEncyclopedia: "📖 方法論全圖鑑對照",
      platformPlaybook: "📌 平台演算法與面試官評分攻略",
      sweetSpotLabel: "黃金篇幅/時長建議：",
      anglesTitle: "🎯 三大建議切入方向 (Strategic Angles)",
      hooksTitle: "🪝 專屬破題鉤子 / 前15秒定調範本（點擊即可複製）",
      structureTitle: "📐 結構化段落拆解與填空範本",
      btnLoadToEditor: "📝 將此結構範本帶入草稿工作台編輯",
      btnCopyAllTemplate: "📋 複製完整結構範本",
      pitfallTitle: "⚠️ 此寫作/答題法常見地雷（避坑指南）",
      checklistTitle: "✅ 完稿自我檢核清單 (Self-Check)",
      editorTitle: "✍️ 結構化草稿即時編輯器",
      editorDesc: "已在下方為你載入結構化段落提示，可直接修改填空並追蹤字數與檢核項目",
      wordCountLabel: "目前字數：",
      readTimeLabel: "預估閱讀/口述：",
      minUnit: "分鐘",
      btnCopyDraft: "📋 複製草稿全文",
      btnDownloadMd: "💾 下載 Markdown (.md)",
      btnResetDraft: "🔄 重新從範本載入",
      aiStudioTitle: "🤖 專家級 Master Prompt 與多模型 AI 即時生成",
      aiStudioDesc: "可一鍵複製下方提示詞到任何 AI，或自由切換 Gemini / GPT-4.1 / Claude / OpenRouter / DeepSeek / Ollama 直接生成",
      btnCopyPrompt: "📋 一鍵複製 Master Prompt",
      btnRunLLM: "🚀 立即呼叫 AI 生成客製化方向與完整初稿",
      btnRunningLLM: "⏳ AI 正在深度撰寫中...",
      aiOutputTitle: "✨ AI 客製化生成結果",
      btnSendAiToEditor: "📥 將 AI 生成結果送入草稿編輯器",
      encTitle: "📖 跨領域寫作與面試方法論全圖鑑（16 大核心框架一覽）",
      encSub: "點擊任一卡片可直接套用為目前的主寫作法",
      useThisMethod: "套用此方法論",
      copiedToast: "✅ 已複製到剪貼簿！"
    },
    en: {
      appTitle: "OmniWrite Methodology Studio",
      appSubtitle: "Cross-Field Writing, Business Interview & Community Template Engine (6 Fields × 24 Formats × 16 Frameworks)",
      presetLabel: "🎲 Load Example:",
      presetPlaceholder: "Pick a real-world preset to explore...",
      apiBtn: "🔑 AI Models & API",
      apiReady: "🟢 AI Ready",
      step1Title: "STEP 1 | Input Your Topic & Context",
      step1Sub: "The more specific your input, the more tailored your writing directions and templates become.",
      labelTopic: "Core Topic / Interview Question / Idea",
      phTopic: "e.g., Cross-team conflict interview question, AI knowledge management, Q4 pitch...",
      labelAudience: "Target Audience / Interviewer / Community",
      phAudience: "e.g., Hiring Manager / VP, busy knowledge workers, C-level executives...",
      labelPain: "Pain Point / Obstacle / Research Gap / Conflict",
      phPain: "e.g., Conflicting stakeholder priorities with 4 weeks left, high team handoff friction...",
      labelGoal: "Writing Goal & Call-to-Action (CTA)",
      phGoal: "e.g., Land the job offer in 90s, drive saves & replies, secure budget approval...",
      labelTone: "Tone & Voice",
      phTone: "e.g., Confident & metric-driven, sharp & candid, restrained literary...",
      step2Title: "STEP 2 | Select Field & Community / Format",
      step2Sub: "Each field, interview format, and community has distinct pacing, sweet spots, and evaluation signals.",
      selectPlatformTitle: "Select Target Platform / Interview Format:",
      step3Title: "STEP 3 | Choose Writing / Interview Methodology",
      step3Sub: "Best-fit frameworks for your selected field are highlighted with 🔥. You can also blend a secondary method.",
      hybridLabel: "🔀 Hybrid Mode (Optional Secondary Method):",
      hybridNone: "— Single Primary Framework —",
      recommendedBadge: "🔥 Best Fit",
      tabBlueprint: "🧭 Direction & Blueprint",
      tabEditor: "✍️ Live Draft & Checklist",
      tabAI: "✨ Live AI & Master Prompt",
      tabEncyclopedia: "📖 Methodology Encyclopedia",
      platformPlaybook: "📌 Platform Algorithm & Evaluator Playbook",
      sweetSpotLabel: "Ideal Length / Duration:",
      anglesTitle: "🎯 3 Strategic Angles",
      hooksTitle: "🪝 Custom Opening Hooks (Click to Copy)",
      structureTitle: "📐 Step-by-Step Structural Template",
      btnLoadToEditor: "📝 Load Template into Draft Editor",
      btnCopyAllTemplate: "📋 Copy Full Template",
      pitfallTitle: "⚠️ Common Pitfalls to Avoid",
      checklistTitle: "✅ Quality Self-Checklist",
      editorTitle: "✍️ Interactive Draft Editor",
      editorDesc: "Refine your structured draft below while tracking length and quality checkpoints.",
      wordCountLabel: "Characters / Words:",
      readTimeLabel: "Est. Read / Speak Time:",
      minUnit: "min",
      btnCopyDraft: "📋 Copy Draft",
      btnDownloadMd: "💾 Download Markdown (.md)",
      btnResetDraft: "🔄 Reset from Template",
      aiStudioTitle: "🤖 Master Prompt & Multi-Model Live LLM Generation",
      aiStudioDesc: "Copy the engineered Master Prompt into any AI chat, or switch across 7 LLM providers (30+ models) to generate right here.",
      btnCopyPrompt: "📋 Copy Master Prompt",
      btnRunLLM: "🚀 Generate Custom Draft via LLM API",
      btnRunningLLM: "⏳ Generating with AI...",
      aiOutputTitle: "✨ AI Generated Output",
      btnSendAiToEditor: "📥 Send AI Output to Draft Editor",
      encTitle: "📖 Writing & Interview Methodology Encyclopedia (16 Core Frameworks)",
      encSub: "Click any framework card to apply it immediately to your project.",
      useThisMethod: "Apply Methodology",
      copiedToast: "✅ Copied to clipboard!"
    }
  };

  // 應用程式狀態 (Application State)
  const state = {
    lang: "zh",
    theme: "dark",
    activeTab: "blueprint", // blueprint | editor | ai | encyclopedia
    categoryFilter: "all",
    fieldId: "social",
    platformId: "threads",
    methodId: "pas",
    secondaryMethodId: "",
    topic: "AI 工具普及後，知識工作者的真正核心競爭力",
    audience: "每天焦慮被 AI 取代的職場白領與自媒體創作者",
    pain: "學了幾十種 Prompt 和 AI 工具，產出變快了但內容卻越來越像罐頭、毫無個人辨識度",
    goal: "引發強烈共鳴、破除盲目追工具的迷思，獲得高收藏與留言互動",
    tone: "犀利真誠、一針見血、像朋友深夜聊天",
    draftText: "",
    aiOutputText: "",
    isGeneratingAI: false,
    llmConfig: {
      provider: localStorage.getItem("omniwrite_provider") || "gemini",
      apiKey: localStorage.getItem("omniwrite_apikey") || "",
      model: localStorage.getItem("omniwrite_model") || "gemini-2.5-flash",
      baseUrl: localStorage.getItem("omniwrite_baseurl") || "https://api.openai.com/v1"
    }
  };

  const TONE_CHIPS = {
    zh: [
      "犀利真誠・一針見血",
      "專業沉穩・數據說話",
      "溫暖共情・像老友聊天",
      "深入淺出・生動比喻",
      "學術嚴謹・客觀中立",
      "克制內斂・文學留白",
      "熱血感召・行動力強"
    ],
    en: [
      "Sharp & Candid",
      "Executive & Data-Driven",
      "Warm & Empathetic",
      "Playful & Analogy-Rich",
      "Academic & Rigorous",
      "Restrained Literary",
      "Bold & Inspiring"
    ]
  };

  // 工具函式：顯示 Toast 通知
  function showToast(msg) {
    const toast = document.getElementById("toast-banner");
    if (!toast) return;
    toast.textContent = msg || i18n[state.lang].copiedToast;
    toast.classList.remove("opacity-0", "pointer-events-none", "translate-y-2");
    toast.classList.add("opacity-100", "translate-y-0");
    clearTimeout(window.__toastTimer);
    window.__toastTimer = setTimeout(() => {
      toast.classList.add("opacity-0", "pointer-events-none", "translate-y-2");
      toast.classList.remove("opacity-100", "translate-y-0");
    }, 2200);
  }

  function copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(i18n[state.lang].copiedToast);
    });
  }

  // 將方法論範本填入使用者變數
  function fillTemplateText(rawTemplate) {
    const t = state.topic || (state.lang === "zh" ? "核心主題" : "Core Topic");
    const a = state.audience || (state.lang === "zh" ? "目標受眾" : "Target Audience");
    const p = state.pain || (state.lang === "zh" ? "核心痛點" : "Core Pain Point");
    return rawTemplate
      .replace(/\{topic\}/g, t)
      .replace(/\{audience\}/g, a)
      .replace(/\{pain\}/g, p);
  }

  // 組合完整結構化範本草稿
  function buildFullTemplateDraft() {
    const info = window.generateStrategicDirections(state, state.lang);
    const { field, platform, method, secMethod } = info;
    const lines = [];
    lines.push(`# ${state.topic || "未命名主題"}`);
    lines.push(`> 領域：${field.name[state.lang]} ｜ 載體：${platform.name[state.lang]} ｜ 架構：${method.name[state.lang]}${secMethod ? " × " + secMethod.name[state.lang] : ""}`);
    lines.push(`> 目標受眾：${state.audience} ｜ 語氣風格：${state.tone}`);
    lines.push("");
    lines.push(`## 💡 破題鉤子候選 (Opening Hook)`);
    if (info.customizedHooks.length > 0) {
      lines.push(info.customizedHooks[0]);
    }
    lines.push("");

    method.steps.forEach((step, idx) => {
      lines.push(`## ${idx + 1}. ${step.label[state.lang]} （建議佔比 ${step.ratio}）`);
      lines.push(`<!-- 階段任務：${step.purpose[state.lang]} -->`);
      lines.push(fillTemplateText(step.template));
      lines.push("");
    });

    return lines.join("\n");
  }

  // 初始化與綁定事件
  function init() {
    // 預設載入草稿
    state.draftText = buildFullTemplateDraft();

    // 綁定主題切換
    document.getElementById("btn-theme-toggle").addEventListener("click", () => {
      state.theme = state.theme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", state.theme);
      document.getElementById("btn-theme-toggle").textContent = state.theme === "dark" ? "☀️ Light" : "🌙 Dark";
    });

    // 綁定語言切換
    document.getElementById("btn-lang-toggle").addEventListener("click", () => {
      state.lang = state.lang === "zh" ? "en" : "zh";
      document.getElementById("btn-lang-toggle").textContent = state.lang === "zh" ? "🌐 EN / 中文" : "🌐 中文 / EN";
      renderAll();
    });

    // 綁定範例選擇器
    const presetSelect = document.getElementById("preset-selector");
    presetSelect.addEventListener("change", (e) => {
      const pid = e.target.value;
      const found = window.PRESET_EXAMPLES.find(p => p.id === pid);
      if (found) {
        state.fieldId = found.fieldId;
        state.platformId = found.platformId;
        state.methodId = found.methodId;
        state.secondaryMethodId = found.secondaryMethodId || "";
        state.topic = found.topic;
        state.audience = found.audience;
        state.pain = found.pain;
        state.goal = found.goal;
        state.tone = found.tone;
        syncInputsFromState();
        state.draftText = buildFullTemplateDraft();
        renderAll();
        showToast(state.lang === "zh" ? "🎲 已載入實戰範例並更新範本！" : "🎲 Preset loaded!");
      }
    });

    // 綁定表單輸入即時更新
    const bindInput = (id, key) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.addEventListener("input", (e) => {
        state[key] = e.target.value;
        renderRightWorkspace();
      });
    };
    bindInput("input-topic", "topic");
    bindInput("input-audience", "audience");
    bindInput("input-pain", "pain");
    bindInput("input-goal", "goal");
    bindInput("input-tone", "tone");

    // 綁定混搭方法論選擇器
    document.getElementById("select-secondary-method").addEventListener("change", (e) => {
      state.secondaryMethodId = e.target.value;
      renderRightWorkspace();
    });

    // 綁定右側 Tabs
    document.querySelectorAll("[data-tab-target]").forEach(btn => {
      btn.addEventListener("click", () => {
        state.activeTab = btn.getAttribute("data-tab-target");
        renderTabsState();
        renderRightWorkspace();
      });
    });

    // 綁定 API Modal
    document.getElementById("btn-open-api-modal").addEventListener("click", () => {
      document.getElementById("api-modal").classList.remove("hidden");
      const prov = state.llmConfig.provider || "gemini";
      document.getElementById("api-provider").value = prov;
      document.getElementById("api-key-input").value = state.llmConfig.apiKey;
      document.getElementById("api-baseurl-input").value = state.llmConfig.baseUrl || (window.LLM_PROVIDERS[prov]?.defaultBaseUrl || "");
      populateModelSelectForProvider(prov, state.llmConfig.model);
      toggleBaseUrlField();
    });

    document.getElementById("api-provider").addEventListener("change", (e) => {
      const prov = e.target.value;
      const provMeta = window.LLM_PROVIDERS[prov] || window.LLM_PROVIDERS.gemini;
      document.getElementById("api-baseurl-input").value = provMeta.defaultBaseUrl;
      document.getElementById("api-key-input").placeholder = provMeta.keyPlaceholder;
      populateModelSelectForProvider(prov, provMeta.models[0].id);
      toggleBaseUrlField();
    });

    document.getElementById("api-model-select").addEventListener("change", (e) => {
      const val = e.target.value;
      if (val && val !== "__custom__") {
        document.getElementById("api-model-input").value = val;
      } else if (val === "__custom__") {
        document.getElementById("api-model-input").focus();
      }
    });

    document.getElementById("btn-close-api-modal").addEventListener("click", () => {
      document.getElementById("api-modal").classList.add("hidden");
    });

    const saveApiFromModal = () => {
      state.llmConfig.provider = document.getElementById("api-provider").value;
      state.llmConfig.apiKey = document.getElementById("api-key-input").value.trim();
      state.llmConfig.model = document.getElementById("api-model-input").value.trim();
      state.llmConfig.baseUrl = document.getElementById("api-baseurl-input").value.trim();

      localStorage.setItem("omniwrite_provider", state.llmConfig.provider);
      localStorage.setItem("omniwrite_apikey", state.llmConfig.apiKey);
      localStorage.setItem("omniwrite_model", state.llmConfig.model);
      localStorage.setItem("omniwrite_baseurl", state.llmConfig.baseUrl);

      document.getElementById("api-modal").classList.add("hidden");
      updateApiButtonBadge();
    };

    document.getElementById("btn-save-api").addEventListener("click", () => {
      saveApiFromModal();
      if (state.activeTab === "ai") {
        renderRightWorkspace();
      }
      showToast(state.lang === "zh" ? `🔑 已儲存模型設定：${state.llmConfig.model}` : `🔑 Saved Model: ${state.llmConfig.model}`);
    });

    const saveAndRunBtn = document.getElementById("btn-save-and-run-api");
    if (saveAndRunBtn) {
      saveAndRunBtn.addEventListener("click", () => {
        saveApiFromModal();
        state.activeTab = "ai";
        renderTabsState();
        renderRightWorkspace();
        setTimeout(() => {
          const runBtn = document.getElementById("btn-run-llm");
          if (runBtn) runBtn.click();
        }, 60);
      });
    }

    syncInputsFromState();
    renderAll();
  }

  function populateModelSelectForProvider(provKey, currentModelId) {
    const provMeta = window.LLM_PROVIDERS[provKey] || window.LLM_PROVIDERS.gemini;
    const sel = document.getElementById("api-model-select");
    const modelInput = document.getElementById("api-model-input");
    if (!sel || !modelInput) return;

    sel.innerHTML = provMeta.models.map(m => `<option value="${m.id}">${m.label}</option>`).join("") +
      `<option value="__custom__">✏️ 自訂輸入其他模型 ID (Custom Model ID)...</option>`;

    const existsInPreset = provMeta.models.some(m => m.id === currentModelId);
    if (existsInPreset) {
      sel.value = currentModelId;
      modelInput.value = currentModelId;
    } else if (currentModelId) {
      sel.value = "__custom__";
      modelInput.value = currentModelId;
    } else {
      sel.value = provMeta.models[0].id;
      modelInput.value = provMeta.models[0].id;
    }
  }

  function toggleBaseUrlField() {
    const prov = document.getElementById("api-provider").value;
    const wrap = document.getElementById("baseurl-wrapper");
    const keyWrap = document.getElementById("apikey-wrapper");
    const provMeta = window.LLM_PROVIDERS[prov] || window.LLM_PROVIDERS.gemini;
    if (prov === "gemini") {
      wrap.classList.add("hidden");
    } else {
      wrap.classList.remove("hidden");
    }
    if (keyWrap) {
      document.getElementById("api-key-input").placeholder = provMeta.keyPlaceholder;
    }
  }

  function syncInputsFromState() {
    document.getElementById("input-topic").value = state.topic;
    document.getElementById("input-audience").value = state.audience;
    document.getElementById("input-pain").value = state.pain;
    document.getElementById("input-goal").value = state.goal;
    document.getElementById("input-tone").value = state.tone;
  }

  function updateApiButtonBadge() {
    const t = i18n[state.lang];
    const btn = document.getElementById("btn-open-api-modal");
    const provMeta = window.LLM_PROVIDERS[state.llmConfig.provider] || window.LLM_PROVIDERS.gemini;
    if (state.llmConfig.apiKey || !provMeta.requiresKey) {
      btn.textContent = `${t.apiReady} (${state.llmConfig.model || provMeta.models[0].id})`;
      btn.classList.add("border-emerald-500/60", "text-emerald-400");
    } else {
      btn.textContent = t.apiBtn;
      btn.classList.remove("border-emerald-500/60", "text-emerald-400");
    }
  }

  // 主渲染入口
  function renderAll() {
    const t = i18n[state.lang];
    // 靜態文字翻譯
    document.getElementById("app-title").textContent = t.appTitle;
    document.getElementById("app-subtitle").textContent = t.appSubtitle;
    document.getElementById("label-preset").textContent = t.presetLabel;
    document.getElementById("step1-title").textContent = t.step1Title;
    document.getElementById("step1-sub").textContent = t.step1Sub;
    document.getElementById("label-topic").textContent = t.labelTopic;
    document.getElementById("input-topic").placeholder = t.phTopic;
    document.getElementById("label-audience").textContent = t.labelAudience;
    document.getElementById("input-audience").placeholder = t.phAudience;
    document.getElementById("label-pain").textContent = t.labelPain;
    document.getElementById("input-pain").placeholder = t.phPain;
    document.getElementById("label-goal").textContent = t.labelGoal;
    document.getElementById("input-goal").placeholder = t.phGoal;
    document.getElementById("label-tone").textContent = t.labelTone;
    document.getElementById("input-tone").placeholder = t.phTone;

    document.getElementById("step2-title").textContent = t.step2Title;
    document.getElementById("step2-sub").textContent = t.step2Sub;
    document.getElementById("label-select-platform").textContent = t.selectPlatformTitle;

    document.getElementById("step3-title").textContent = t.step3Title;
    document.getElementById("step3-sub").textContent = t.step3Sub;
    document.getElementById("label-hybrid").textContent = t.hybridLabel;

    document.getElementById("tab-btn-blueprint").textContent = t.tabBlueprint;
    document.getElementById("tab-btn-editor").textContent = t.tabEditor;
    document.getElementById("tab-btn-ai").textContent = t.tabAI;
    document.getElementById("tab-btn-encyclopedia").textContent = t.tabEncyclopedia;

    updateApiButtonBadge();
    renderPresetDropdown();
    renderToneChips();
    renderFieldsAndPlatforms();
    renderCategoryPills();
    renderMethodologyCards();
    renderSecondaryMethodDropdown();
    renderTabsState();
    renderRightWorkspace();
  }

  function renderPresetDropdown() {
    const t = i18n[state.lang];
    const sel = document.getElementById("preset-selector");
    const currentVal = sel.value;
    sel.innerHTML = `<option value="">${t.presetPlaceholder}</option>` +
      window.PRESET_EXAMPLES.map(p => `<option value="${p.id}">${p.label[state.lang]}</option>`).join("");
    sel.value = currentVal;
  }

  function renderToneChips() {
    const container = document.getElementById("tone-chips-container");
    const chips = TONE_CHIPS[state.lang];
    container.innerHTML = chips.map(c => `
      <button type="button" class="tone-chip px-2.5 py-1 rounded-full text-xs border transition-all hover:opacity-90"
        style="background: var(--accent); border-color: var(--border); color: var(--foreground);"
        data-tone="${c}">
        ${c}
      </button>
    `).join("");

    container.querySelectorAll(".tone-chip").forEach(btn => {
      btn.addEventListener("click", () => {
        state.tone = btn.getAttribute("data-tone");
        document.getElementById("input-tone").value = state.tone;
        renderRightWorkspace();
      });
    });
  }

  function renderFieldsAndPlatforms() {
    const fieldsGrid = document.getElementById("fields-grid");
    const platformsGrid = document.getElementById("platforms-grid");

    fieldsGrid.innerHTML = window.WRITING_DATA.fields.map(f => {
      const isSelected = f.id === state.fieldId;
      return `
        <button type="button" data-field-id="${f.id}"
          class="field-card text-left p-3 rounded-xl border transition-all flex flex-col justify-between ${isSelected ? "ring-2 ring-indigo-500 bg-indigo-500/10 border-indigo-500" : "hover:border-indigo-400/50"}"
          style="${isSelected ? "" : "background: var(--card); border-color: var(--border);"}">
          <div class="flex items-center gap-2 font-semibold text-sm">
            <span class="text-lg">${f.icon}</span>
            <span>${f.name[state.lang]}</span>
          </div>
          <p class="text-xs mt-1.5 leading-relaxed" style="color: var(--muted-foreground);">${f.desc[state.lang]}</p>
        </button>
      `;
    }).join("");

    fieldsGrid.querySelectorAll(".field-card").forEach(btn => {
      btn.addEventListener("click", () => {
        const newFieldId = btn.getAttribute("data-field-id");
        state.fieldId = newFieldId;
        const fieldObj = window.WRITING_DATA.fields.find(f => f.id === newFieldId);
        if (fieldObj && fieldObj.platforms.length > 0) {
          state.platformId = fieldObj.platforms[0].id;
        }
        // 自動切換為該領域第一推薦的寫作法
        if (fieldObj && fieldObj.recommendedMethods.length > 0) {
          state.methodId = fieldObj.recommendedMethods[0];
        }
        renderFieldsAndPlatforms();
        renderMethodologyCards();
        renderRightWorkspace();
      });
    });

    const currentField = window.WRITING_DATA.fields.find(f => f.id === state.fieldId) || window.WRITING_DATA.fields[0];
    platformsGrid.innerHTML = currentField.platforms.map(p => {
      const isSelected = p.id === state.platformId;
      return `
        <button type="button" data-platform-id="${p.id}"
          class="platform-pill px-3 py-2 rounded-lg border text-xs font-medium transition-all text-left flex items-center justify-between gap-2 ${isSelected ? "bg-indigo-600 text-white border-indigo-500 shadow-sm" : "hover:border-indigo-400/50"}"
          style="${isSelected ? "" : "background: var(--accent); border-color: var(--border); color: var(--foreground);"}">
          <span>${p.name[state.lang]}</span>
          ${isSelected ? "<span>✓</span>" : ""}
        </button>
      `;
    }).join("");

    platformsGrid.querySelectorAll(".platform-pill").forEach(btn => {
      btn.addEventListener("click", () => {
        state.platformId = btn.getAttribute("data-platform-id");
        renderFieldsAndPlatforms();
        renderRightWorkspace();
      });
    });
  }

  function renderCategoryPills() {
    const container = document.getElementById("category-pills");
    container.innerHTML = window.WRITING_DATA.categories.map(cat => {
      const active = cat.id === state.categoryFilter;
      return `
        <button type="button" data-cat-id="${cat.id}"
          class="cat-pill px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${active ? "bg-indigo-600 text-white border-indigo-500" : ""}"
          style="${active ? "" : "background: var(--accent); border-color: var(--border); color: var(--foreground);"}">
          ${cat.name[state.lang]}
        </button>
      `;
    }).join("");

    container.querySelectorAll(".cat-pill").forEach(btn => {
      btn.addEventListener("click", () => {
        state.categoryFilter = btn.getAttribute("data-cat-id");
        renderCategoryPills();
        renderMethodologyCards();
      });
    });
  }

  function renderMethodologyCards() {
    const t = i18n[state.lang];
    const container = document.getElementById("methodologies-list");
    const currentField = window.WRITING_DATA.fields.find(f => f.id === state.fieldId) || window.WRITING_DATA.fields[0];
    const recommendedIds = currentField.recommendedMethods || [];

    let methods = window.WRITING_DATA.methodologies.slice();
    if (state.categoryFilter !== "all") {
      methods = methods.filter(m => m.category === state.categoryFilter);
    }

    // 排序：領域推薦的排在前面
    methods.sort((a, b) => {
      const aRec = recommendedIds.indexOf(a.id);
      const bRec = recommendedIds.indexOf(b.id);
      if (aRec !== -1 && bRec !== -1) return aRec - bRec;
      if (aRec !== -1) return -1;
      if (bRec !== -1) return 1;
      return 0;
    });

    container.innerHTML = methods.map(m => {
      const isSelected = m.id === state.methodId;
      const isRec = recommendedIds.includes(m.id);
      return `
        <button type="button" data-method-id="${m.id}"
          class="method-card w-full text-left p-3.5 rounded-xl border transition-all ${isSelected ? "ring-2 ring-indigo-500 bg-indigo-500/10 border-indigo-500" : "hover:border-indigo-400/50"}"
          style="${isSelected ? "" : "background: var(--card); border-color: var(--border);"}">
          <div class="flex items-center justify-between gap-2 flex-wrap">
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 rounded text-xs font-bold bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">${m.code}</span>
              <span class="font-semibold text-sm">${m.name[state.lang]}</span>
            </div>
            <div class="flex items-center gap-1.5">
              ${isRec ? `<span class="px-2 py-0.5 rounded-full text-xs font-medium bg-amber-500/20 text-amber-400 border border-amber-500/30">${t.recommendedBadge}</span>` : ""}
              <span class="text-xs" style="color: var(--muted-foreground);">${m.difficulty}</span>
            </div>
          </div>
          <p class="text-xs mt-1.5 leading-relaxed" style="color: var(--muted-foreground);">${m.tagline[state.lang]}</p>
        </button>
      `;
    }).join("");

    container.querySelectorAll(".method-card").forEach(btn => {
      btn.addEventListener("click", () => {
        state.methodId = btn.getAttribute("data-method-id");
        renderMethodologyCards();
        renderRightWorkspace();
      });
    });
  }

  function renderSecondaryMethodDropdown() {
    const t = i18n[state.lang];
    const sel = document.getElementById("select-secondary-method");
    sel.innerHTML = `<option value="">${t.hybridNone}</option>` +
      window.WRITING_DATA.methodologies.map(m => `<option value="${m.id}">[${m.code}] ${m.name[state.lang]}</option>`).join("");
    sel.value = state.secondaryMethodId;
  }

  function renderTabsState() {
    document.querySelectorAll("[data-tab-target]").forEach(btn => {
      const target = btn.getAttribute("data-tab-target");
      const active = target === state.activeTab;
      if (active) {
        btn.classList.add("bg-indigo-600", "text-white", "border-indigo-500", "shadow-sm");
      } else {
        btn.classList.remove("bg-indigo-600", "text-white", "border-indigo-500", "shadow-sm");
      }
    });
  }

  // 渲染右側四大工作台視圖
  function renderRightWorkspace() {
    const container = document.getElementById("workspace-content");
    if (state.activeTab === "blueprint") {
      renderBlueprintView(container);
    } else if (state.activeTab === "editor") {
      renderEditorView(container);
    } else if (state.activeTab === "ai") {
      renderAIStudioView(container);
    } else if (state.activeTab === "encyclopedia") {
      renderEncyclopediaView(container);
    }
  }

  // Tab 1: 寫作方向與結構範本視圖
  function renderBlueprintView(container) {
    const t = i18n[state.lang];
    const info = window.generateStrategicDirections(state, state.lang);
    const { field, platform, method, secMethod, angles, hybridGuide, customizedHooks } = info;

    const stepsHtml = method.steps.map((s, idx) => {
      const filled = fillTemplateText(s.template);
      const checks = s.checklist.map(c => `<li class="flex items-start gap-1.5 text-xs" style="color: var(--muted-foreground);"><span>☑️</span><span>${c}</span></li>`).join("");
      return `
        <div class="p-4 rounded-xl border transition-all" style="background: var(--card); border-color: var(--border);">
          <div class="flex items-center justify-between gap-2 flex-wrap mb-2">
            <div class="flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center">${idx + 1}</span>
              <h4 class="font-bold text-sm">${s.label[state.lang]}</h4>
            </div>
            <span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/15 text-indigo-400 border border-indigo-500/30">
              篇幅佔比 ${s.ratio}
            </span>
          </div>
          <p class="text-xs mb-3" style="color: var(--muted-foreground);">🎯 ${s.purpose[state.lang]}</p>
          <div class="p-3 rounded-lg border text-sm leading-relaxed whitespace-pre-wrap font-mono relative group"
               style="background: var(--background); border-color: var(--border);">
            <button type="button" class="btn-copy-step absolute top-2 right-2 px-2 py-1 rounded text-xs border opacity-80 hover:opacity-100"
                    style="background: var(--card); border-color: var(--border);"
                    data-step-text="${encodeURIComponent(filled)}">
              📋 複製此段
            </button>
            <div class="pr-20">${filled}</div>
          </div>
          <ul class="mt-2.5 space-y-1">
            ${checks}
          </ul>
        </div>
      `;
    }).join("");

    const hybridHtml = hybridGuide ? `
      <div class="p-4 rounded-xl border border-amber-500/40 bg-amber-500/10 mb-5">
        <div class="font-bold text-sm text-amber-400 mb-1">🔀 雙方法論混搭策略：${hybridGuide.title}</div>
        <p class="text-xs leading-relaxed">${hybridGuide.strategy}</p>
      </div>
    ` : "";

    container.innerHTML = `
      <!-- 頂部摘要列 -->
      <div class="p-4 rounded-xl border mb-5" style="background: var(--accent); border-color: var(--border);">
        <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-600 text-white">${field.icon} ${field.name[state.lang]}</span>
            <span class="text-xs font-semibold">➔</span>
            <span class="px-2.5 py-1 rounded-md text-xs font-semibold border" style="background: var(--card); border-color: var(--border);">${platform.name[state.lang]}</span>
            <span class="text-xs font-semibold">×</span>
            <span class="px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">${method.code}｜${method.name[state.lang]}</span>
          </div>
          <span class="text-xs font-medium" style="color: var(--muted-foreground);">⏱️ ${t.sweetSpotLabel} <strong style="color: var(--foreground);">${platform.SweetSpot[state.lang]}</strong></span>
        </div>
        <div class="text-xs leading-relaxed mt-2 p-3 rounded-lg border" style="background: var(--card); border-color: var(--border);">
          <strong class="text-indigo-400">${t.platformPlaybook}：</strong> ${platform.algorithmTip[state.lang]}
        </div>
      </div>

      ${hybridHtml}

      <!-- 三大建議切角 -->
      <div class="mb-6">
        <h3 class="text-base font-bold mb-3">${t.anglesTitle}</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
          ${angles.map(a => `
            <div class="p-3.5 rounded-xl border flex flex-col justify-between" style="background: var(--card); border-color: var(--border);">
              <div>
                <span class="inline-block px-2 py-0.5 rounded text-xs font-semibold bg-indigo-500/15 text-indigo-400 mb-2">${a.badge}</span>
                <h4 class="font-bold text-sm mb-1.5 leading-snug">${a.title}</h4>
                <p class="text-xs leading-relaxed" style="color: var(--muted-foreground);">${a.desc}</p>
              </div>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- 破題鉤子範本 -->
      <div class="mb-6">
        <h3 class="text-base font-bold mb-2.5">${t.hooksTitle}</h3>
        <div class="space-y-2">
          ${customizedHooks.map((h, i) => `
            <div class="hook-item p-3 rounded-xl border text-sm flex items-center justify-between gap-3 cursor-pointer hover:border-indigo-500 transition-all"
                 style="background: var(--card); border-color: var(--border);"
                 data-hook="${encodeURIComponent(h)}">
              <div class="flex items-start gap-2.5">
                <span class="px-2 py-0.5 rounded text-xs font-bold bg-indigo-500/20 text-indigo-400">Hook ${i + 1}</span>
                <span class="leading-relaxed">${h}</span>
              </div>
              <span class="text-xs shrink-0 px-2 py-1 rounded border" style="border-color: var(--border); color: var(--muted-foreground);">📋 Copy</span>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- 結構化段落範本 -->
      <div class="mb-6">
        <div class="flex items-center justify-between flex-wrap gap-2 mb-3">
          <div>
            <h3 class="text-base font-bold">${t.structureTitle}：${method.name[state.lang]}</h3>
            <p class="text-xs mt-0.5" style="color: var(--muted-foreground);">${method.summary[state.lang]}</p>
          </div>
          <div class="flex items-center gap-2">
            <button type="button" id="btn-copy-full-template" class="px-3 py-1.5 rounded-lg border text-xs font-semibold hover:opacity-90 transition-all"
                    style="background: var(--accent); border-color: var(--border);">
              ${t.btnCopyAllTemplate}
            </button>
            <button type="button" id="btn-send-to-editor" class="px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-sm transition-all">
              ${t.btnLoadToEditor}
            </button>
          </div>
        </div>

        <div class="space-y-3.5">
          ${stepsHtml}
        </div>
      </div>

      <!-- 避坑指南 -->
      <div class="p-4 rounded-xl border border-rose-500/30 bg-rose-500/10">
        <h4 class="font-bold text-sm text-rose-400 mb-1">${t.pitfallTitle}</h4>
        <p class="text-xs leading-relaxed">${method.pitfalls[state.lang]}</p>
      </div>
    `;

    // 綁定複製事件
    container.querySelectorAll(".hook-item").forEach(el => {
      el.addEventListener("click", () => {
        copyText(decodeURIComponent(el.getAttribute("data-hook")));
      });
    });

    container.querySelectorAll(".btn-copy-step").forEach(btn => {
      btn.addEventListener("click", () => {
        copyText(decodeURIComponent(btn.getAttribute("data-step-text")));
      });
    });

    document.getElementById("btn-copy-full-template").addEventListener("click", () => {
      copyText(buildFullTemplateDraft());
    });

    document.getElementById("btn-send-to-editor").addEventListener("click", () => {
      state.draftText = buildFullTemplateDraft();
      state.activeTab = "editor";
      renderTabsState();
      renderRightWorkspace();
      showToast(state.lang === "zh" ? "✍️ 已將結構範本匯入草稿編輯器！" : "✍️ Template loaded into editor!");
    });
  }

  // Tab 2: 互動草稿編輯器與檢核清單
  function renderEditorView(container) {
    const t = i18n[state.lang];
    const info = window.generateStrategicDirections(state, state.lang);
    const { platform, method } = info;

    if (!state.draftText) {
      state.draftText = buildFullTemplateDraft();
    }

    const allChecks = [];
    method.steps.forEach(s => {
      s.checklist.forEach(c => {
        allChecks.push({ step: s.key, text: c });
      });
    });

    container.innerHTML = `
      <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div>
          <h3 class="text-base font-bold">${t.editorTitle}</h3>
          <p class="text-xs mt-0.5" style="color: var(--muted-foreground);">${t.editorDesc}</p>
        </div>
        <div class="flex items-center gap-2">
          <button type="button" id="btn-reset-draft" class="px-3 py-1.5 rounded-lg border text-xs font-medium hover:opacity-90"
                  style="background: var(--accent); border-color: var(--border);">
            ${t.btnResetDraft}
          </button>
          <button type="button" id="btn-copy-draft" class="px-3 py-1.5 rounded-lg border text-xs font-semibold hover:opacity-90"
                  style="background: var(--card); border-color: var(--border);">
            ${t.btnCopyDraft}
          </button>
          <button type="button" id="btn-download-md" class="px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold">
            ${t.btnDownloadMd}
          </button>
        </div>
      </div>

      <!-- 狀態列 -->
      <div class="p-3 rounded-xl border mb-4 flex flex-wrap items-center justify-between gap-3 text-xs"
           style="background: var(--accent); border-color: var(--border);">
        <div class="flex items-center gap-4">
          <span>${t.wordCountLabel} <strong id="live-char-count" class="text-indigo-400 font-bold">0</strong></span>
          <span>${t.readTimeLabel} <strong id="live-read-time" class="text-indigo-400 font-bold">1</strong> ${t.minUnit}</span>
        </div>
        <div style="color: var(--muted-foreground);">
          🎯 ${platform.name[state.lang]} ${t.sweetSpotLabel} <strong style="color: var(--foreground);">${platform.SweetSpot[state.lang]}</strong>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div class="lg:col-span-2">
          <textarea id="draft-textarea" rows="18"
            class="w-full p-4 rounded-xl border text-sm font-mono leading-relaxed focus:outline-none focus:ring-2 focus:ring-indigo-500"
            style="background: var(--background); border-color: var(--border); color: var(--foreground);"></textarea>
        </div>
        <div class="space-y-4">
          <div class="p-4 rounded-xl border" style="background: var(--card); border-color: var(--border);">
            <h4 class="font-bold text-sm mb-2.5">${t.checklistTitle}（${method.code}）</h4>
            <div class="space-y-2.5">
              ${allChecks.map((item, idx) => `
                <label class="flex items-start gap-2 text-xs cursor-pointer leading-relaxed">
                  <input type="checkbox" class="mt-0.5 rounded border-gray-400 text-indigo-600 focus:ring-indigo-500" />
                  <span><strong class="text-indigo-400">[${item.step}]</strong> ${item.text}</span>
                </label>
              `).join("")}
            </div>
          </div>

          <div class="p-4 rounded-xl border" style="background: var(--card); border-color: var(--border);">
            <h4 class="font-bold text-sm mb-1.5">💡 平台排版提醒</h4>
            <p class="text-xs leading-relaxed" style="color: var(--muted-foreground);">${platform.algorithmTip[state.lang]}</p>
          </div>
        </div>
      </div>
    `;

    const textarea = document.getElementById("draft-textarea");
    textarea.value = state.draftText;

    const updateMetrics = () => {
      const len = textarea.value.trim().length;
      document.getElementById("live-char-count").textContent = len;
      document.getElementById("live-read-time").textContent = Math.max(1, Math.ceil(len / 350));
    };
    updateMetrics();

    textarea.addEventListener("input", (e) => {
      state.draftText = e.target.value;
      updateMetrics();
    });

    document.getElementById("btn-reset-draft").addEventListener("click", () => {
      state.draftText = buildFullTemplateDraft();
      textarea.value = state.draftText;
      updateMetrics();
      showToast(state.lang === "zh" ? "🔄 已重新載入最新範本！" : "🔄 Draft reset from template!");
    });

    document.getElementById("btn-copy-draft").addEventListener("click", () => {
      copyText(state.draftText);
    });

    document.getElementById("btn-download-md").addEventListener("click", () => {
      const blob = new Blob([state.draftText], { type: "text/markdown;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `omniwrite-${state.fieldId}-${state.methodId}.md`;
      a.click();
      URL.revokeObjectURL(url);
    });
  }

  // Tab 3: Master Prompt 與 AI 即時生成工作台
  function renderAIStudioView(container) {
    const t = i18n[state.lang];
    const masterPrompt = window.buildMasterPrompt(state);
    const provKey = state.llmConfig.provider || "gemini";
    const provMeta = window.LLM_PROVIDERS[provKey] || window.LLM_PROVIDERS.gemini;
    const hasKeyOrLocal = Boolean(state.llmConfig.apiKey || !provMeta.requiresKey);

    const providerOptionsHtml = Object.keys(window.LLM_PROVIDERS).map(k => {
      const p = window.LLM_PROVIDERS[k];
      return `<option value="${k}" ${k === provKey ? "selected" : ""}>${p.name}</option>`;
    }).join("");

    const modelOptionsHtml = provMeta.models.map(m => {
      return `<option value="${m.id}" ${m.id === state.llmConfig.model ? "selected" : ""}>${m.label}</option>`;
    }).join("") + `<option value="__custom__" ${!provMeta.models.some(m => m.id === state.llmConfig.model) ? "selected" : ""}>✏️ 自訂模型 (${state.llmConfig.model})</option>`;

    container.innerHTML = `
      <!-- 1. 頂部 AI 引擎控制台（直接選模型＋貼金鑰＋一鍵生成初稿） -->
      <div class="p-4 rounded-xl border mb-5" style="background: var(--accent); border-color: var(--border);">
        <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div>
            <h3 class="text-base font-bold">${t.aiStudioTitle}</h3>
            <p class="text-xs mt-0.5" style="color: var(--muted-foreground);">
              步驟：① 選擇供應商與模型 ➔ ② 貼上 API Key ➔ ③ 點擊右側「🚀 立即生成完整初稿」
            </p>
          </div>
          <button type="button" id="btn-run-llm"
                  class="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-bold shadow-lg transition-all flex items-center gap-1.5">
            ${state.isGeneratingAI ? t.btnRunningLLM : "🚀 點此呼叫 AI 立即生成完整初稿"}
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-12 gap-2.5 items-end">
          <div class="md:col-span-4">
            <label class="block text-xs font-semibold mb-1" style="color: var(--muted-foreground);">1️⃣ 供應商 (7 大平台)：</label>
            <select id="inline-provider-select" class="w-full px-2.5 py-2 rounded-lg border text-xs font-medium"
                    style="background: var(--card); border-color: var(--border); color: var(--foreground);">
              ${providerOptionsHtml}
            </select>
          </div>
          <div class="md:col-span-4">
            <label class="block text-xs font-semibold mb-1" style="color: var(--muted-foreground);">2️⃣ 選擇模型 (30+ 模型)：</label>
            <select id="inline-model-select" class="w-full px-2.5 py-2 rounded-lg border text-xs font-medium"
                    style="background: var(--card); border-color: var(--border); color: var(--foreground);">
              ${modelOptionsHtml}
            </select>
          </div>
          <div class="md:col-span-4">
            <div class="flex items-center justify-between mb-1">
              <label class="text-xs font-semibold" style="color: var(--muted-foreground);">
                3️⃣ API Key ${hasKeyOrLocal ? '<span class="text-emerald-400 font-bold">(🟢 已設定)</span>' : '<span class="text-amber-400 font-bold">(⚠️ 請貼上金鑰)</span>'}：
              </label>
              <button type="button" id="btn-inline-open-key" class="text-xs text-indigo-400 hover:underline">進階設定</button>
            </div>
            <input id="inline-apikey-input" type="password"
                   value="${state.llmConfig.apiKey || ""}"
                   placeholder="${provMeta.keyPlaceholder}"
                   class="w-full px-2.5 py-1.5 rounded-lg border text-xs font-mono focus:outline-none focus:ring-2 focus:ring-indigo-500"
                   style="background: var(--card); border-color: var(--border); color: var(--foreground);" />
          </div>
        </div>
      </div>

      <!-- 2. 錯誤訊息橫幅（避免 iframe 阻擋 alert） -->
      <div id="ai-error-banner" class="${state.aiErrorMsg ? "" : "hidden"} p-4 rounded-xl border border-rose-500/50 bg-rose-500/15 text-rose-300 text-xs mb-5 leading-relaxed">
        <div class="font-bold text-sm text-rose-400 mb-1">❌ AI 生成發生錯誤</div>
        <div id="ai-error-text">${state.aiErrorMsg || ""}</div>
      </div>

      <!-- 3. AI 初稿生成結果區（置頂顯示，永遠可見！） -->
      <div id="ai-result-section" class="mb-6 p-4 rounded-xl border" style="background: var(--background); border-color: var(--border);">
        <div class="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2.5 border-b" style="border-color: var(--border);">
          <div class="flex items-center gap-2">
            <span class="text-base">✨</span>
            <h4 class="font-bold text-sm text-emerald-400">
              ${t.aiOutputTitle}（目前模型：<code class="text-indigo-400">${state.llmConfig.model}</code>）
            </h4>
          </div>
          <div class="flex items-center gap-2 ${state.aiOutputText ? "" : "hidden"}">
            <button type="button" id="btn-copy-ai-output" class="px-3 py-1.5 rounded-lg border text-xs font-semibold hover:opacity-90"
                    style="background: var(--card); border-color: var(--border);">
              📋 複製 AI 初稿全文
            </button>
            <button type="button" id="btn-ai-to-editor" class="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-sm">
              ${t.btnSendAiToEditor}
            </button>
          </div>
        </div>

        ${state.isGeneratingAI ? `
          <div class="py-12 text-center space-y-3">
            <div class="inline-block px-4 py-2 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold animate-pulse">
              ⏳ 正在呼叫 ${provMeta.name} (${state.llmConfig.model}) 撰寫完整初稿中...
            </div>
            <p class="text-xs" style="color: var(--muted-foreground);">
              AI 正在根據您選擇的領域、社群規範與【${state.methodId.toUpperCase()}】寫作方法論生成「5個破題鉤子 + 切角分析 + 段落大綱 + 完整初稿」，約需 5–15 秒。
            </p>
          </div>
        ` : state.aiOutputText ? `
          <div id="ai-output-box" class="p-4 rounded-xl border text-sm leading-relaxed whitespace-pre-wrap font-sans"
               style="background: var(--card); border-color: var(--border);"></div>
        ` : `
          <div class="py-8 px-4 text-center space-y-3">
            <p class="text-xs leading-relaxed" style="color: var(--muted-foreground);">
              ${hasKeyOrLocal
                ? "✅ 您的 API Key 已就緒！請點擊下方按鈕，AI 將立即為您撰寫「5 個破題標題 ＋ 策略分析 ＋ 結構大綱 ＋ 可直接發布的完整初稿」："
                : "💡 請先在上方第 3 欄貼上您的 API Key（例如 Google Gemini 或 OpenAI 金鑰），接著點擊下方按鈕即可直接在此生成完整初稿："}
            </p>
            <button type="button" id="btn-run-llm-center"
                    class="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-md transition-all">
              🚀 立即用 ${state.llmConfig.model} 生成完整初稿
            </button>
          </div>
        `}
      </div>

      <!-- 4. 結構化 Master Prompt 預覽區（供免 API 複製到外部 AI 使用） -->
      <div class="p-4 rounded-xl border" style="background: var(--card); border-color: var(--border);">
        <div class="flex flex-wrap items-center justify-between gap-2 mb-2.5">
          <div>
            <h4 class="text-xs font-bold" style="color: var(--muted-foreground);">
              📋 附錄：自動組合之結構化 Master Prompt（若不接 API，亦可一鍵複製貼到 ChatGPT / Claude / Gemini 網頁版）
            </h4>
          </div>
          <button type="button" id="btn-copy-master-prompt" class="px-3 py-1 rounded-lg border text-xs font-semibold hover:opacity-90 transition-all"
                  style="background: var(--accent); border-color: var(--border);">
            ${t.btnCopyPrompt}
          </button>
        </div>
        <pre id="master-prompt-box" class="p-3.5 rounded-xl border text-xs font-mono leading-relaxed whitespace-pre-wrap max-h-56 overflow-y-auto"
             style="background: var(--background); border-color: var(--border); color: var(--foreground);"></pre>
      </div>
    `;

    document.getElementById("master-prompt-box").textContent = masterPrompt;
    if (state.aiOutputText && !state.isGeneratingAI) {
      const outBox = document.getElementById("ai-output-box");
      if (outBox) outBox.textContent = state.aiOutputText;
    }

    // 綁定內嵌 API Key 即時輸入儲存
    const inlineKeyInput = document.getElementById("inline-apikey-input");
    if (inlineKeyInput) {
      inlineKeyInput.addEventListener("input", (e) => {
        state.llmConfig.apiKey = e.target.value.trim();
        localStorage.setItem("omniwrite_apikey", state.llmConfig.apiKey);
        updateApiButtonBadge();
      });
    }

    // 綁定內嵌供應商與模型快速切換
    document.getElementById("inline-provider-select").addEventListener("change", (e) => {
      const newProv = e.target.value;
      const newMeta = window.LLM_PROVIDERS[newProv] || window.LLM_PROVIDERS.gemini;
      state.llmConfig.provider = newProv;
      state.llmConfig.model = newMeta.models[0].id;
      state.llmConfig.baseUrl = newMeta.defaultBaseUrl;
      localStorage.setItem("omniwrite_provider", state.llmConfig.provider);
      localStorage.setItem("omniwrite_model", state.llmConfig.model);
      localStorage.setItem("omniwrite_baseurl", state.llmConfig.baseUrl);
      updateApiButtonBadge();
      renderAIStudioView(container);
    });

    document.getElementById("inline-model-select").addEventListener("change", (e) => {
      const val = e.target.value;
      if (val === "__custom__") {
        document.getElementById("btn-open-api-modal").click();
        return;
      }
      state.llmConfig.model = val;
      localStorage.setItem("omniwrite_model", state.llmConfig.model);
      updateApiButtonBadge();
      renderAIStudioView(container);
      showToast(state.lang === "zh" ? `🧠 已切換模型為：${val}` : `🧠 Switched model to: ${val}`);
    });

    document.getElementById("btn-inline-open-key").addEventListener("click", () => {
      document.getElementById("btn-open-api-modal").click();
    });

    document.getElementById("btn-copy-master-prompt").addEventListener("click", () => {
      copyText(masterPrompt);
    });

    const triggerGeneration = async () => {
      if (state.isGeneratingAI) return;
      // 同步讀取頁面上輸入框的 API Key
      const currentInlineKey = document.getElementById("inline-apikey-input")?.value?.trim();
      if (currentInlineKey) {
        state.llmConfig.apiKey = currentInlineKey;
        localStorage.setItem("omniwrite_apikey", currentInlineKey);
        updateApiButtonBadge();
      }

      if (provMeta.requiresKey && !state.llmConfig.apiKey) {
        state.aiErrorMsg = `請先在上方「3️⃣ API Key」欄位貼上您的 ${provMeta.name} 金鑰，再點擊生成！`;
        renderAIStudioView(container);
        const keyEl = document.getElementById("inline-apikey-input");
        if (keyEl) keyEl.focus();
        return;
      }

      try {
        state.aiErrorMsg = "";
        state.isGeneratingAI = true;
        renderAIStudioView(container);
        const result = await window.callLLMGenerate(state.llmConfig, masterPrompt);
        state.aiOutputText = result;
        state.isGeneratingAI = false;
        renderAIStudioView(container);
        showToast(state.lang === "zh" ? "✨ AI 客製化初稿生成完成！" : "✨ AI Generation Complete!");
      } catch (err) {
        state.isGeneratingAI = false;
        state.aiErrorMsg = err.message || "API 呼叫失敗，請檢查 API Key 與網路連線。";
        renderAIStudioView(container);
      }
    };

    const runBtn = document.getElementById("btn-run-llm");
    if (runBtn) runBtn.addEventListener("click", triggerGeneration);

    const runBtnCenter = document.getElementById("btn-run-llm-center");
    if (runBtnCenter) runBtnCenter.addEventListener("click", triggerGeneration);

    const copyAiBtn = document.getElementById("btn-copy-ai-output");
    if (copyAiBtn) {
      copyAiBtn.addEventListener("click", () => copyText(state.aiOutputText));
    }

    const toEditorBtn = document.getElementById("btn-ai-to-editor");
    if (toEditorBtn) {
      toEditorBtn.addEventListener("click", () => {
        state.draftText = state.aiOutputText;
        state.activeTab = "editor";
        renderTabsState();
        renderRightWorkspace();
        showToast(state.lang === "zh" ? "✍️ 已將 AI 初稿送入草稿編輯器！" : "✍️ Sent AI output to Draft Editor!");
      });
    }
  }

  // Tab 4: 方法論全圖鑑對照視圖
  function renderEncyclopediaView(container) {
    const t = i18n[state.lang];
    const cardsHtml = window.WRITING_DATA.methodologies.map(m => {
      const stepPills = m.steps.map(s => `<span class="px-2 py-0.5 rounded text-xs border" style="background: var(--background); border-color: var(--border);">${s.key}</span>`).join(` <span class="text-xs" style="color: var(--muted-foreground);">→</span> `);
      return `
        <div class="p-4 rounded-xl border flex flex-col justify-between" style="background: var(--card); border-color: var(--border);">
          <div>
            <div class="flex items-center justify-between gap-2 mb-2">
              <span class="px-2.5 py-0.5 rounded text-xs font-bold bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">${m.code}</span>
              <span class="text-xs" style="color: var(--muted-foreground);">${m.pacing} ｜ ${m.difficulty}</span>
            </div>
            <h4 class="font-bold text-sm mb-1">${m.name[state.lang]}</h4>
            <p class="text-xs mb-3 leading-relaxed" style="color: var(--muted-foreground);">${m.summary[state.lang]}</p>
            <div class="flex items-center flex-wrap gap-1 mb-3">
              ${stepPills}
            </div>
          </div>
          <div class="pt-3 border-t flex items-center justify-between" style="border-color: var(--border);">
            <span class="text-xs" style="color: var(--muted-foreground);">⚠️ ${m.pitfalls[state.lang].slice(0, 36)}...</span>
            <button type="button" data-apply-method="${m.id}"
                    class="btn-apply-enc px-3 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shrink-0">
              ${t.useThisMethod}
            </button>
          </div>
        </div>
      `;
    }).join("");

    container.innerHTML = `
      <div class="mb-4">
        <h3 class="text-base font-bold">${t.encTitle}</h3>
        <p class="text-xs mt-0.5" style="color: var(--muted-foreground);">${t.encSub}</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        ${cardsHtml}
      </div>
    `;

    container.querySelectorAll(".btn-apply-enc").forEach(btn => {
      btn.addEventListener("click", () => {
        state.methodId = btn.getAttribute("data-apply-method");
        state.activeTab = "blueprint";
        renderMethodologyCards();
        renderTabsState();
        renderRightWorkspace();
        showToast(state.lang === "zh" ? "✅ 已套用所選寫作方法論！" : "✅ Methodology applied!");
      });
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
