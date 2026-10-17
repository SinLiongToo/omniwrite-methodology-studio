// ============================================================================
// OMNI-WRITE STUDIO: 智慧寫作方向引擎 + 多模型 LLM API 串接模組
// 支援 Google Gemini / OpenAI / Anthropic Claude / OpenRouter / DeepSeek / Groq / Ollama
// ============================================================================

window.LLM_PROVIDERS = {
  gemini: {
    name: "Google Gemini API",
    defaultBaseUrl: "https://generativelanguage.googleapis.com/v1beta",
    requiresKey: true,
    keyPlaceholder: "AIzaSy...",
    models: [
      { id: "gemini-2.5-pro", label: "Gemini 2.5 Pro（旗艦深度推理・複雜企劃與長文首選）" },
      { id: "gemini-2.5-flash", label: "Gemini 2.5 Flash（均衡高速・預設推薦）" },
      { id: "gemini-2.5-flash-lite", label: "Gemini 2.5 Flash-Lite（極速輕量・高頻率草稿）" },
      { id: "gemini-2.0-flash", label: "Gemini 2.0 Flash（穩定多工世代）" },
      { id: "gemini-1.5-pro", label: "Gemini 1.5 Pro（超長上下文視窗）" }
    ]
  },
  openai: {
    name: "OpenAI Official API",
    defaultBaseUrl: "https://api.openai.com/v1",
    requiresKey: true,
    keyPlaceholder: "sk-proj-...",
    models: [
      { id: "gpt-4.1", label: "GPT-4.1（最新旗艦・精準遵循複雜結構指令）" },
      { id: "gpt-4.1-mini", label: "GPT-4.1 Mini（高性價比・快速結構化寫作）" },
      { id: "gpt-4o", label: "GPT-4o（全能旗艦・自然流暢文筆）" },
      { id: "gpt-4o-mini", label: "GPT-4o Mini（輕量高速）" },
      { id: "o3-mini", label: "o3-mini（深度邏輯推理・商業個案與學術首選）" },
      { id: "o1", label: "o1（高階長鏈推理模型）" }
    ]
  },
  anthropic: {
    name: "Anthropic Claude API",
    defaultBaseUrl: "https://api.anthropic.com/v1",
    requiresKey: true,
    keyPlaceholder: "sk-ant-...",
    models: [
      { id: "claude-sonnet-4-20250514", label: "Claude Sonnet 4（最新世代・頂級文學感與說服力）" },
      { id: "claude-3-7-sonnet-latest", label: "Claude 3.7 Sonnet（深度思考・極致去 AI 罐頭感）" },
      { id: "claude-3-5-sonnet-latest", label: "Claude 3.5 Sonnet（經典高質感寫作標竿）" },
      { id: "claude-3-5-haiku-latest", label: "Claude 3.5 Haiku（極速反應與短文生成）" }
    ]
  },
  openrouter: {
    name: "OpenRouter（一把金鑰暢用全球百種模型）",
    defaultBaseUrl: "https://openrouter.ai/api/v1",
    requiresKey: true,
    keyPlaceholder: "sk-or-v1-...",
    models: [
      { id: "anthropic/claude-3.7-sonnet", label: "Claude 3.7 Sonnet (via OpenRouter)" },
      { id: "google/gemini-2.5-pro", label: "Gemini 2.5 Pro (via OpenRouter)" },
      { id: "openai/gpt-4.1", label: "GPT-4.1 (via OpenRouter)" },
      { id: "deepseek/deepseek-r1", label: "DeepSeek R1（滿血版深度推理）" },
      { id: "deepseek/deepseek-chat-v3-0324", label: "DeepSeek V3（高性價比中文創作）" },
      { id: "meta-llama/llama-3.3-70b-instruct", label: "Llama 3.3 70B Instruct" },
      { id: "qwen/qwen-2.5-72b-instruct", label: "Qwen 2.5 72B Instruct（通義千問旗艦）" },
      { id: "x-ai/grok-3-beta", label: "xAI Grok 3 Beta（犀利觀點與社群風格）" }
    ]
  },
  deepseek: {
    name: "DeepSeek 官方 API",
    defaultBaseUrl: "https://api.deepseek.com/v1",
    requiresKey: true,
    keyPlaceholder: "sk-...",
    models: [
      { id: "deepseek-chat", label: "DeepSeek-V3 (deepseek-chat｜中文商業與社群極佳)" },
      { id: "deepseek-reasoner", label: "DeepSeek-R1 (deepseek-reasoner｜深度思維鏈邏輯)" }
    ]
  },
  groq: {
    name: "Groq Cloud（LPU 超高速推理）",
    defaultBaseUrl: "https://api.groq.com/openai/v1",
    requiresKey: true,
    keyPlaceholder: "gsk_...",
    models: [
      { id: "llama-3.3-70b-versatile", label: "Llama 3.3 70B Versatile（秒級生成）" },
      { id: "deepseek-r1-distill-llama-70b", label: "DeepSeek R1 Distill Llama 70B" },
      { id: "qwen-qwq-32b", label: "Qwen QwQ 32B（推理強化模型）" },
      { id: "gemma2-9b-it", label: "Google Gemma 2 9B IT" }
    ]
  },
  local: {
    name: "Ollama / LM Studio（本機離線免費模型）",
    defaultBaseUrl: "http://localhost:11434/v1",
    requiresKey: false,
    keyPlaceholder: "本機模型免填 API Key（可留空）",
    models: [
      { id: "qwen2.5:14b", label: "Qwen 2.5 14B (Ollama 繁中強化推薦)" },
      { id: "gemma3:12b", label: "Gemma 3 12B (Ollama)" },
      { id: "llama3.2:latest", label: "Llama 3.2 Latest (Ollama)" },
      { id: "deepseek-r1:14b", label: "DeepSeek R1 14B (Ollama 本機推理)" },
      { id: "local-model", label: "LM Studio 目前載入之模型 (local-model)" }
    ]
  }
};

window.PRESET_EXAMPLES = [
  {
    id: "preset_interview_behavioral",
    label: { zh: "💼 商業行為面試：跨部門衝突與專案逆轉勝（PM/策略/主管）", en: "💼 Behavioral Interview: Cross-Team Conflict & Turnaround" },
    fieldId: "business",
    platformId: "biz_interview",
    methodId: "soar_interview",
    secondaryMethodId: "star",
    topic: "面試題：「請分享一次你在資源嚴重不足且跨部門意見分歧下，如何帶領專案反敗為勝的經驗？」",
    audience: "科技業或跨國企業招聘主管（Hiring Manager）、產品總監、VP",
    pain: "工程與業務部門對產品優先級嚴重衝突，且距離上線死線只剩 4 週，團隊士氣低落面臨延宕危機",
    goal: "在 90 秒內展現高階問題診斷力、數據決策權衡（Trade-off）與可複製到新職位的領導價值",
    tone: "沉穩自信、邏輯清晰、數據說話、強調個人關鍵決策"
  },
  {
    id: "preset_interview_case",
    label: { zh: "💼 商業個案面試 (Case Interview)：核心產品留存率下滑 15% 之診斷", en: "💼 Case Interview: Diagnosing a 15% Drop in User Retention" },
    fieldId: "business",
    platformId: "biz_interview",
    methodId: "mece_case",
    secondaryMethodId: "scqa",
    topic: "面試個案題：「我們旗下的訂閱制 SaaS 產品上季活躍留存率突然下滑 15%，請你拆解原因並提出行動方案。」",
    audience: "管理顧問公司面試官（McKinsey/BCG/Bain 風格）、策略幕僚長、CPO",
    pain: "表面上看是客戶退訂增加，但尚未釐清是新客品質稀釋、競品價格戰，還是近期產品改版造成核心體驗斷層",
    goal: "展現顧問級 MECE 結構化拆解能力、假說驅動（Hypothesis-driven）數據驗證思維與風險控管意識",
    tone: "顧問專業感、結構嚴密、結論先行"
  },
  {
    id: "preset_social",
    label: { zh: "📱 社群爆款：AI 時代的個人護城河", en: "📱 Social: Personal Moat in the AI Era" },
    fieldId: "social",
    platformId: "threads",
    methodId: "conflict_twist",
    secondaryMethodId: "pas",
    topic: "AI 工具普及後，知識工作者的真正核心競爭力",
    audience: "每天焦慮被 AI 取代的職場白領與自媒體創作者",
    pain: "學了幾十種 Prompt 和 AI 工具，產出變快了但內容卻越來越像罐頭、毫無個人辨識度",
    goal: "引發強烈共鳴、破除盲目追工具的迷思，獲得高收藏與留言互動",
    tone: "犀利真誠、一針見血、像朋友深夜聊天"
  },
  {
    id: "preset_business",
    label: { zh: "💼 商業提案：導入自動化知識庫系統", en: "💼 Business: Automated Knowledge Base Pitch" },
    fieldId: "business",
    platformId: "proposal",
    methodId: "scqa",
    secondaryMethodId: "prep",
    topic: "建立跨部門 AI 結構化知識庫與專案復盤系統",
    audience: "重視 ROI 與執行效率的公司高階主管與部門總監",
    pain: "團隊經驗散落在各自的對話紀錄中，新人交接耗時 3 個月，同樣的專案錯誤重複發生",
    goal: "說服決策者批准 Q4 試行預算，展現清晰的效益與低風險落地方案",
    tone: "專業沉穩、數據導向、結論先行"
  },
  {
    id: "preset_deep",
    label: { zh: "📚 深度長文：如何建立「反脆弱」的筆記系統", en: "📚 Deep Content: Building an Antifragile Note System" },
    fieldId: "deep_content",
    platformId: "newsletter",
    methodId: "zettelkasten",
    secondaryMethodId: "feynman",
    topic: "將納西姆・塔雷伯《反脆弱》思維應用於個人知識管理",
    audience: "喜愛深度閱讀、寫作與建立第二大腦的終身學習者",
    pain: "收藏了上千篇文章與筆記，需要寫作輸出時卻完全找不到連結，變成數位倉鼠症",
    goal: "提供耳目一新的跨界心智模型，讓讀者讀完立刻想重整自己的筆記習慣並訂閱電子報",
    tone: "知性優雅、具啟發性、邏輯層次分明"
  },
  {
    id: "preset_academic",
    label: { zh: "🔬 學術科普：腸道菌群如何影響大腦決策與情緒", en: "🔬 SciComm: Gut Microbiome & Brain Emotion" },
    fieldId: "academic",
    platformId: "scicomm",
    methodId: "feynman",
    secondaryMethodId: "imrad",
    topic: "腸腦軸線（Gut-Brain Axis）與迷走神經的雙向訊號傳遞機制",
    audience: "對腦科學與身心健康感興趣、但非生物醫學背景的大眾讀者",
    pain: "長期受壓力型焦慮與睡眠品質不佳困擾，卻不知道飲食與腸道微生態竟是關鍵調控者",
    goal: "將複雜的神經內分泌機制轉譯成生動易懂的故事，兼具科學嚴謹度與生活實用性",
    tone: "生動好奇、比喻精妙、嚴謹而不失溫度"
  },
  {
    id: "preset_marketing",
    label: { zh: "🚀 銷售轉換：專為自由工作者設計的時間管理系統", en: "🚀 Marketing: Time Mastery System for Freelancers" },
    fieldId: "marketing",
    platformId: "landing_page",
    methodId: "pas",
    secondaryMethodId: "bab",
    topic: "FlowState 自由工作者專案與深度工作排程系統",
    audience: "同時接多個案子、卻總覺得時間不夠用的獨立接案者與一人公司",
    pain: "整天都在回訊息與救火，真正能專注創作的時間不到 2 小時，收入與生活品質雙雙卡關",
    goal: "提高到達頁（Landing Page）的免費試用註冊率與早鳥方案轉換率",
    tone: "具行動感召力、直擊痛點、給人安心感"
  },
  {
    id: "preset_literary",
    label: { zh: "🖋️ 文學創作：老城區最後一間修錶舖的午後", en: "🖋️ Literary: Last Watchmaker in the Old Quarter" },
    fieldId: "literary",
    platformId: "short_fiction",
    methodId: "iceberg_sensory",
    secondaryMethodId: "kishotenketsu",
    topic: "一名即將歇業的老鐘錶匠，收到一只停在三十年前某個時刻的舊懷錶",
    audience: "喜愛文學小說、注重感官細節與人物內心留白張力的讀者",
    pain: "面對時代淘汰與一段從未說出口的遺憾，在拆解齒輪時重新觸碰被時間封存的記憶",
    goal: "不出現任何一個「悲傷、懷念」等情緒形容詞，純粹用五感細節、動作與器物營造深刻餘韻",
    tone: "克制內斂、光影感強、富言外之意"
  }
];

// 根據領域、平台、方法論與使用者輸入，動態生成「三大寫作切角與策略方向」
window.generateStrategicDirections = function(state, lang = "zh") {
  const topic = state.topic || (lang === "zh" ? "你的核心主題" : "Your Core Topic");
  const audience = state.audience || (lang === "zh" ? "目標讀者群" : "Target Audience");
  const pain = state.pain || (lang === "zh" ? "常見瓶頸與痛點" : "Core Bottleneck & Pain Point");
  const goal = state.goal || (lang === "zh" ? "傳遞價值並促成行動" : "Deliver value and drive action");
  const tone = state.tone || (lang === "zh" ? "專業且具共鳴" : "Professional & relatable");

  const field = window.WRITING_DATA.fields.find(f => f.id === state.fieldId) || window.WRITING_DATA.fields[0];
  const platform = field.platforms.find(p => p.id === state.platformId) || field.platforms[0];
  const method = window.WRITING_DATA.methodologies.find(m => m.id === state.methodId) || window.WRITING_DATA.methodologies[0];
  const secMethod = state.secondaryMethodId
    ? window.WRITING_DATA.methodologies.find(m => m.id === state.secondaryMethodId)
    : null;

  // 若選擇的是「商業面試問答」，提供專屬面試官視角的三大答題切角！
  let angles;
  if (platform.id === "biz_interview") {
    angles = [
      {
        badge: lang === "zh" ? "切角 A｜結論先行 × 決策取捨（高階主管最愛）" : "Angle A | Headline First & Trade-off Mastery",
        title: lang === "zh"
          ? `前 15 秒直接點出破局關鍵，聚焦你在「${pain}」下的取捨判準`
          : `Deliver the headline in 15s and spotlight your trade-off criteria under "${pain}"`,
        desc: lang === "zh"
          ? `面試官最怕聽流水帳。第一句先給你的核心解題哲學，接著用【${method.code}】凸顯「為什麼當時選擇 A 方案而非 B 方案」，展現資深人才的商業判斷力（Business Acumen）。`
          : `Skip chronological rambling. Lead with your decision principle, then use [${method.code}] to show why you chose Path A over Path B under resource constraints.`
      },
      {
        badge: lang === "zh" ? "切角 B｜數據診斷 × 跨部門影響力（PM / 策略首選）" : "Angle B | Data Diagnosis & Stakeholder Alignment",
        title: lang === "zh"
          ? `展示如何用客觀數據化解分歧，帶領團隊突破「${topic}」`
          : `Show how you used objective metrics to align conflicting teams on "${topic}"`,
        desc: lang === "zh"
          ? `強調在沒有直接管轄權（Influence without Authority）的情況下，你如何建立共同評估指標，將情緒化的部門爭執轉化為可驗證的假說測試。`
          : `Highlight 'Influence without Authority' — how you turned emotional stakeholder debates into an objective, data-backed experiment.`
      },
      {
        badge: lang === "zh" ? "切角 C｜可遷移方法論 × 即戰力連結（衝刺 Offer 必殺技）" : "Angle C | Transferable Playbook & Role Fit",
        title: lang === "zh"
          ? `將過去經驗提煉為 SOP，直接對接【${audience}】當前的團隊痛點`
          : `Distill your past win into a repeatable SOP tailored for [${audience}]`,
        desc: lang === "zh"
          ? `在回答的最後 20 秒，主動將故事收束為一套 3 步驟框架，並加上：「這套方法正是我加入貴團隊後，前 90 天能立即協助解決相關挑戰的即戰力。」`
          : `In your final 20 seconds, package your story into a 3-step playbook and explicitly state how you will apply it in your first 90 days on their team.`
      }
    ];
  } else {
    angles = [
      {
        badge: lang === "zh" ? "切角 A｜反直覺破題（高轉發率）" : "Angle A | Counter-Intuitive Hook (High Shareability)",
        title: lang === "zh"
          ? `從「為什麼大多數 ${audience} 處理 ${topic} 都做錯了」切入`
          : `Start with why most ${audience} get ${topic} backwards`,
        desc: lang === "zh"
          ? `不直接講標準做法，而是先點出「造成【${pain}】的罪魁禍首其實是大家習以為常的某個習慣」，利用認知落差吸引讀者停下來細讀，再套用【${method.name.zh}】展開核心解答。`
          : `Challenge a common habit that secretly causes [${pain}]. Use cognitive dissonance to stop the scroll, then deploy [${method.name.en}] to reframe the solution.`
      },
      {
        badge: lang === "zh" ? "切角 B｜具象場景與痛點共情（高完讀率）" : "Angle B | Micro-Scene & Empathy (High Completion)",
        title: lang === "zh"
          ? `鎖定「${pain}」發生的那一個具體瞬間作為開場`
          : `Zoom into the exact micro-moment when "${pain}" happens`,
        desc: lang === "zh"
          ? `把抽象的【${topic}】縮小到一個具體的時間與畫面（例如：深夜十一點面對螢幕的瞬間、會議室裡的沉默、或是反覆修改第七版的挫折），讓【${audience}】瞬間代入，再順勢推進結構。`
          : `Shrink the abstract topic into a vivid 5-second scene. Let [${audience}] feel seen immediately before introducing your structural framework.`
      },
      {
        badge: lang === "zh" ? "切角 C｜系統化槓桿與前後對照（高收藏率）" : "Angle C | Systematic Leverage & Contrast (High Saves)",
        title: lang === "zh"
          ? `呈現「舊做法 vs. 新框架」在【${topic}】上的降維打擊`
          : `Contrast the "Old Way vs. New Framework" for ${topic}`,
        desc: lang === "zh"
          ? `直接對比「陷入【${pain}】的低效狀態」與「掌握【${method.code}】結構後的理想成果」，提供清晰的 1-2-3 檢核清單或對照思維，極大化讀者按下「收藏」的動機。`
          : `Create a sharp Before/After table or 3-step mental model so readers immediately bookmark your post as a reference guide.`
      }
    ];
  }

  // 2. 雙方法論混搭指南 (Hybrid Fusion Guide)
  let hybridGuide = null;
  if (secMethod && secMethod.id !== method.id) {
    hybridGuide = {
      title: `${method.name[lang]} × ${secMethod.name[lang]}`,
      strategy: lang === "zh"
        ? `以【${method.name.zh}】作為全文的宏觀主骨架（決定大段落順序），並在關鍵轉折與細節展開處嵌入【${secMethod.name.zh}】的技法（例如：用 ${secMethod.code} 強化開頭張力或中段邏輯拆解），兼顧結構深度與說服爽感。`
        : `Use [${method.name.en}] as the macro-skeleton for section order, while weaving [${secMethod.name.en}] into the opening hook and middle evidence blocks for maximum impact.`
    };
  }

  // 3. 替換平台開頭鉤子中的變數
  const customizedHooks = platform.hookFormulas.map(f =>
    f.replace(/\{topic\}/g, topic)
     .replace(/\{audience\}/g, audience)
     .replace(/\{pain\}/g, pain)
  );

  return {
    field,
    platform,
    method,
    secMethod,
    angles,
    hybridGuide,
    customizedHooks,
    metaSummary: {
      topic,
      audience,
      pain,
      goal,
      tone
    }
  };
};

// 建立專家級 Master Prompt（供一鍵複製或直接送入 LLM API）
window.buildMasterPrompt = function(state) {
  const info = window.generateStrategicDirections(state, "zh");
  const { field, platform, method, secMethod, metaSummary } = info;

  const stepsDescription = method.steps
    .map((s, idx) => `  ${idx + 1}. 【${s.label.zh}】（建議篇幅佔比 ${s.ratio}）：${s.purpose.zh}`)
    .join("\n");

  const secondaryNote = secMethod && secMethod.id !== method.id
    ? `\n- 輔助混搭方法論：${secMethod.name.zh}（${secMethod.tagline.zh}）——請在主骨架中巧妙融合此方法的敘事/說服技巧。`
    : "";

  const isInterview = platform.id === "biz_interview";
  const outputRequirement4 = isInterview
    ? `4. **【可直接口述的滿分面試逐字稿 ＋ 面試官追問防禦指南 (Follow-up Q&A)】**：
   - 提供一份約 90–120 秒、自然流暢且具領袖氣場的第一人稱（「我」）口語逐字稿，並在關鍵轉折處標註【語氣與停頓提示】。
   - 額外預測面試官聽完後最可能犀利追問的 **2 個深水區問題（Follow-up Questions）**，並給出高段位回答要點。`
    : `4. **【可直接發布的完整高品質初稿】**：完全褪去生硬的 AI 罐頭感，符合「${metaSummary.tone}」語氣與「${platform.name.zh}」排版呼吸感的完整作品。`;

  return `你是一位精通跨領域內容策略、頂級商業面試教練與結構化寫作的總編輯。請根據以下設定，為我量身打造一份完整的「寫作/答題策略、結構化範本與高品質完稿」：

### 一、任務背景設定
- **所屬領域 (Field)**：${field.name.zh}（${field.desc.zh}）
- **目標場景/載體 (Community & Format)**：${platform.name.zh}
  - 黃金篇幅/時長：${platform.SweetSpot.zh}
  - 關鍵評分與演算法準則：${platform.algorithmTip.zh}
- **核心主題 / 面試題目 (Topic)**：${metaSummary.topic}
- **目標受眾 / 面試官背景 (Target Audience)**：${metaSummary.audience}
- **核心痛點 / 逆境衝突 / 研究缺口 (Pain Point / Obstacle)**：${metaSummary.pain}
- **預期達成目標 (Goal)**：${metaSummary.goal}
- **期望語氣與風格 (Tone & Style)**：${metaSummary.tone}

### 二、指定採用的方法論架構 (Writing Methodology)
- **核心主架構**：${method.name.zh}（${method.code}）— ${method.summary.zh}${secondaryNote}
- **必須嚴格遵循的結構拆解步驟**：
${stepsDescription}
- **必須避開的地雷**：${method.pitfalls.zh}

### 三、請依序為我輸出以下 4 個部分：
1. **【黃金破題首句 / 前 15 秒定調鉤子（5 選 1）】**：針對「${platform.name.zh}」量身設計 5 個不同切角的高吸睛開頭。
2. **【策略方向與受眾/面試官心理分析】**：簡要說明針對「${metaSummary.audience}」的切入點與節奏控制。
3. **【結構化段落大綱對照表】**：逐段列出每個【${method.code}】階段的核心論點與關鍵細節。
${outputRequirement4}`;
};

// 呼叫 LLM API（支援 Gemini / OpenAI / Anthropic Claude / OpenRouter / DeepSeek / Groq / Ollama）
window.callLLMGenerate = async function(config, promptText) {
  const providerKey = config.provider || "gemini";
  const providerMeta = window.LLM_PROVIDERS[providerKey] || window.LLM_PROVIDERS.gemini;
  const apiKey = (config.apiKey || "").trim();
  const model = (config.model || providerMeta.models[0].id).trim();

  if (providerMeta.requiresKey && !apiKey) {
    throw new Error(`請先在右上角「🔑 AI API 設定」中輸入您的 ${providerMeta.name} 金鑰。`);
  }

  const systemInstruction = "你是一位世界級的跨領域寫作教練、商業顧問與總編輯，擅長將結構化寫作方法論轉化為極具感染力、邏輯嚴密且符合各大社群、商業面試與專業領域規範的作品。";

  // 1. Google Gemini API
  if (providerKey === "gemini") {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`;
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: `${systemInstruction}\n\n${promptText}` }] }],
        generationConfig: {
          temperature: 0.75,
          maxOutputTokens: 4096
        }
      })
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      const msg = errData?.error?.message || `HTTP ${response.status}`;
      throw new Error(`Gemini API 呼叫失敗：${msg}`);
    }

    const data = await response.json();
    const text = data?.candidates?.[0]?.content?.parts?.map(p => p.text).join("\n") || "";
    if (!text) throw new Error("Gemini API 回傳內容為空，請檢查模型名稱或輸入內容。");
    return text;
  }

  // 2. Anthropic Claude Official API
  if (providerKey === "anthropic") {
    const baseUrl = (config.baseUrl || providerMeta.defaultBaseUrl).replace(/\/+$/, "");
    const response = await fetch(`${baseUrl}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "anthropic-dangerous-direct-browser-access": "true"
      },
      body: JSON.stringify({
        model: model,
        max_tokens: 4096,
        system: systemInstruction,
        messages: [{ role: "user", content: promptText }]
      })
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      const msg = errData?.error?.message || `HTTP ${response.status}`;
      throw new Error(`Anthropic Claude API 呼叫失敗：${msg}`);
    }

    const data = await response.json();
    const text = data?.content?.map(c => c.text).join("\n") || "";
    if (!text) throw new Error("Claude API 回傳內容為空。");
    return text;
  }

  // 3. OpenAI 相容端點 (OpenAI / OpenRouter / DeepSeek / Groq / Ollama / Custom)
  const baseUrl = (config.baseUrl || providerMeta.defaultBaseUrl).replace(/\/+$/, "");
  const headers = { "Content-Type": "application/json" };
  if (apiKey) {
    headers["Authorization"] = `Bearer ${apiKey}`;
  }
  if (providerKey === "openrouter") {
    headers["HTTP-Referer"] = window.location.href || "https://omniwrite.studio";
    headers["X-Title"] = "OmniWrite Methodology Studio";
  }

  const response = await fetch(`${baseUrl}/chat/completions`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      model: model,
      messages: [
        { role: "system", content: systemInstruction },
        { role: "user", content: promptText }
      ],
      temperature: 0.75
    })
  });

  if (!response.ok) {
    const errData = await response.json().catch(() => ({}));
    const msg = errData?.error?.message || `HTTP ${response.status}`;
    throw new Error(`${providerMeta.name} 呼叫失敗：${msg}`);
  }

  const data = await response.json();
  const text = data?.choices?.[0]?.message?.content || "";
  if (!text) throw new Error("API 回傳內容為空。");
  return text;
};
