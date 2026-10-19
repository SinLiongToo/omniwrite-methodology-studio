// ============================================================================
// OMNI-WRITE STUDIO: 跨領域寫作方法論與社群範本知識庫 (Methodologies & Fields Data)
// 涵蓋 6 大領域、28 種社群/載體、20 大核心寫作方法論
// ============================================================================

window.WRITING_DATA = {
  // 1. 六大領域與所屬社群/載體 (Fields & Communities)
  fields: [
    {
      id: "social",
      icon: "📱",
      name: { zh: "社群自媒體", en: "Social Media & Creators" },
      desc: {
        zh: "強調黃金前三秒鉤子、情緒共鳴、視覺呼吸感與高互動分享率",
        en: "Focuses on 3-second hooks, emotional resonance, visual pacing, and shareability"
      },
      recommendedMethods: ["listicle", "pas", "hook_story_offer", "bab", "prep", "conflict_twist"],
      platforms: [
        {
          id: "listicle_post",
          name: { zh: "社群清單體 / 高密度列點文 (Listicle)", en: "Social Listicle & Bullet-Point Post" },
          SweetSpot: { zh: "300–800 字（3–7 個結構化列點，每點 2–4 行）", en: "300–800 words (3–7 structured bullets)" },
          algorithmTip: {
            zh: "社群平台上「收藏率 (Saves)」與「完讀率」最高的格式！首行用奇數標示高價值清單（如：5個底層邏輯、7個避坑指南）；列點務求視覺工整對齊，每點包含【📌 核心金句 ＋ 具體做法 ＋ 避坑對比】；結尾給出 TL;DR 總結並拋出單選題留言互動。",
            en: "Highest save-rate & skim-friendly format! Lead with odd numbers & bold promises; format bullets symmetrically with emojis; each bullet needs a bold principle + concrete tactical move + contrast; end with a 1-sentence TL;DR + save CTA."
          },
          hookFormulas: [
            "關於 {topic}，這是我花了 3 年、踩過無數坑後總結出的 5 個底層邏輯（強烈建議收藏）👇",
            "如果不想再被 {pain} 消耗，請把這 7 條關於 {topic} 的實戰清單印出來貼在螢幕旁：",
            "90% 的 {audience} 都忽略了這 4 個關鍵盲點——這也是為什麼你在 {topic} 總是卡關："
          ]
        },
        {
          id: "threads",
          name: { zh: "Threads 觀點串文", en: "Threads Post / Thread" },
          SweetSpot: { zh: "150–400 字 / 單篇或 3–5 串", en: "150–400 words / 1–5 thread posts" },
          algorithmTip: {
            zh: "首行必須有「反直覺觀點」或「強烈情緒共鳴」；每段不超過 2 行，善用空行製造閱讀節奏；結尾拋出開放式提問引導留言。",
            en: "First line needs a counter-intuitive take or strong relatable hook; max 2 lines per paragraph; end with an open question to drive replies."
          },
          hookFormulas: [
            "說一個可能會得罪人的實話：關於 {topic}，90% 的人都搞錯了重點。",
            "我花了三年才搞懂，在 {topic} 上最貴的成本不是錢，而是{pain}。",
            "昨天遇到一件事，讓我徹底重新思考了 {topic} 這件事 👇"
          ]
        },
        {
          id: "x_twitter",
          name: { zh: "X (Twitter) 推文串 (Thread)", en: "X (Twitter) Thread" },
          SweetSpot: { zh: "5–10 則推文，每則 100–140 字", en: "5–10 tweets, <280 chars each" },
          algorithmTip: {
            zh: "第 1 則推文決定 80% 點擊率（需承諾高密度價值或數字清單）；第 2 則直接給乾貨；最後一則做 TL;DR 總結並呼籲轉推 (RT)。",
            en: "Tweet 1 determines 80% of engagement (promise high value/numbers); Tweet 2 delivers immediate value; Final tweet gives TL;DR + RT CTA."
          },
          hookFormulas: [
            "關於 {topic}，我整理了 7 個能幫你省下 100 小時的核心框架（建議收藏）🧵👇",
            "為什麼大多數人在 {topic} 都失敗了？因為他們忽略了這個底層邏輯：",
            "濃縮了 10 本經典與實戰經驗，這是關於 {topic} 最極致的行動指南："
          ]
        },
        {
          id: "instagram",
          name: { zh: "Instagram 輪播圖文 / 貼文", en: "Instagram Carousel & Caption" },
          SweetSpot: { zh: "輪播 6–10 頁 + 內文 300–600 字", en: "6–10 slides + 300–600 words caption" },
          algorithmTip: {
            zh: "「收藏率 (Saves)」與「分享至限動 (Shares)」是最高權重指標。第 1 頁封面解決痛點，第 2 頁引發焦慮或好奇，倒數第 2 頁給總結懶人包。",
            en: "Saves and Shares are top signals. Slide 1: clear promise; Slide 2: agitate problem; Second-to-last slide: actionable cheat sheet."
          },
          hookFormulas: [
            "【先按收藏】下次遇到 {topic} 卡關時，把這篇拿出來照著做！",
            "別再傻傻死磕 {topic} 了！這 3 個轉換思維讓效率直接翻倍 ✨",
            "以前的我也對 {topic} 感到焦慮，直到我開始執行這套極簡流程..."
          ]
        },
        {
          id: "facebook",
          name: { zh: "Facebook 深度故事與觀點文", en: "Facebook Long-form Story & Insight" },
          SweetSpot: { zh: "600–1,500 字", en: "600–1,500 words" },
          algorithmTip: {
            zh: "FB 受眾喜歡「有溫度的真實人物故事」結合「職場或人生洞見」。前 3 行（展開閱讀前）需建立場景或懸念，中段有細節描寫，結尾昇華金句。",
            en: "FB rewards authentic personal stories blended with actionable life/career insights. Hook before 'See More', vivid mid-section, quotable ending."
          },
          hookFormulas: [
            "「你覺得 {topic} 真的有標準答案嗎？」那天深夜，一位前輩問了我這句話。",
            "這幾天大家都在吵 {topic}，但我想從另一個沒人提過的角度聊聊。",
            "三年前的我，絕對想不到因為 {topic} 的一個小決定，會徹底改變現在的軌跡。"
          ]
        },
        {
          id: "short_video",
          name: { zh: "Reels / Shorts / TikTok 短影音腳本", en: "Short-form Video Script (Reels/TikTok)" },
          SweetSpot: { zh: "45–90 秒（約 220–400 字口播）", en: "45–90 sec (220–400 spoken words)" },
          algorithmTip: {
            zh: "黃金前 3 秒必須有視覺或聽覺破題（禁止自我介紹！）；每 10–15 秒設計一個資訊轉折點防止滑走；結尾設計循環銜接或留言關鍵字。",
            en: "First 3 seconds must hook visually/verbally (no intros!); pattern interrupt every 12 seconds; seamless loop or comment CTA at the end."
          },
          hookFormulas: [
            "（直視鏡頭）立刻停止你在 {topic} 上的錯誤做法！尤其是第 3 點！",
            "如果能重來，我希望有人早點告訴我關於 {topic} 的這 3 個真相...",
            "只花 60 秒，帶你看懂為什麼高段位的人處理 {topic} 都用這招！"
          ]
        }
      ]
    },
    {
      id: "business",
      icon: "💼",
      name: { zh: "專業職場與商業", en: "Business & Professional" },
      desc: {
        zh: "強調結論先行、邏輯嚴密、數據佐證、決策效率與專業信任感",
        en: "Prioritizes bottom-line upfront, rigorous logic, data backing, and executive clarity"
      },
      recommendedMethods: ["star", "soar_interview", "mece_case", "prep", "scqa", "pyramid", "golden_circle"],
      platforms: [
        {
          id: "biz_interview",
          name: { zh: "商業面試問答（行為面試 ＆ 個案拆解）", en: "Business & Case Interview Q&A" },
          SweetSpot: { zh: "口語回答 90–120 秒（約 250–400 字）｜個案拆解 3–5 分鐘", en: "90–120 sec spoken (250–400 words) | Case 3–5 min" },
          algorithmTip: {
            zh: "面試官在前 15 秒決定對你的印象：第一句必須先給「一句話破題結論（你的核心定位或解題框架）」；講個人經歷時務必用「我（I）」而非模糊的「我們（We）」凸顯個人關鍵決策；結尾最後一句一定要「勾回這份新職位（Transferable Value）」。",
            en: "Interviewers judge in the first 15s: open with a 1-sentence headline answer; use 'I' instead of 'We' to highlight your personal decision-making; always tie the ending back to how this adds value to the target role."
          },
          hookFormulas: [
            "關於 {topic}，我認為最關鍵的破局點在於「數據診斷與跨部門對齊」——這也是我過去成功解決 {pain} 的核心經驗：",
            "面對 {topic} 這類商業挑戰，我習慣先從「需求端、供給端與財務效益」三個維度拆解 {pain}：",
            "這題正好呼應我去年主導的一項高難度專案：當時我們在資源受限下克服了 {pain}，並為 {audience} 創造了可量化的突破："
          ]
        },
        {
          id: "linkedin",
          name: { zh: "LinkedIn 專業洞察與個人品牌文", en: "LinkedIn Thought Leadership" },
          SweetSpot: { zh: "400–900 字", en: "400–900 words" },
          algorithmTip: {
            zh: "結合「一線實戰經驗 + 結構化產業洞察」。避免空泛心靈雞湯，多用具體數字、專案復盤與列點（• 或 1/2/3），結尾邀請同行交流觀點。",
            en: "Combine first-hand battle stories with structured industry insights. Use concrete metrics, bullet points, and invite peer discussion."
          },
          hookFormulas: [
            "在帶領團隊推進 {topic} 的過程中，我發現高績效與普通團隊最大的分水嶺只有一個：",
            "很多人問我如何看待 {topic} 的未來趨勢？分享我們這季實測後的 3 個關鍵數據：",
            "經歷過一次慘痛的專案復盤後，我們決定徹底重構 {topic} 的工作流。"
          ]
        },
        {
          id: "proposal",
          name: { zh: "商業企劃與決策提案 (Proposal)", en: "Business Proposal & Pitch" },
          SweetSpot: { zh: "1頁執行摘要 (Executive Summary) + 結構化方案", en: "1-Page Executive Summary + Structured Deck" },
          algorithmTip: {
            zh: "決策者只關心三件事：為什麼現在要做（急迫性与機會成本）？投報率與風險是什麼（ROI）？具體怎麼落地（資源與時程）？",
            en: "Executives care about 3 things: Why now (cost of inaction)? What's the ROI & risk? How do we execute (resources & timeline)?"
          },
          hookFormulas: [
            "【執行摘要】為解決目前 {pain} 導致的效益流失，本案建議導入 {topic}，預計於 Q3 提升 25% 轉換率。",
            "面對市場變化，維持現狀將使我們在 {topic} 喪失先機；以下是三階段突圍方案：",
            "本提案旨在以最小可行成本驗證 {topic}，在 30 天內達成以下核心指標："
          ]
        },
        {
          id: "exec_report",
          name: { zh: "向上管理與工作匯報 (Executive Update)", en: "Executive Status & Upward Report" },
          SweetSpot: { zh: "200–500 字（30秒讀完）", en: "200–500 words (30-sec read)" },
          algorithmTip: {
            zh: "絕對結論先行！第一行給「目前狀態燈號（綠/黃/紅）＋核心結論」，接著列「關鍵進展、卡點與需主管拍板的選項（附推薦方案）」。",
            en: "Bottom line upfront! Start with Status (Green/Yellow/Red) + Core Conclusion, followed by Progress, Blockers, and Options for decision."
          },
          hookFormulas: [
            "【進度匯報：{topic}】目前進度符合預期（完成度 80%），針對下一階段有 A/B 兩案需請您裁示（建議選 A）：",
            "關於 {topic} 異常狀況說明：目前已先行止血，根本原因與後續防堵機制如下：",
            "本週 {topic} 核心成果摘要：達成 3 項關鍵指標、1 項潛在風險預警及應對方案："
          ]
        },
        {
          id: "cold_email",
          name: { zh: "高回覆率開發信 / 商務邀約 (Cold Email)", en: "High-Conversion Cold Email" },
          SweetSpot: { zh: "100–180 字", en: "100–180 words" },
          algorithmTip: {
            zh: "第一段必須是「跟對方有關的客製化觀察（而非你是誰）」，第二段點出對方可能面臨的痛點與你的實績證明，結尾給極低門檻的 CTA（如：週四下午是否有 10 分鐘？）。",
            en: "Line 1 must be about THEM (personalized observation), Line 2 connects their pain to your social proof, Line 3 is a low-friction CTA."
          },
          hookFormulas: [
            "嗨 {audience}，拜讀了您近期關於 {topic} 的分享，特別認同您對效率瓶頸的觀察——",
            "注意到貴團隊近期正在擴展 {topic}，我們剛協助類似規模的夥伴解決了 {pain}：",
            "長話短說：如果您正在尋找降低 {topic} 成本 30% 的方法，這個 2 分鐘的案例或許對您有幫助。"
          ]
        }
      ]
    },
    {
      id: "deep_content",
      icon: "📚",
      name: { zh: "深度內容與知識型", en: "Deep Content & Knowledge" },
      desc: {
        zh: "強調系統化知識架構、心智模型提煉、可複用洞見與長尾搜尋/訂閱價值",
        en: "Focuses on systematic frameworks, mental models, evergreen value, and deep retention"
      },
      recommendedMethods: ["feynman", "zettelkasten", "pyramid", "scqa", "golden_circle"],
      platforms: [
        {
          id: "newsletter",
          name: { zh: "Substack / 深度電子報 (Newsletter)", en: "Substack / Curated Newsletter" },
          SweetSpot: { zh: "1,200–2,500 字", en: "1,200–2,500 words" },
          algorithmTip: {
            zh: "電子報是「寫給一位老朋友的私密信件」。主旨欄決定開信率；開頭用個人近期觀察引入，中段提供獨家框架或拆解，結尾附上本週精選與行動練習。",
            en: "Write like a letter to one smart friend. Subject line drives open rate; start with a personal observation, deliver an original framework, end with a weekly takeaway."
          },
          hookFormulas: [
            "這週我一直在思考一個問題：當所有人都在談 {topic} 時，我們真正忽略的底層變數是什麼？",
            "早安！這期電子報想跟你分享一套我私藏已久、用來拆解 {topic} 的心智模型。",
            "上週收到一位讀者的來信問到 {pain}，這讓我決定寫下這篇完整的復盤指南："
          ]
        },
        {
          id: "blog_medium",
          name: { zh: "Medium / 個人部落格深度長文", en: "Medium / Long-form Blog Article" },
          SweetSpot: { zh: "1,500–3,500 字", en: "1,500–3,500 words" },
          algorithmTip: {
            zh: "善用 H2/H3 小標題讓掃讀者在 15 秒內掌握文章骨架；每個大段落搭配一個「金句引用框 (Blockquote)」或「對照表」，兼顧深度與易讀性。",
            en: "Use clear H2/H3 subheadings so skimmers grasp the skeleton in 15s; include blockquotes and comparison tables in every section."
          },
          hookFormulas: [
            "關於 {topic}，市面上有太多碎片化的建議，這篇文章將為你建立一套完整的系統化藍圖。",
            "從零開始理解 {topic}：為什麼傳統做法已經失效？我們該如何建立新範式？",
            "如果你曾因為 {pain} 而感到卡關，這份深度指南將帶你一步步拆解背後的運作機制。"
          ]
        },
        {
          id: "tech_tutorial",
          name: { zh: "技術文件與實戰教學 (Tech Docs / Tutorial)", en: "Technical Documentation & Tutorial" },
          SweetSpot: { zh: "依步驟而定（含架構圖、範例與避坑指南）", en: "Step-by-step with prerequisites, code/examples & troubleshooting" },
          algorithmTip: {
            zh: "遵循「先展示最終成果 → 環境與前置條件 → 最小可行步驟 (Step-by-step) → 原理剖析 → 常見錯誤排查 (Troubleshooting)」結構。",
            en: "Follow: Final Outcome Preview -> Prerequisites -> Minimal Reproducible Steps -> How It Works -> Troubleshooting."
          },
          hookFormulas: [
            "本指南將帶你在 15 分鐘內完成 {topic} 的完整建置，並避開新手最常踩的 3 個坑。",
            "為什麼選擇這個架構實作 {topic}？本文將結合原理圖解與實戰範例完整剖析。",
            "【實戰指南】解決 {pain} 的最佳實踐：從核心概念到生產環境落地。"
          ]
        }
      ]
    },
    {
      id: "academic",
      icon: "🔬",
      name: { zh: "學術研究與科普", en: "Academic Research & SciComm" },
      desc: {
        zh: "強調研究缺口 (Research Gap)、方法論嚴謹度、證據鏈完整性與知識跨界轉譯",
        en: "Emphasizes research gaps, methodological rigor, evidence chains, and public translation"
      },
      recommendedMethods: ["imrad", "scqa", "feynman", "zettelkasten", "pyramid"],
      platforms: [
        {
          id: "paper_abstract",
          name: { zh: "期刊論文摘要與緒論 (Abstract & Intro)", en: "Journal Paper Abstract & Introduction" },
          SweetSpot: { zh: "摘要 150–250 字 / 緒論 600–1,000 字", en: "Abstract 150–250 words / Intro 600–1,000 words" },
          algorithmTip: {
            zh: "嚴格遵循 Nature/Science 經典五句結構：1. 領域大背景 2. 現有研究缺口 (However...) 3. 本研究的核心方法與發現 (Here we show...) 4. 關鍵實驗數據 5. 對領域的深遠意義。",
            en: "Follow the Nature 5-part structure: 1. Broad context 2. Knowledge gap ('However...') 3. 'Here we show...' 4. Key results/metrics 5. Broader impact."
          },
          hookFormulas: [
            "儘管 {topic} 在近年來受到廣泛關注，但針對 {pain} 的底層機制仍缺乏系統性量化證據。",
            "現有方法在處理 {topic} 時面臨效率與準確度的權衡瓶頸；本研究提出一套創新框架以突破此限制。",
            "理解 {topic} 對於解決 {pain} 至關重要，然而過往研究多半忽略了關鍵交互變數。"
          ]
        },
        {
          id: "research_grant",
          name: { zh: "研究計畫書 / 經費申請 (Grant Proposal)", en: "Research Grant Proposal" },
          SweetSpot: { zh: "Specific Aims (1頁精華) + 研究設計", en: "1-Page Specific Aims + Research Strategy" },
          algorithmTip: {
            zh: "審查委員看的是「重要性 (Significance) + 創新性 (Innovation) + 可行性 (Feasibility)」。需明確定義核心假說 (Central Hypothesis) 與 2–3 個具體可驗證目標 (Specific Aims)。",
            en: "Reviewers evaluate Significance, Innovation, and Feasibility. Clearly state the Central Hypothesis and 2–3 independent Specific Aims."
          },
          hookFormulas: [
            "本計畫之長程目標在於釐清 {topic} 之核心機制，以徹底解決臨床/產業上 {pain} 之長期挑戰。",
            "針對 {topic} 的關鍵未知領域，本團隊前期預實驗數據顯示一項突破性假說：",
            "結合跨領域方法學，本計畫將透過三個相互獨立但互補的具體目標（Specific Aims）驗證 {topic}："
          ]
        },
        {
          id: "scicomm",
          name: { zh: "大眾科普轉譯文章 (Science Communication)", en: "Popular Science & Translation" },
          SweetSpot: { zh: "800–1,800 字", en: "800–1,800 words" },
          algorithmTip: {
            zh: "先給「生活化比喻或反直覺日常現象」，再引出背後的科學問題；絕對避免未解釋就拋出超過 2 個專有名詞；重點在於「科學家如何像偵探一樣找出答案」。",
            en: "Start with an everyday analogy or counter-intuitive phenomenon; max 1–2 jargon terms (explained immediately); tell the detective story of discovery."
          },
          hookFormulas: [
            "你有沒有想過，為什麼日常中看似不起眼的 {topic}，背後其實藏著連科學家都著迷的機制？",
            "如果把 {topic} 想像成一座繁忙的城市，那麼 {pain} 就像是突然癱瘓的交通號誌系統——",
            "最新發表的一項研究推翻了我們對 {topic} 的直覺認知：原來真相竟然是..."
          ]
        }
      ]
    },
    {
      id: "marketing",
      icon: "🚀",
      name: { zh: "行銷與銷售轉換", en: "Marketing & Conversion Copy" },
      desc: {
        zh: "強調受眾痛點喚醒、渴望描繪、信任背書 (Social Proof)、抗拒破除與明確行動呼籲 (CTA)",
        en: "Focuses on pain agitation, future pacing, social proof, objection handling, and clear CTAs"
      },
      recommendedMethods: ["pas", "aida", "bab", "hook_story_offer", "golden_circle"],
      platforms: [
        {
          id: "landing_page",
          name: { zh: "高轉換到達頁 (Landing Page)", en: "High-Converting Landing Page" },
          SweetSpot: { zh: "8 大視覺區塊（Hero → 痛點 → 解方 → 證言 → FAQ → CTA）", en: "8 visual sections (Hero -> Pain -> Solution -> Proof -> FAQ -> CTA)" },
          algorithmTip: {
            zh: "首屏 (Hero Section) 必須在 5 秒內回答：這是什麼？為誰設計？能帶來什麼具體改變？把「產品功能 (Features)」全部改寫成「使用者的好處 (Benefits)」。",
            en: "Hero section must answer in 5s: What is it? Who is it for? What's the transformation? Translate every Feature into a tangible Benefit."
          },
          hookFormulas: [
            "告別 {pain}！專為 {audience} 打造的 {topic} 終極方案，每天省下 2 小時重複勞動。",
            "不用再為了 {pain} 徹夜難眠——用更聰明的方式掌握 {topic}，已有 5,000+ 專業人士驗證。",
            "從混亂到高效：只需 3 步驟，讓你的 {topic} 產出品質提升 300%。"
          ]
        },
        {
          id: "crowdfunding",
          name: { zh: "群眾募資頁面文案 (Crowdfunding Campaign)", en: "Crowdfunding Campaign Page" },
          SweetSpot: { zh: "完整長頁架構 + 早鳥誘因設計", en: "Full story-driven campaign page + Early-bird tiers" },
          algorithmTip: {
            zh: "募資買的不只是產品，更是「共同改變現狀的參與感」。結構需包含：創辦人初心故事 → 現有市場產品為何不夠好 → 我們的突破性設計 → 規格與公信力檢驗 → 為什麼現在必須支持（限量早鳥）。",
            en: "Backers buy into a mission, not just a gadget. Include: Founder's origin story -> Why existing options fail -> Breakthrough design -> Proof/Specs -> Urgency."
          },
          hookFormulas: [
            "我們受夠了市面上在 {topic} 上總是妥協的產品，歷時 500 天研發，我們決定自己做出理想中的解答。",
            "為什麼 {audience} 總是得忍受 {pain}？這一次，讓我們一起重新定義 {topic} 的標準！",
            "突破傳統限制！第一款結合核心科技與極致體驗的 {topic}，正式啟動群眾集資！"
          ]
        },
        {
          id: "sales_ad",
          name: { zh: "成效型廣告與產品銷售文案 (Ad Copy)", en: "Direct-Response Ad Copy" },
          SweetSpot: { zh: "80–250 字（搭配強烈視覺對比）", en: "80–250 words (paired with high-contrast visual)" },
          algorithmTip: {
            zh: "一張廣告只講「一個核心痛點 + 一個明確承諾」。先做受眾點名（Call out target audience），接著放大不解決的代價，最後給零風險試用或限時優惠。",
            en: "One ad = One core pain + One clear promise. Call out the target audience in line 1, agitate cost of waiting, offer risk-free CTA."
          },
          hookFormulas: [
            "身為 {audience}，你是否也常在 {topic} 時遇到 {pain}？試試這個連專家都在用的新方法：",
            "還在用老方法處理 {topic} 嗎？難怪你總覺得事倍功半！點擊看看前後差距有多大 👇",
            "限時公開：我們如何幫助 {audience} 在 14 天內徹底擺脫 {pain}？"
          ]
        }
      ]
    },
    {
      id: "literary",
      icon: "🖋️",
      name: { zh: "文學寫作與故事創作", en: "Literary & Creative Writing" },
      desc: {
        zh: "強調人物弧光、五感沉浸細節 (Show, Don't Tell)、戲劇衝突、文字韻律與言外之意的留白",
        en: "Focuses on character arcs, sensory immersion (Show, Don't Tell), dramatic tension, rhythm, and subtext"
      },
      recommendedMethods: ["heros_journey", "three_act", "kishotenketsu", "iceberg_sensory", "conflict_twist"],
      platforms: [
        {
          id: "short_fiction",
          name: { zh: "短篇/長篇小說創作 (Fiction & Novel)", en: "Short Story & Novel Scene" },
          SweetSpot: { zh: "單場戲 1,000–2,500 字 / 短篇 3,000–8,000 字", en: "Scene 1,000–2,500 words / Short story 3,000–8,000 words" },
          algorithmTip: {
            zh: "每一場戲都必須推動情節或揭示人物性格：主角在這場戲開始時「想要什麼 (Goal)」？遇到了什麼「阻礙 (Conflict)」？結尾產生了什麼「轉折或代價 (Yes, but / No, and furthermore)」？",
            en: "Every scene needs a Goal, Conflict, and Outcome ('Yes, but...' or 'No, and furthermore...'). Anchor emotions in concrete physical objects and actions."
          },
          hookFormulas: [
            "那封關於 {topic} 的信在抽屜底層躺了七年，直到今天午後的一場雷雨，才讓字跡重新浮現。",
            "所有人都以為 {topic} 已經結束了，只有她聽見牆壁後方傳來極輕微的、規律的敲擊聲。",
            "當他意識到 {pain} 的真正代價時，最後一班開往北方的列車已經熄滅了車燈。"
          ]
        },
        {
          id: "literary_essay",
          name: { zh: "現代散文與生活隨筆 (Literary Essay)", en: "Literary Essay & Personal Prose" },
          SweetSpot: { zh: "1,000–2,500 字", en: "1,000–2,500 words" },
          algorithmTip: {
            zh: "散文貴在「以小見大、形散神聚」。從一個具體的日常器物、氣味或瞬間切入（起），延伸到記憶或時代經驗的交錯（承、轉），最終收束於對生命處境的體悟而非說教（合）。",
            en: "Find the universal in the hyper-specific. Start with a concrete object, scent, or fleeting moment, weave through memory, and end with quiet resonance rather than preaching."
          },
          hookFormulas: [
            "每次經過那條氣味潮濕的巷口，我總會想起與 {topic} 有關的那個夏天——光線是斜的，時間也是。",
            "人們總習慣用宏大的詞彙談論 {topic}，但在我的記憶裡，它不過是一隻邊緣缺了口的白瓷碗。",
            "有些關於 {pain} 的事，在發生的當下並沒有聲音，總要等到許多年後某個尋常的傍晚，才突然在心底揚起灰塵。"
          ]
        },
        {
          id: "screenplay",
          name: { zh: "影視劇本與戲劇對白 (Screenplay & Dialogue)", en: "Screenplay & Dramatic Scene" },
          SweetSpot: { zh: "1頁劇本 ≈ 1分鐘畫面（視覺動作 + 潛台詞對白）", en: "1 page ≈ 1 minute screen time (Visual action + Subtext dialogue)" },
          algorithmTip: {
            zh: "電影與戲劇是「視覺與聽覺的藝術」：能用動作呈現的絕不用對白說破；一流的對白充滿「潛台詞 (Subtext)」——角色嘴上在聊晚餐吃什麼，實際上在爭奪關係的主導權。",
            en: "Write only what can be seen or heard. Great dialogue relies on subtext: characters talk about coffee while fighting about betrayal."
          },
          hookFormulas: [
            "【內景・深夜辦公室・夜】螢幕冷光映在主角疲憊的瞳孔上，桌上的 {topic} 檔案散落一地，電話鈴聲突兀響起——",
            "角色 A 盯著眼前的 {topic}，手指無意識地摩挲著冰冷的杯緣，沉默了整整五秒才開口：",
            "畫面從特寫開始：一雙顫抖的手正試圖掩蓋 {pain} 留下的痕跡，門外傳來逼近的腳步聲。"
          ]
        },
        {
          id: "narrative_nonfiction",
          name: { zh: "非虛構寫作與人物報導 (Narrative Nonfiction)", en: "Narrative Nonfiction & Profile" },
          SweetSpot: { zh: "2,500–5,000 字", en: "2,500–5,000 words" },
          algorithmTip: {
            zh: "結合「新聞調查的真實嚴謹」與「小說的場景敘事張力」。利用特寫鏡頭（現場環境細節、人物標誌性動作）與遠景鏡頭（社會結構、歷史脈絡、統計數據）交替切換。",
            en: "Blend journalistic rigor with novelistic scene-building. Alternate between close-up human moments and wide-angle societal/historical context."
          },
          hookFormulas: [
            "在 {topic} 成為新聞頭條之前，它首先是一場發生在凌晨四點、無人知曉的漫長等待。",
            "要理解 {audience} 為何陷入 {pain} 的結構性困境，我們必須先把時間倒回十年前的那個決定性現場。",
            "他的工作檯上擺著三樣東西，恰好濃縮了整個 {topic} 產業過去二十年的興衰與掙扎："
          ]
        }
      ]
    }
  ],

  // 2. 四大類共 16 種經典與進階寫作方法論 (Writing Methodologies)
  categories: [
    { id: "all", name: { zh: "全部方法論", en: "All Methodologies" } },
    { id: "logic", name: { zh: "🧠 邏輯與說服架構", en: "Logic & Persuasion" } },
    { id: "marketing", name: { zh: "🔥 行銷與社群爆款", en: "Marketing & Viral" } },
    { id: "narrative", name: { zh: "🎬 敘事與故事張力", en: "Narrative & Storytelling" } },
    { id: "knowledge", name: { zh: "🏛️ 知識管理與學術", en: "Knowledge & Academic" } },
    { id: "literary_craft", name: { zh: "✒️ 文學美學與創作", en: "Literary Craft" } }
  ],

  methodologies: [
    // ==================== 邏輯與說服架構 (Logic) ====================
    {
      id: "prep",
      category: "logic",
      code: "PREP",
      name: { zh: "PREP 結論先行法", en: "PREP (Point-Reason-Example-Point)" },
      tagline: {
        zh: "職場匯報、專業觀點文與高效溝通的黃金標準",
        en: "The gold standard for executive communication and crisp opinion pieces"
      },
      bestForFields: ["business", "social", "deep_content"],
      difficulty: "⭐ 入門必備",
      pacing: "快節奏・開門見山",
      summary: {
        zh: "在注意力稀缺的時代，先把核心結論亮出來，再用理由與具體案例支撐，最後重申觀點形成閉環。最適合忙碌的決策者與社群掃讀者。",
        en: "Deliver the main conclusion immediately, back it up with logical reasons and a concrete example, then restate the point for closure."
      },
      steps: [
        {
          key: "P1",
          label: { zh: "P — Point（核心結論）", en: "P — Point (Core Conclusion)" },
          ratio: "15%",
          purpose: { zh: "一句話亮出你最核心的主張或決定，不繞彎子。", en: "State your main claim or recommendation in one crisp sentence." },
          template: "關於【{topic}】，我最核心的結論是：要真正解決【{pain}】，【{audience}】最該優先採取的策略是＿＿＿＿＿＿，而非傳統的做法。",
          checklist: ["是否在第一段前兩句就給出明確立場？", "拿掉這句話後，讀者還知道你想表達什麼嗎？"]
        },
        {
          key: "R",
          label: { zh: "R — Reason（核心理由與依據）", en: "R — Reason (Logical Rationale)" },
          ratio: "30%",
          purpose: { zh: "給出 2–3 個支撐結論的底層原因、趨勢或數據。", en: "Provide 2–3 logical reasons, trends, or data points supporting your claim." },
          template: "為什麼這麼說？背後有三個關鍵原因：\n1. 底層邏輯改變：過去有效的方法現在面臨【{pain}】的瓶頸。\n2. 效益槓桿最高：將資源集中在【{topic}】的核心環節，能直接減少 50% 的無效內耗。\n3. 長期複利效應：這能為【{audience}】建立難以被複製的系統性優勢。",
          checklist: ["理由之間是否彼此獨立、互不重疊（MECE）？", "是否有客觀邏輯或數據支撐，而非單純主觀情緒？"]
        },
        {
          key: "E",
          label: { zh: "E — Example（具體案例與實證）", en: "E — Example (Concrete Case / Evidence)" },
          ratio: "40%",
          purpose: { zh: "舉出一個真實案例、前後對比數據或親身實測經驗，讓抽象道理具象化。", en: "Illustrate with a specific real-world case study, metric comparison, or personal experiment." },
          template: "舉個具體的例子：先前我們在處理【{topic}】時，也曾陷入【{pain}】的困境。後來我們調整了做法，改為先鎖定＿＿＿＿＿＿，結果在短短兩週內，不僅解決了原本的卡點，更讓整體成效提升了＿＿%。",
          checklist: ["案例是否有具體的場景、時間點與量化改變？", "案例是否精準對應前面的 Reason？"]
        },
        {
          key: "P2",
          label: { zh: "P — Point（重申升華與行動建議）", en: "P — Point (Restate & Actionable Takeaway)" },
          ratio: "15%",
          purpose: { zh: "換句話重申結論，並給出讀者現在就能執行的第一步。", en: "Restate the conclusion with elevated insight and provide an immediate next step." },
          template: "因此，面對【{topic}】，與其在枝微末節上焦慮，不如先抓準核心槓桿。建議身為【{audience}】的你，今天就可以先從＿＿＿＿＿＿這一步開始測試。",
          checklist: ["結尾是否與開頭首尾呼應？", "是否給出了明確可執行的下一步（Action Item）？"]
        }
      ],
      pitfalls: {
        zh: "常見錯誤：在第一個 P 塞入太多背景鋪陳，變成「鋪陳先行」而非「結論先行」；或者在 E（案例）講得太發散，偏離了 R（理由）。",
        en: "Adding too much background before the first Point, or letting the Example wander away from the core Reason."
      }
    },

    {
      id: "scqa",
      category: "logic",
      code: "SCQA",
      name: { zh: "SCQA 麥肯錫結構敘事法", en: "SCQA (Situation-Complication-Question-Answer)" },
      tagline: {
        zh: "商業提案、研究緒論與深度策略分析的頂級破題框架",
        en: "McKinsey's flagship framework for proposals, academic introductions, and strategic framing"
      },
      bestForFields: ["business", "academic", "deep_content"],
      difficulty: "⭐⭐ 進階實戰",
      pacing: "穩健鋪陳・衝突引爆",
      summary: {
        zh: "源自芭芭拉・明托《金字塔原理》。先建立雙方共識的背景（S），接著指出打破平衡的衝突或難題（C），自然引出核心問題（Q），最後亮出你的解決方案（A）。",
        en: "Establish familiar context (Situation), introduce the disruptive trigger/problem (Complication), frame the core question (Question), and deliver your solution (Answer)."
      },
      steps: [
        {
          key: "S",
          label: { zh: "S — Situation（背景與共識現況）", en: "S — Situation (Established Context)" },
          ratio: "15%",
          purpose: { zh: "描述受眾都認同的穩定現況或產業大趨勢，建立共鳴起點。", en: "State an indisputable fact or current state that your audience immediately agrees with." },
          template: "在當前的環境下，【{topic}】已經成為所有【{audience}】不可或缺的核心能力與關注焦點，大家都希望透過它達成更理想的成果。",
          checklist: ["這句話是否能讓目標受眾在 3 秒內點頭表示同意？"]
        },
        {
          key: "C",
          label: { zh: "C — Complication（衝突、變化與瓶頸）", en: "C — Complication (The Trigger / Obstacle)" },
          ratio: "25%",
          purpose: { zh: "用「然而 / 但是」轉折，點出現況遇到的阻礙、外部變局或【痛點】。", en: "Introduce the 'However...' — the disruption, bottleneck, or hidden risk breaking the status quo." },
          template: "然而，隨著環境與規則快速演變，傳統做法已經難以應付【{pain}】的挑戰。許多【{audience}】投入了大量時間與資源，卻發現成效停滯不前，甚至產生嚴重的反效果。",
          checklist: ["衝突感是否足夠強烈，讓讀者意識到「維持現狀是危險的」？"]
        },
        {
          key: "Q",
          label: { zh: "Q — Question（核心關鍵問題）", en: "Q — Question (The Core Question)" },
          ratio: "10%",
          purpose: { zh: "將衝突轉化為一個精準、迫切需要解答的核心問題。", en: "Crystallize the complication into one urgent, pivotal question." },
          template: "那麼，在資源有限且面臨【{pain}】的情況下，【{audience}】究竟該如何重新建構【{topic}】的策略，才能突破瓶頸並建立長期優勢？",
          checklist: ["問題是否精準聚焦，且正好能被你的 Answer 完美回答？"]
        },
        {
          key: "A",
          label: { zh: "A — Answer（核心解答與行動方案）", en: "A — Answer (Structured Solution)" },
          ratio: "50%",
          purpose: { zh: "給出結構化的解決方案（通常拆解為 3 大支柱或步驟）。", en: "Deliver your structured solution broken down into 3 actionable pillars or phases." },
          template: "經過實證拆解，真正破局的關鍵在於以下「三階段系統化方案」：\n• 第一階段（重新定位）：先釐清＿＿＿＿＿＿，排除無效干擾。\n• 第二階段（核心槓桿）：針對【{pain}】導入＿＿＿＿＿＿機制。\n• 第三階段（規模化放大）：建立自動化檢核指標，確保【{topic}】持續產出高價值成果。",
          checklist: ["解答是否直接回應了 Q？", "方案是否有明確的優先順序與執行步驟？"]
        }
      ],
      pitfalls: {
        zh: "常見錯誤：S（背景）寫得像歷史課本一樣冗長；或是 C（衝突）不夠痛，導致讀者覺得 Q（問題）不值得關心。",
        en: "Making the Situation too long like a textbook history, or making the Complication too weak to create urgency."
      }
    },

    {
      id: "pyramid",
      category: "logic",
      code: "PYRAMID",
      name: { zh: "金字塔原理（MECE 結構化拆解法）", en: "The Minto Pyramid Principle (MECE)" },
      tagline: {
        zh: "上統下、彼此獨立互不遺漏（MECE）的頂級深度思考與寫作法",
        en: "Top-down governing thought supported by Mutually Exclusive, Collectively Exhaustive pillars"
      },
      bestForFields: ["business", "deep_content", "academic"],
      difficulty: "⭐⭐⭐ 高階思維",
      pacing: "嚴密結構・層層展開",
      summary: {
        zh: "任何複雜主題都應呈現為一座金字塔：頂端是唯一的核心統攝思想（Governing Thought），往下一層是符合 MECE 原則（不重疊、不遺漏）的 3 個分支論點，最底層則是具體證據與數據。",
        en: "Organize complex ideas into a pyramid: 1 Governing Thought at the top, 3 MECE argument pillars in the middle, and concrete data/evidence at the base."
      },
      steps: [
        {
          key: "TOP",
          label: { zh: "塔尖 — 核心統攝思想 (Governing Thought)", en: "Apex — Governing Thought" },
          ratio: "15%",
          purpose: { zh: "用一句話概括全文的最高結論（以上統下）。", en: "Summarize the entire document's core thesis in a single governing sentence." },
          template: "要徹底掌握【{topic}】並克服【{pain}】，【{audience}】必須同時從「認知思維」、「系統流程」與「工具槓桿」三個維度進行升級。",
          checklist: ["塔尖這句話是否已經預告了下方的三個子維度？"]
        },
        {
          key: "PILLAR_1",
          label: { zh: "支柱一 — 維度 A（結論 + 證據鏈）", en: "Pillar 1 — Dimension A (Claim + Evidence)" },
          ratio: "25%",
          purpose: { zh: "第一個獨立維度的論點與實證（例如：內部因素 / 短期策略 / 認知層面）。", en: "First MECE dimension with sub-points and supporting data." },
          template: "一、認知維度：從「被動應對」轉向「主動設計」\n• 核心觀點：大多數【{pain}】源於對【{topic}】的錯誤假設。\n• 關鍵實證：數據與案例顯示，先定義邊界條件能減少 60% 的返工。",
          checklist: ["此支柱的標題本身是否就是一句有洞見的結論（而非只有名詞）？"]
        },
        {
          key: "PILLAR_2",
          label: { zh: "支柱二 — 維度 B（結論 + 證據鏈）", en: "Pillar 2 — Dimension B (Claim + Evidence)" },
          ratio: "25%",
          purpose: { zh: "第二個獨立維度的論點與實證（例如：外部因素 / 中期執行 / 流程層面）。", en: "Second MECE dimension complementing Pillar 1 without overlap." },
          template: "二、流程維度：建立標準化與模組化的【{topic}】工作流\n• 核心觀點：靠意志力維持品質必定失敗，必須靠流程防呆。\n• 關鍵實證：透過拆解為 3 個關鍵檢核點，能穩定解決【{pain}】。",
          checklist: ["支柱二與支柱一是否完全不重疊？"]
        },
        {
          key: "PILLAR_3",
          label: { zh: "支柱三 — 維度 C 與總結閉環", en: "Pillar 3 — Dimension C & Synthesis" },
          ratio: "35%",
          purpose: { zh: "第三個獨立維度（例如：長期迭代 / 工具賦能）與整體協同效應總結。", en: "Third MECE dimension plus synthesis of how all three work together." },
          template: "三、槓桿維度：善用回饋迴路持續放大【{topic}】綜效\n• 核心觀點：單次成功只是運氣，建立數據回饋才能形成護城河。\n• 總結閉環：當【{audience}】將上述三大支柱串聯，【{pain}】將不再是阻礙，而是篩選競爭對手的門檻。",
          checklist: ["三個支柱加起來是否完整涵蓋了塔尖的命題（不遺漏）？"]
        }
      ],
      pitfalls: {
        zh: "常見錯誤：子標題只寫「背景、分析、結論」這種沒有資訊量的空泛名詞，而非「有觀點的完整判斷句」。",
        en: "Using vague noun labels ('Background', 'Analysis') instead of assertion-based headings that summarize the takeaway."
      }
    },

    {
      id: "golden_circle",
      category: "logic",
      code: "WHY-HOW-WHAT",
      name: { zh: "黃金圈法則 (Golden Circle)", en: "Simon Sinek's Golden Circle (Why-How-What)" },
      tagline: {
        zh: "品牌宣言、領導力演講、募資初心與深度共鳴觀點文的首選",
        en: "Start with Why: inspire action through belief, differentiation, and tangible proof"
      },
      bestForFields: ["marketing", "business", "social", "deep_content"],
      difficulty: "⭐ 入門必備",
      pacing: "由內而外・價值感召",
      summary: {
        zh: "Simon Sinek 提出：平庸的溝通由外而內（先講 What 做什麼，再講 How），而偉大的感召力永遠「由內而外」——先談你為什麼相信這件事（Why），再談你如何與眾不同地實現它（How），最後才展示具體成果或產品（What）。",
        en: "People don't buy what you do; they buy why you do it. Start with Purpose/Belief (Why), move to Unique Process (How), and end with the Tangible Offering (What)."
      },
      steps: [
        {
          key: "WHY",
          label: { zh: "WHY — 核心信念與使命（為什麼這件事重要？）", en: "WHY — Core Belief & Purpose" },
          ratio: "35%",
          purpose: { zh: "觸動大腦邊緣系統，表明你相信什麼價值觀、想改變什麼不合理的現狀。", en: "Speak to the limbic brain: state your core belief and the status quo you refuse to accept." },
          template: "我們始終相信，每一位【{audience}】都不應該被【{pain}】綁架而消耗原本寶貴的創造力。探討【{topic}】真正的意義，從來不是為了追求表面的數字，而是為了奪回對工作與生活的掌控權。",
          checklist: ["這段話是否談論「信念與價值」，而非產品規格？"]
        },
        {
          key: "HOW",
          label: { zh: "HOW — 獨特方法與原則（我們如何與眾不同？）", en: "HOW — Differentiated Approach" },
          ratio: "35%",
          purpose: { zh: "說明為了實踐這個信念，你採取了什麼獨特的設計原則或方法論。", en: "Explain the unique principles, discipline, or methodology that brings your Why to life." },
          template: "為了實現這個信念，我們徹底捨棄了繁瑣低效的傳統做法，而是透過「極簡結構化」與「以人為本」的設計原則來重塑【{topic}】——把複雜留給系統，把直覺還給【{audience}】。",
          checklist: ["是否清楚展現了你與市面上一般做法的差異化？"]
        },
        {
          key: "WHAT",
          label: { zh: "WHAT — 具體成果、方案與行動邀請", en: "WHAT — Tangible Proof & Call to Action" },
          ratio: "30%",
          purpose: { zh: "自然端出你的具體作品、產品、文章清單或行動方案作為信念的證明。", en: "Present your concrete solution, product, or actionable guide as the physical proof of your Why." },
          template: "這就是為什麼我們整理了這套【{topic}】實戰指南。它包含了 3 個立即可用的核心模組，幫助你徹底告別【{pain}】。現在就一起開始這場改變：",
          checklist: ["What 是否看起來像是 Why 的自然延伸結果？"]
        }
      ],
      pitfalls: {
        zh: "常見錯誤：口頭上寫「為什麼」，內容卻還在講市場規模或產品功能，沒有真正觸及讀者的內在渴望與價值觀。",
        en: "Confusing 'Why' with market statistics or features instead of a genuine human belief."
      }
    },

    // ==================== 行銷與社群爆款公式 (Marketing & Viral) ====================
    {
      id: "listicle",
      category: "marketing",
      code: "LIST-5",
      name: { zh: "社群爆款清單體（高密度結構化列點法）", en: "Social Listicle & High-Density Bullet Framework" },
      tagline: {
        zh: "社群平台收藏率、完讀率與轉發率最高的乾貨格式，專治資訊爆炸與注意力稀缺",
        en: "The #1 save-rate and skim-friendly format for viral social posts, Threads, X and LinkedIn"
      },
      bestForFields: ["social", "business", "deep_content"],
      difficulty: "⭐ 入門必備",
      pacing: "條理分明・高密度節奏",
      summary: {
        zh: "現代人在社群上只會『掃讀 (Scan)』不會『逐字讀』。清單體透過『黃金鉤子 + 3-7 條高度對齊的結構化列點 + 一句話總結昇華 + 收藏呼籲』，把龐大的知識降維成極好消化的精神乾糧。",
        en: "Social readers scan before they read. Use a high-promise hook, 3-7 symmetrically structured bullets (Principle + Action + Contrast), a 1-sentence TL;DR synthesis, and a clear Save CTA."
      },
      steps: [
        {
          key: "HOOK",
          label: { zh: "1. 破題鉤子 ＋ 數字價值承諾 (Hook & Number Promise)", en: "1. Hook & High-Value Number Promise" },
          ratio: "15%",
          purpose: { zh: "第一行點名受眾與痛點，並用奇數（3/5/7）承諾高含金量清單，引發立即收藏慾望。", en: "Call out target audience, state the pain, and promise high-density value with numbers." },
          template: "【破題鉤子】\n關於【{topic}】，我見過太多【{audience}】因為【{pain}】而反覆內耗。\n這是我經過深度復盤與實測後，總結出的 5 個最關鍵破局底層邏輯（建議先點收藏，隨時回看）👇",
          checklist: ["是否有明確的數字（如 3、5、7 點）？", "是否有承諾具體解決【痛點】的價值？"]
        },
        {
          key: "BULLETS",
          label: { zh: "2. 結構化核心列點 (Core High-Density Bullets)", en: "2. Symmetrical Actionable Bullets" },
          ratio: "60%",
          purpose: { zh: "3–5 個彼此獨立的列點，每點採用『標題金句 ＋ 具體做法 ＋ 避坑對比』工整排版。", en: "Deliver 3-5 structured bullets. Each point features a bold takeaway, tactical action, and contrast." },
          template: "01. ＿＿＿＿＿＿（核心心法一）\n• 錯誤直覺：過去遇到【{pain}】，大多數人只會盲目硬幹。\n• 正確做法：在【{topic}】中，真正的槓桿是先做好＿＿＿＿＿＿。\n\n02. ＿＿＿＿＿＿（核心心法二）\n• 核心本質：把複雜流程模組化，避免每次都從零開始。\n• 實戰指引：每天花 10 分鐘檢視＿＿＿＿＿＿，立刻減少 40% 無效消耗。\n\n03. ＿＿＿＿＿＿（核心心法三）\n• 逆向思維：與其追求完美，不如先建立最小可行回饋迴路。\n• 避坑指南：千萬不要在＿＿＿＿＿＿上浪費過多精力。\n\n04. ＿＿＿＿＿＿（核心心法四）\n• 長期複利：將【{topic}】沉澱為可複用的資產與標準 SOP。",
          checklist: ["每點格式是否工整（有標題、有正反對比、有具體行動）？", "每點字數是否維持在 2–4 行內，保有視覺呼吸感？"]
        },
        {
          key: "TLDR",
          label: { zh: "3. 一句話 TL;DR 總結昇華 (Synthesis)", en: "3. 1-Sentence TL;DR & Core Mental Model" },
          ratio: "15%",
          purpose: { zh: "將前面的所有列點收束為一個精闢的金句心智模型，便於記憶與轉發。", en: "Synthesize all bullets into one memorable takeaway or quotable mental model." },
          template: "【一句話總結 TL;DR】\n面對【{topic}】，高手與普通人的差別從來不是付出的時間多寡，而是你是否掌握了系統化篩選與執行的能力：＿＿＿＿＿＿。",
          checklist: ["是否有一句好記、值得截圖或劃線的金句？"]
        },
        {
          key: "CTA",
          label: { zh: "4. 開放式互動 ＋ 收藏行動呼籲 (Action & Save CTA)", en: "4. Discussion Question & Save CTA" },
          ratio: "10%",
          purpose: { zh: "拋出單選題或開放式提問引發留言演算法權重，並提醒讀者收藏備用。", en: "Prompt comments with an easy question to boost algorithmic distribution and remind to save." },
          template: "【互動與收藏】\n上面這幾點中，哪一條最戳中你目前在【{pain}】的狀態？歡迎在留言區留下號碼或你的想法！\n如果這篇對你或身邊的【{audience}】有啟發，別忘了按個收藏／轉發支持 ✨",
          checklist: ["是否有低門檻的留言互動提問？", "是否有明確引導點讚、收藏或轉推？"]
        }
      ],
      pitfalls: {
        zh: "常見錯誤：列點只寫抽象空洞的大道理（如『要堅持、要有熱情』），沒有具體行動與正反對比；每點長短不一，缺乏排版美感。",
        en: "Listing generic vague slogans without concrete action steps; uneven bullet lengths that ruin visual scanning."
      }
    },

    {
      id: "pas",
      category: "marketing",
      code: "PAS",
      name: { zh: "PAS 痛點激化轉換法", en: "PAS (Problem-Agitate-Solution)" },
      tagline: {
        zh: "社群爆款貼文、銷售頁與短影音腳本轉換率最高的萬用公式",
        en: "The highest-converting copywriting formula for social media, ads, and landing pages"
      },
      bestForFields: ["marketing", "social", "business"],
      difficulty: "⭐ 入門必備",
      pacing: "痛點直擊・情緒升溫",
      summary: {
        zh: "人類逃避痛苦的動力遠大於追求快樂。先精準說出受眾正經歷的問題（Problem），接著放大「如果不解決會怎樣」的焦慮與代價（Agitate），最後在情緒最高點給出解藥（Solution）。",
        en: "Identify a specific pain point (Problem), pour salt on the wound by vivid sensory/emotional consequences (Agitate), then present the relief (Solution)."
      },
      steps: [
        {
          key: "P",
          label: { zh: "P — Problem（精準點名痛點）", en: "P — Problem (Call Out the Pain)" },
          ratio: "25%",
          purpose: { zh: "用受眾內心的獨白描述他正在遭遇的卡點，讓他驚呼「這就是在說我！」", en: "Describe the exact frustration in the audience's own inner voice." },
          template: "身為【{audience}】，你是不是也常常在面對【{topic}】時，明明花了好幾個小時查資料、反覆修改，卻還是卡在【{pain}】，感覺自己一直在原地打轉？",
          checklist: ["是否聚焦在「單一且具體」的痛點，而非模糊的大問題？"]
        },
        {
          key: "A",
          label: { zh: "A — Agitate（激化痛感與不改變的代價）", en: "A — Agitate (Amplify Consequences)" },
          ratio: "35%",
          purpose: { zh: "描繪痛點持續下去的骨牌效應與情緒挫折，打破「再拖一下也沒關係」的惰性。", en: "Show the ripple effect and emotional cost of leaving the problem unsolved." },
          template: "更讓人崩潰的是，當【{pain}】一再發生，不只消耗掉你的熱情與下班時間，還會讓你開始懷疑自己的專業能力；眼看身邊的人都在【{topic}】上快速產出成果，自己卻因為缺乏系統方法而錯失關鍵機會……",
          checklist: ["是否有描寫出具體的生活/工作場景與內心情緒？"]
        },
        {
          key: "S",
          label: { zh: "S — Solution（給出解方與零阻力下一步）", en: "S — Solution (The Relief & Path Forward)" },
          ratio: "40%",
          purpose: { zh: "告訴讀者「這不是你的錯，你只是缺對的工具/框架」，並給出清晰解方。", en: "Relieve the tension: reframe the cause and present your clear, actionable solution." },
          template: "其實，這真的不是你不夠努力，而是你少了一套經過驗證的【{topic}】底層框架！\n只要掌握以下 3 個關鍵步驟，你也能在 15 分鐘內擺脫【{pain}】：\n1. 先鎖定＿＿＿＿＿＿\n2. 套用＿＿＿＿＿＿結構\n3. 執行＿＿＿＿＿＿檢核\n立即收藏這篇／點擊下方連結，從今天開始徹底升級你的產出效率！",
          checklist: ["解方是否直接解除前面激化的焦慮？", "CTA（行動呼籲）是否簡單明確？"]
        }
      ],
      pitfalls: {
        zh: "常見錯誤：Agitate（激化）用力過猛變成恐嚇或說教，引起讀者防衛心；重點應是「同理心理解他的苦」而非指責。",
        en: "Over-agitating to the point of sounding manipulative or judgmental instead of deeply empathetic."
      }
    },

    {
      id: "bab",
      category: "marketing",
      code: "BAB",
      name: { zh: "BAB 前後對比橋樑法", en: "BAB (Before-After-Bridge)" },
      tagline: {
        zh: "最能激發「渴望感 (Desire)」的轉型故事與案例分享結構",
        en: "Paint the painful Before, the dream After, and position your insight as the Bridge"
      },
      bestForFields: ["social", "marketing", "deep_content"],
      difficulty: "⭐ 入門必備",
      pacing: "畫面對比・希望感強",
      summary: {
        zh: "比起單純講痛點，BAB 更強調「美好未來的畫面感」。先呈現改變前的混亂狀態（Before），再帶領讀者看見改變後的理想生活（After），最後揭曉連結兩者的關鍵橋樑（Bridge）。",
        en: "Contrast the current frustrating reality (Before) with the desirable future state (After), then reveal how to cross over (Bridge)."
      },
      steps: [
        {
          key: "BEFORE",
          label: { zh: "Before — 改變前的困境畫面", en: "Before — Current Painful Reality" },
          ratio: "30%",
          purpose: { zh: "具象化目前的掙扎狀態。", en: "Show the current struggle with relatable details." },
          template: "以前的我（或許多【{audience}】）在處理【{topic}】時，總是深陷【{pain}】的泥淖：每次都要從零開始摸索、花掉整個週末反覆重工，最後出來的成果卻還是不盡理想。",
          checklist: ["是否包含具體的時間成本或情緒消耗描述？"]
        },
        {
          key: "AFTER",
          label: { zh: "After — 改變後的理想未來（Future Pacing）", en: "After — Desired Future State" },
          ratio: "30%",
          purpose: { zh: "讓讀者「預先體驗」問題解決後的輕鬆與成就感。", en: "Help the reader vividly visualize and feel life after the problem is solved." },
          template: "想像一下：如果下次面對【{topic}】時，你能在 10 分鐘內理清脈絡、精準抓出切入點，不僅徹底擺脫【{pain}】，還能把省下來的時間拿去深耕真正重要的核心目標，那會是什麼感覺？",
          checklist: ["After 的畫面是否具體且令人嚮往，與 Before 形成強烈反差？"]
        },
        {
          key: "BRIDGE",
          label: { zh: "Bridge — 跨越鴻溝的關鍵橋樑", en: "Bridge — The Mechanism & Action Steps" },
          ratio: "40%",
          purpose: { zh: "揭曉從 Before 走到 After 的核心關鍵（你的方法論、工具或產品）。", en: "Introduce your methodology, insight, or offer as the bridge connecting Before to After." },
          template: "讓我從 Before 走到 After 的關鍵橋樑，並不是更拼命熬夜，而是導入了這套【{topic}】三步心法：\n• 第一步：＿＿＿＿＿＿\n• 第二步：＿＿＿＿＿＿\n• 第三步：＿＿＿＿＿＿\n這套方法現在也完整整理好了，照著做，你也能輕鬆跨過這道門檻！",
          checklist: ["橋樑的步驟是否看起來簡單可行，讓讀者相信自己也做得到？"]
        }
      ],
      pitfalls: {
        zh: "常見錯誤：After 寫得像誇大不實的廣告（「一夜暴富、再也不用工作」），失去真實可信度。",
        en: "Making the 'After' state sound like unrealistic hype rather than a believable, tangible transformation."
      }
    },

    {
      id: "aida",
      category: "marketing",
      code: "AIDA",
      name: { zh: "AIDA 經典漏斗說服法", en: "AIDA (Attention-Interest-Desire-Action)" },
      tagline: {
        zh: "百年不敗的廣告文案、產品銷售頁與活動宣傳標準漏斗",
        en: "The timeless 4-stage conversion funnel from first glance to final click"
      },
      bestForFields: ["marketing", "social", "business"],
      difficulty: "⭐ 入門必備",
      pacing: "層層遞進・促動成交",
      summary: {
        zh: "模擬人類從「看見資訊」到「採取行動」的完整心理路徑：先用強鉤子抓住注意力（Attention），再用新鮮知識或相關性引發興趣（Interest），接著透過價值與證言點燃渴望（Desire），最後推一把完成行動（Action）。",
        en: "Guide the reader through four psychological gates: grab Attention, build Interest, stoke Desire with proof, and trigger Action."
      },
      steps: [
        {
          key: "A1",
          label: { zh: "A — Attention（抓眼球的破題鉤子）", en: "A — Attention (Pattern-Interrupt Hook)" },
          ratio: "15%",
          purpose: { zh: "用驚人數據、反常識提問或受眾點名攔截滑動的手指。", en: "Stop the scroll with a bold stat, contrarian question, or direct audience callout." },
          template: "【給所有【{audience}】】你知道嗎？在【{topic}】上，有 85% 的時間浪費其實都源自同一個被忽略的盲點：【{pain}】！",
          checklist: ["標題或首句是否有具體數字、反差感或直接點名受眾？"]
        },
        {
          key: "I",
          label: { zh: "I — Interest（引發好奇與切身相關性）", en: "I — Interest (Novel Insight & Relevance)" },
          ratio: "30%",
          purpose: { zh: "解釋為什麼這件事跟讀者息息相關，並提供一個令人耳目一新的洞察。", en: "Explain why this matters to the reader right now with a fresh insight." },
          template: "過去我們總以為只要投入更多時間就能做好【{topic}】，但最新實務發現，真正決定成敗的關鍵在於「結構化設計」。當你懂得轉換這個底層視角，原本棘手的【{pain}】其實可以迎刃而解。",
          checklist: ["是否提供了讓讀者覺得「原來如此！」的新資訊？"]
        },
        {
          key: "D",
          label: { zh: "D — Desire（描繪好處與社會認同證言）", en: "D — Desire (Benefits + Social Proof)" },
          ratio: "35%",
          purpose: { zh: "列出具體好處（Benefits）並加上真實數據或使用者證言，消除疑慮。", en: "Stack tangible benefits alongside concrete social proof and testimonials." },
          template: "透過這套【{topic}】系統，你將獲得三大立竿見影的改變：\n✅ 省時高效：告別【{pain}】，產出速度提升 2 倍以上\n✅ 品質穩定：每次都能套用經過驗證的高轉換結構\n✅ 實戰驗證：已有超過＿＿位【{audience}】親測有效，好評回饋不斷！",
          checklist: ["是否把冷冰冰的「功能」轉化為讀者能感受到的「好處」？"]
        },
        {
          key: "A2",
          label: { zh: "A — Action（明確、低阻力的行動呼籲）", en: "A — Action (Clear, Urgent Call-to-Action)" },
          ratio: "20%",
          purpose: { zh: "明確告訴讀者現在要點哪裡、做什麼，並給予立即行動的理由。", en: "Tell the reader exactly what to do next and why they should do it now." },
          template: "別讓【{pain}】繼續拖慢你的腳步！現在就點擊下方連結／留言「＋1」，立即領取完整的【{topic}】實戰範本（限時開放中）👉",
          checklist: ["CTA 是否只有「唯一一個」明確動作（避免同時叫人按讚、分享、填表又買單）？"]
        }
      ],
      pitfalls: {
        zh: "常見錯誤：Interest 跟 Desire 分界不清，或者在 Action 階段給出太多選擇，導致讀者陷入選擇困難而離開。",
        en: "Blurring Interest and Desire, or giving multiple competing CTAs at the end."
      }
    },

    {
      id: "hook_story_offer",
      category: "marketing",
      code: "HSO",
      name: { zh: "Hook-Story-Offer 爆款故事變現法", en: "Hook-Story-Offer (Russell Brunson)" },
      tagline: {
        zh: "自媒體創作者、個人品牌與知識變現最核心的黃金三角",
        en: "Grab attention with a Hook, build trust through a Story, and convert with an irresistible Offer"
      },
      bestForFields: ["social", "marketing", "deep_content"],
      difficulty: "⭐⭐ 進階實戰",
      pacing: "故事帶入・自然轉換",
      summary: {
        zh: "為什麼有些業配或推廣文讓人反感，有些卻讓人邊看邊點頭買單？關鍵在於中間用「真實故事（頓悟時刻 Epiphany Bridge）」取代生硬說教，讓讀者在故事中自己得出結論，最後順理成章接受你的提議（Offer）。",
        en: "Replace hard selling with an 'Epiphany Bridge' story so the audience experiences your realization firsthand before seeing your Offer."
      },
      steps: [
        {
          key: "HOOK",
          label: { zh: "Hook — 黃金鉤子（打斷滑動、引發好奇）", en: "Hook — Pattern Interrupt & Curiosity Gap" },
          ratio: "15%",
          purpose: { zh: "用一句反常理的結果或懸念，吸引目標受眾停下來。", en: "Open a curiosity loop with a surprising result or relatable conflict." },
          template: "我從沒想過，放棄了大家都在用的「標準做法」後，我們在【{topic}】的表現竟然在一個月內翻了三倍——這一切都始於那天我徹底搞砸的一次經驗。",
          checklist: ["是否打開了一個讓讀者「不往下看會心癢」的好奇缺口？"]
        },
        {
          key: "STORY",
          label: { zh: "Story — 頓悟之橋故事（掙扎 → 發現 → 轉變）", en: "Story — The Epiphany Bridge" },
          ratio: "60%",
          purpose: { zh: "講述你（或客戶）如何曾經深陷【痛點】，偶然發現新思維並獲得突破的過程。", en: "Share the struggle, the 'aha!' moment of discovery, and the resulting transformation." },
          template: "幾個月前，我和大多數【{audience}】一樣，每天為了【{topic}】焦頭爛額，卻還是逃不過【{pain}】。\n直到有一次，我重新拆解了上百個成功案例，突然意識到一個盲點：我們一直把力氣花在錯的地方！\n當我試著把流程改成＿＿＿＿＿＿後，神奇的事情發生了：原本卡關的地方瞬間順暢，連身邊的夥伴都問我是怎麼做到的。",
          checklist: ["故事中是否有一個清晰的「頓悟時刻（Aha Moment）」？"]
        },
        {
          key: "OFFER",
          label: { zh: "Offer — 高價值提議與行動邀請", en: "Offer — High-Value Takeaway / CTA" },
          ratio: "25%",
          purpose: { zh: "將故事中的解法包裝成讀者現在就能帶走的價值（免費資源、訂閱或產品）。", en: "Present your resource, newsletter, or product as the shortcut to the same transformation." },
          template: "為了幫同樣身為【{audience}】的你省下我走過的冤枉路，我把這套解決【{pain}】的【{topic}】完整SOP濃縮成了一份實戰模板。\n只要在下方留言／點擊連結，就能免費領取並直接套用在你的下一個專案中！",
          checklist: ["Offer 是否讓讀者覺得「獲得的價值遠大於付出的行動成本」？"]
        }
      ],
      pitfalls: {
        zh: "常見錯誤：故事只顧著炫耀自己多厲害，卻沒有寫出脆弱面與真實的【痛點】，導致讀者無法產生共情。",
        en: "Bragging in the Story instead of showing vulnerability and the relatable struggle before the epiphany."
      }
    },

    // ==================== 敘事與故事張力 (Narrative & Storytelling) ====================
    {
      id: "star",
      category: "narrative",
      code: "STAR",
      name: { zh: "STAR 實戰復盤與案例故事法", en: "STAR Method (Situation-Task-Action-Result)" },
      tagline: {
        zh: "作品集案例、面試履歷、專案復盤文與客戶成功故事的最強結構",
        en: "The gold standard for case studies, project retrospectives, and impact storytelling"
      },
      bestForFields: ["business", "social", "deep_content"],
      difficulty: "⭐ 入門必備",
      pacing: "實事求是・數據說話",
      summary: {
        zh: "將抽象的經驗轉化為極具說服力的實戰故事：交代具挑戰性的背景（Situation）、明確定義目標與任務（Task）、拆解你採取的關鍵行動與決策（Action），最後用具體的量化成果收尾（Result）。",
        en: "Turn vague experience into undeniable proof: Context (Situation), Goal (Task), Specific Moves (Action), and Quantifiable Impact (Result)."
      },
      steps: [
        {
          key: "S",
          label: { zh: "S — Situation（挑戰背景與限制條件）", en: "S — Situation (Context & Constraints)" },
          ratio: "15%",
          purpose: { zh: "交代當時面臨的困難處境與資源限制，烘托後續成果的含金量。", en: "Set the stage with the specific challenge, stakes, and resource constraints." },
          template: "當時在推進【{topic}】專案時，我們面臨一個棘手的局面：不僅時間緊迫、資源有限，更直接撞上了【{pain}】這個長期未解的痛點。",
          checklist: ["是否具體說明了當時的「難度與限制」？"]
        },
        {
          key: "T",
          label: { zh: "T — Task（核心任務與成功指標）", en: "T — Task (Objective & Target KPI)" },
          ratio: "15%",
          purpose: { zh: "明確定義你在其中背負的具體目標是什麼。", en: "Define the exact mission and measurable definition of success." },
          template: "為了破局，我的核心任務是在＿＿週內，為【{audience}】重新打造一套可規模化的【{topic}】機制，並將【{pain}】造成的損耗降低至＿＿%以下。",
          checklist: ["任務目標是否具體、可衡量？"]
        },
        {
          key: "A",
          label: { zh: "A — Action（關鍵決策與執行三部曲）", en: "A — Action (Strategic Decisions & Execution)" },
          ratio: "45%",
          purpose: { zh: "這是全文核心！寫出「你做了什麼別人沒想到的關鍵決策」而非流水帳。", en: "Highlight your strategic choices and specific execution steps (avoid generic fluff)." },
          template: "面對這個挑戰，我沒有採取傳統硬幹的方式，而是執行了三個關鍵行動：\n1. 診斷真因：透過數據與訪談，發現【{pain}】的真正瓶頸在於＿＿＿＿＿＿。\n2. 策略重構：針對【{topic}】設計了＿＿＿＿＿＿機制，優先解決最高頻的卡點。\n3. 快速迭代：建立小規模測試迴路，根據【{audience}】的即時回饋完成優化。",
          checklist: ["是否凸顯了你的「決策思維（為什麼這樣做）」，而不只是苦勞？"]
        },
        {
          key: "R",
          label: { zh: "R — Result（量化成果與可複用洞見）", en: "R — Result (Quantifiable Impact & Learnings)" },
          ratio: "25%",
          purpose: { zh: "給出硬核數據成果，並提煉出讀者在自己領域也能借鏡的啟發。", en: "Present hard metrics and distill a transferable lesson for the reader." },
          template: "最終結果：這套方案不僅如期上線，更讓【{topic}】的核心指標提升了＿＿%，徹底解決了【{pain}】。\n這次復盤帶給我最大的啟發是：＿＿＿＿＿＿。",
          checklist: ["是否有具體的「前後對比數據」加上「質性收穫」？"]
        }
      ],
      pitfalls: {
        zh: "常見錯誤：S 和 T 寫太長（佔了一半篇幅），到了最重要的 A（行動）卻只寫「我們很努力溝通協調」這種空話。",
        en: "Spending half the text on Situation/Task and leaving the Action vague ('we worked hard and communicated')."
      }
    },

    {
      id: "soar_interview",
      category: "narrative",
      code: "SOAR+L",
      name: { zh: "SOAR+L 高階行為面試逆轉法（壓力題／領導力專用）", en: "SOAR+L Executive Behavioral Interview Framework" },
      tagline: {
        zh: "比傳統 STAR 更強調「逆境衝突權衡 (Obstacle)」與「遷移至新職位的商業價值 (Learning)」",
        en: "Upgrades STAR with explicit Obstacle/Trade-offs and Transferable Learning for senior roles"
      },
      bestForFields: ["business"],
      difficulty: "⭐⭐ 進階實戰",
      pacing: "破題俐落・凸顯決策力",
      summary: {
        zh: "面試高階職位（PM、主管、策略、資深工程師）時，面試官不只要聽你做過什麼，更想看你在「資源衝突與逆境（Obstacle）」下如何做權衡決策（Trade-off），以及這段經驗能為新公司帶來什麼可複製的價值（Learning）。",
        en: "Senior interviewers probe for judgment under pressure. Frame Situation, highlight the Obstacle/Conflict, detail your decisive Action, quantify Results, and bridge to Transferable Learning."
      },
      steps: [
        {
          key: "S",
          label: { zh: "S — Situation（一句話破題結論 ＋ 商業背景）", en: "S — Situation & Headline Answer" },
          ratio: "15%",
          purpose: { zh: "前 15 秒先給一句話結論，並交代當時專案的商業背景與高風險目標。", en: "Open with a 1-sentence headline takeaway, then set the business context and stakes." },
          template: "【破題與背景】關於【{topic}】，我最核心的實戰經驗是透過「數據對齊與優先級重構」來化解危機。\n當時我們負責向【{audience}】交付核心專案，目標是在一季內達成關鍵商業指標。",
          checklist: ["是否在第一句話就先給出你的核心解題亮點？"]
        },
        {
          key: "O",
          label: { zh: "O — Obstacle（核心逆境、跨部門衝突與兩難限制）", en: "O — Obstacle (Conflict, Bottleneck & Trade-offs)" },
          ratio: "20%",
          purpose: { zh: "具體點出當時最棘手的阻礙（如：資源被砍、跨部門利益衝突、時間緊迫）。", en: "Clearly state the toughest obstacle: conflicting stakeholder incentives, tight deadlines, or ambiguity." },
          template: "【關鍵逆境】然而專案推進到一半時，我們遭遇了嚴重的【{pain}】——不僅A部門與B部門對優先順序看法分歧，既有資源更不足以同時支撐兩邊的需求，專案面臨延宕風險。",
          checklist: ["是否真實呈現了「兩難權衡（Trade-off）」，而非微不足道的小問題？"]
        },
        {
          key: "A",
          label: { zh: "A — Action（個人主導的 3 步破局決策，強調「我」）", en: "A — Action (Your 3 Strategic Moves — Use 'I')" },
          ratio: "35%",
          purpose: { zh: "用「我（I）」而非模糊的「我們（We）」，拆解你如何定義判準、說服利害關係人並落地執行。", en: "Use 'I' to detail how you established decision criteria, aligned stakeholders, and executed." },
          template: "【我的關鍵行動】為了打破僵局，我主導了三個關鍵行動：\n1. 建立共同決策判準：我拉出歷史數據，向團隊證明【{pain}】是影響轉換率的最大漏斗瓶頸。\n2. 提出最小可行折衷案 (MVP)：我重新取捨範疇，先砍掉非核心功能，確保在期限內優先解決【{audience}】最痛的環節。\n3. 建立跨部門同步機制：我設計了每週 15 分鐘的風險檢核表，讓各方資訊透明對齊。",
          checklist: ["是否清楚交代「我做了什麼決策」與「為什麼這樣取捨」？"]
        },
        {
          key: "R_L",
          label: { zh: "R+L — Result & Learning（量化成果 ＋ 對貴公司新職位的遷移價值）", en: "R+L — Quantified Result & Value to Target Role" },
          ratio: "30%",
          purpose: { zh: "給出硬數據成果，最後一句務必主動連回「這套能力如何幫貴公司解決問題」！", en: "Deliver hard metrics, then explicitly connect this methodology to the interviewer's team needs." },
          template: "【成果與遷移價值】最終，我們不僅準時上線，更讓【{topic}】的核心指標提升了＿＿%，同時將跨部門重工率降低了＿＿%。\n這段經驗讓我建立了成熟的危機拆解SOP；若有機會加入貴團隊，我也能在第一時間將這套方法應用於解決貴部門目前關注的【{pain}】挑戰。",
          checklist: ["結尾最後一句是否成功「勾回面試官正在招募的這個職位」？"]
        }
      ],
      pitfalls: {
        zh: "常見錯誤：全程都在講「我們團隊做了什麼」，讓面試官聽不出「你個人的獨特貢獻」；或是抱怨前東家與同事，展現負面情緒。",
        en: "Saying 'We' the entire time so the interviewer can't tell your personal contribution, or badmouthing past colleagues."
      }
    },

    {
      id: "mece_case",
      category: "logic",
      code: "CASE-4",
      name: { zh: "CASE-4 商業個案面試與策略問答拆解法 (Case Interview)", en: "CASE-4 Business Case & Strategy Interview Framework" },
      tagline: {
        zh: "管顧、PM、商業分析師 (BA) 與高階策略面試必備的「釐清 → 拆解 → 假說 → 建議」四步法",
        en: "Clarify, Structure (MECE), Hypothesize & Analyze, and Recommend with Risk Mitigation"
      },
      bestForFields: ["business"],
      difficulty: "⭐⭐⭐ 高階思維",
      pacing: "結構嚴密・顧問思維",
      summary: {
        zh: "當面試官拋出開放式商業題（如：「我們產品留存率下降 15% 怎麼辦？」、「該不該進入某新市場？」），切忌拿到題目就亂猜答案！標準滿分流程是：1. 先釐清邊界與目標 → 2. 宣告 MECE 拆解維度 → 3. 提出核心假說與關鍵指標 → 4. 給出短中長期建議與風險配套。",
        en: "Never jump straight to guessing! Follow the top-tier consulting & PM flow: 1. Clarify scope & metric -> 2. Lay out MECE buckets -> 3. Drill down with hypothesis -> 4. Synthesize recommendation + risks."
      },
      steps: [
        {
          key: "CLARIFY",
          label: { zh: "1. Clarify — 釐清問題邊界與北極星指標", en: "1. Clarify — Define Scope & North Star Metric" },
          ratio: "15%",
          purpose: { zh: "展現你不盲目衝動，先向面試官確認商業目標、時間範圍與目標客群。", en: "Show executive composure by defining the objective, timeframe, and target segment first." },
          template: "【1. 釐清邊界與目標】在深入拆解【{topic}】之前，我想先對齊兩個前提：\n第一，我們這次解決【{pain}】最優先追求的「北極星指標（North Star Metric）」是提升營收轉換率，還是提高【{audience}】的長期留存？\n第二，時間維度上我們是希望在單一季度內見效，還是規劃年度級別的轉型？",
          checklist: ["是否展現了對商業目標與評估指標（Metric）的敏銳度？"]
        },
        {
          key: "STRUCTURE",
          label: { zh: "2. Structure — 建立 MECE 結構化拆解樹", en: "2. Structure — Declare Your MECE Analysis Buckets" },
          ratio: "30%",
          purpose: { zh: "先向面試官預告你的思考框架（如：外部市場 vs 內部產品；或獲客 → 活化 → 留存漏斗）。", en: "Signpost your mental map using 3 mutually exclusive dimensions before diving into details." },
          template: "【2. 結構化拆解框架】針對【{topic}】面臨的【{pain}】，我會從以下三個彼此獨立且完整的維度（MECE）進行診斷：\n• 維度一（使用者與需求端）：【{audience}】在核心漏斗的哪個節點流失最高？\n• 維度二（產品與營運供給端）：現有價值主張與競品相比是否存在體驗斷層？\n• 維度三（商業模式與成本效益）：解決此問題的單位經濟效益（Unit Economics / ROI）是否健康？",
          checklist: ["三個維度是否結構清晰，讓面試官一聽就知道你邏輯嚴密？"]
        },
        {
          key: "ANALYZE",
          label: { zh: "3. Analyze — 核心假說推演與關鍵數據驗證", en: "3. Analyze — Core Hypothesis & Data Drill-Down" },
          ratio: "30%",
          purpose: { zh: "主動提出你認為最可能的「核心假說（Hypothesis）」，並說明需要調閱什麼數據來驗證。", en: "State your primary hypothesis and specify what data/A-B test you would run to validate it." },
          template: "【3. 假說與數據驗證】根據產業經驗，我的核心假說是：【{pain}】有 70% 的機率出在維度一與維度二的交界處。\n為了驗證這個假說，我會優先檢視兩組數據：一是【{audience}】的首週行為轉換率，二是分群留存曲線（Cohort Analysis）。若數據證實假說成立，代表我們應將資源集中於＿＿＿＿＿＿。",
          checklist: ["是否有提出明確的「假說驅動（Hypothesis-driven）」思維？"]
        },
        {
          key: "RECOMMEND",
          label: { zh: "4. Recommend — 結論先行建議 ＋ 潛在風險與配套", en: "4. Recommend — Actionable Plan & Risk Mitigation" },
          ratio: "25%",
          purpose: { zh: "總結短期止血與長期治本方案，並主動點出「1 個潛在風險與應對措施」（面試加分神技！）。", en: "Summarize short/long-term actions and proactively address the #1 execution risk." },
          template: "【4. 總結建議與風險控管】綜合以上分析，針對【{topic}】我建議分兩階段落地：\n• 短期速贏（Quick Win, 30天內）：先透過＿＿＿＿＿＿快速緩解【{pain}】。\n• 中長期護城河（90天）：建立＿＿＿＿＿＿自動化機制。\n• 風險預警與配套：此方案最大的潛在風險在於＿＿＿＿＿＿，因此我們需同步設定防護指標（Guardrail Metric）以確保體驗不受影響。",
          checklist: ["結尾是否主動提到了「潛在風險（Risk）與防護指標（Guardrail）」？"]
        }
      ],
      pitfalls: {
        zh: "常見錯誤：一聽到題目就直接跳進細節給點子（缺乏整體結構感），或者死背生硬的波特五力/4P套用在所有題目上。",
        en: "Jumping straight into random brainstorming without a top-level structure, or forcing generic textbook frameworks onto every prompt."
      }
    },

    {
      id: "heros_journey",
      category: "narrative",
      code: "HERO",
      name: { zh: "英雄之旅濃縮版（敘事弧光法）", en: "The Hero's Journey (Condensed Narrative Arc)" },
      tagline: {
        zh: "品牌故事、人物專訪、長篇創作與深度演講的史詩級共鳴引擎",
        en: "Joseph Campbell's mythic structure adapted for brand storytelling, profiles, and fiction"
      },
      bestForFields: ["literary", "social", "marketing", "deep_content"],
      difficulty: "⭐⭐ 進階實戰",
      pacing: "跌宕起伏・蛻變成長",
      summary: {
        zh: "源自神話學家約瑟夫・坎伯。將十二階段濃縮為最具張力的五幕：平凡世界與召喚 → 跨越門檻與試煉 → 深淵危機（最大挫敗）→ 頓悟與蛻變 → 帶著禮物歸來分享給世界。",
        en: "Condense Campbell's monomyth into 5 powerful beats: Ordinary World & Call -> Crossing the Threshold -> The Ordeal (Abyss) -> Transformation -> Return with the Elixir."
      },
      steps: [
        {
          key: "CALL",
          label: { zh: "1. 召喚與啟程（打破日常的契機）", en: "1. Ordinary World & Call to Adventure" },
          ratio: "20%",
          purpose: { zh: "描繪主角原本的日常狀態，以及那個迫使他必須面對【主題/痛點】的事件。", en: "Establish the baseline world and the inciting incident that forces action." },
          template: "最初，關於【{topic}】，切入點看似平凡無奇。直到【{pain}】像一道裂縫般出現，打破了原本熟悉的秩序，迫使主角（或我們）踏上一條沒有標準答案的探索之路。",
          checklist: ["「導火線事件（Inciting Incident）」是否清楚且具命運感？"]
        },
        {
          key: "ORDEAL",
          label: { zh: "2. 試煉與至暗深淵（The Abyss）", en: "2. Trials & The Abyss (Dark Night of the Soul)" },
          ratio: "30%",
          purpose: { zh: "沒有深淵就沒有英雄。描寫舊方法徹底失效、面臨最大衝突與自我懷疑的時刻。", en: "Show the lowest point where old tools fail and the stakes are highest." },
          template: "起初嘗試了所有常規解法，卻一次次碰壁。在最艱難的時刻，【{pain}】幾乎讓人想要放棄——所有的努力看似付諸流水，甚至不得不面對最深層的恐懼與質疑。",
          checklist: ["是否寫出了真實的衝突、代價與內心掙扎？"]
        },
        {
          key: "EPIPHANY",
          label: { zh: "3. 導師點撥與火焰頓悟（Transformation）", en: "3. The Shift & Epiphany (Seizing the Sword)" },
          ratio: "25%",
          purpose: { zh: "在谷底看見盲點，完成內在視角的翻轉與能力覺醒。", en: "The pivotal realization where the protagonist sees the truth and claims a new approach." },
          template: "然而，正是在徹底歸零的那一刻，關鍵的轉折出現了：原來問題從來不在於外在的限制，而在於我們看待【{topic}】的框架。當視角轉換為＿＿＿＿＿＿，原本的阻礙瞬間變成了突破口。",
          checklist: ["轉折是否來自主角內在認知的改變，而非天降奇蹟（機械降神）？"]
        },
        {
          key: "RETURN",
          label: { zh: "4. 帶著禮物歸來（Return with the Elixir）", en: "4. Return with the Elixir (Gift to the Audience)" },
          ratio: "25%",
          purpose: { zh: "將這段歷程淬煉出的智慧或方法，化為送給讀者【受眾】的禮物。", en: "Bring the hard-won wisdom back to empower the audience/community." },
          template: "走過這段歷程後，【{topic}】不再是令人畏懼的高牆。如今我將這份從深淵中淬煉出的經驗帶回來，送給每一位正在經歷【{pain}】的【{audience}】：記住，＿＿＿＿＿＿。",
          checklist: ["結尾是否把「主角的故事」昇華為「讀者也能共感的普世價值」？"]
        }
      ],
      pitfalls: {
        zh: "常見錯誤：把自己寫成完美無缺的英雄，注意在商業或社群寫作中，真正的英雄應該是「讀者/客戶」，而你是提供寶劍的「導師（尤達大師）」。",
        en: "Making yourself the flawless hero instead of positioning the reader/customer as the Hero and yourself as the Guide."
      }
    },

    {
      id: "three_act",
      category: "narrative",
      code: "3-ACT",
      name: { zh: "好萊塢三幕劇結構（鋪陳・衝突・解決）", en: "Three-Act Dramatic Structure" },
      tagline: {
        zh: "小說、劇本、短影音故事與非虛構人物報導的經典戲劇骨架",
        en: "Setup, Confrontation, and Resolution — the backbone of compelling dramatic tension"
      },
      bestForFields: ["literary", "social", "deep_content"],
      difficulty: "⭐⭐ 進階實戰",
      pacing: "戲劇張力・節奏分明",
      summary: {
        zh: "將敘事分為三幕：第一幕建立人物、場景與觸發事件（25%）；第二幕讓衝突不斷升級，並在「中點（Midpoint）」發生重大反轉（50%）；第三幕迎來高潮對決與餘韻收束（25%）。",
        en: "Act I sets up character and inciting incident (25%); Act II escalates conflict through a Midpoint reversal (50%); Act III delivers the climax and resolution (25%)."
      },
      steps: [
        {
          key: "ACT1",
          label: { zh: "第一幕 — 場景建立與觸發事件 (Setup)", en: "Act I — Setup & Inciting Incident" },
          ratio: "25%",
          purpose: { zh: "用具體細節建立時空氛圍，讓核心衝突登場，使主角無法再退回原點。", en: "Ground the reader in sensory reality and trigger the point of no return." },
          template: "【第一幕】場景從一個具體的日常細節展開。在【{topic}】的世界裡，一切看似平靜，直到【{pain}】驟然降臨——主角被迫做出一個無法回頭的選擇。",
          checklist: ["是否在前四分之一就清楚交代了主角「想要什麼」與「害怕失去什麼」？"]
        },
        {
          key: "ACT2",
          label: { zh: "第二幕 — 衝突升級與中點反轉 (Confrontation)", en: "Act II — Rising Action & Midpoint Reversal" },
          ratio: "50%",
          purpose: { zh: "阻礙一波比一波強烈，表面解法失敗，迫使主角直面核心真相。", en: "Raise the stakes progressively; include a midpoint twist that changes the game." },
          template: "【第二幕】隨著行動展開，阻礙不斷升級。原本以為只要解決表面的【{pain}】就能過關，卻在故事中點發現更深層的矛盾：＿＿＿＿＿＿。退路已被切斷，壓力來到臨界點。",
          checklist: ["第二幕是否有避免平鋪直敘，設計了至少一次「預期落空」的反轉？"]
        },
        {
          key: "ACT3",
          label: { zh: "第三幕 — 高潮決斷與餘韻新平衡 (Resolution)", en: "Act III — Climax & New Equilibrium" },
          ratio: "25%",
          purpose: { zh: "主角做出最艱難的關鍵抉擇（高潮），並展現風暴過後的改變與餘韻。", en: "Deliver the climactic choice under maximum pressure, followed by a resonant aftermath." },
          template: "【第三幕】在最終的決斷時刻，面對【{topic}】的核心考驗，主角放下了舊有的執念，選擇了＿＿＿＿＿＿。塵埃落定後，世界看似沒有改變，但【{audience}】眼中的光景已截然不同。",
          checklist: ["高潮是否由主角自己的選擇促成？結尾是否留有耐人尋味的餘韻？"]
        }
      ],
      pitfalls: {
        zh: "常見錯誤：「第二幕塌陷」——開頭很吸引人，但中段缺乏衝突升級與反轉，變成單調的流水帳。",
        en: "'Second-Act Sag' — a strong opening followed by repetitive, flat middle events without escalating stakes."
      }
    },

    {
      id: "conflict_twist",
      category: "narrative",
      code: "TWist",
      name: { zh: "反直覺認知衝突法（迷思破除結構）", en: "Counter-Intuitive Myth-Buster & Twist" },
      tagline: {
        zh: "社群高轉發觀點文、科普文章與深度專欄最吸睛的破題利器",
        en: "Challenge conventional wisdom, expose why it fails, and reveal the counter-intuitive truth"
      },
      bestForFields: ["social", "deep_content", "academic", "literary"],
      difficulty: "⭐⭐ 進階實戰",
      pacing: "打破常識・認知刷新",
      summary: {
        zh: "人類大腦對「符合預期的資訊」會自動忽略，對「違反直覺卻又合乎邏輯的真相」則會產生強烈的多巴胺與分享慾。先擺出大眾深信不疑的迷思，接著用鐵證戳破它，最後給出反直覺的底層真相。",
        en: "The brain ignores predictable advice but craves counter-intuitive truths. State the common belief, shatter it with evidence, and reframe the mental model."
      },
      steps: [
        {
          key: "MYTH",
          label: { zh: "1. 普遍迷思（大家都這樣以為...）", en: "1. The Conventional Myth (What Everyone Believes)" },
          ratio: "20%",
          purpose: { zh: "先說出 90% 的人在【主題】上深信不疑的「標準答案」。", en: "Articulate the mainstream belief or common advice about the topic." },
          template: "談到【{topic}】，幾乎所有教科書和過來人都會告訴【{audience}】同一個標準答案：「你必須＿＿＿＿＿＿。」我們也一直對此深信不疑。",
          checklist: ["這個迷思是否是目標受眾真的經常聽見或正在執行的做法？"]
        },
        {
          key: "SHATTER",
          label: { zh: "2. 認知碰撞（但殘酷的真相卻相反！）", en: "2. The Cognitive Collision (Why the Myth Fails)" },
          ratio: "30%",
          purpose: { zh: "直接拋出反證：為什麼照著標準答案做，反而會掉進【痛點】？", en: "Present the paradox: why following standard advice actually causes the pain point." },
          template: "但殘酷的現實是：正是這個「看似正確的常識」，直接導致了【{pain}】！數據與實務經驗顯示，越是死守這條規則的人，在【{topic}】上反而越容易陷入瓶頸。為什麼？",
          checklist: ["轉折是否乾脆俐落，立刻勾起讀者「為什麼會這樣？」的好奇心？"]
        },
        {
          key: "TRUTH",
          label: { zh: "3. 底層真相與新思維模型 (The Reframe)", en: "3. The Counter-Intuitive Truth & New Model" },
          ratio: "50%",
          purpose: { zh: "揭開背後的底層機制，並提供一套令人拍案叫絕的全新做法。", en: "Reveal the hidden mechanism and provide a new, superior mental model." },
          template: "因為【{topic}】真正的底層邏輯其實是「＿＿＿＿＿＿」。\n真正頂尖的【{audience}】早就不再做 A，而是改採這 3 個反直覺策略：\n1. 逆向思考：與其修補【{pain}】，不如直接改變＿＿＿＿＿＿\n2. 減法槓桿：砍掉 80% 的表面功夫，只守住＿＿＿＿＿＿\n3. 觀點重塑：記住這句金句——「＿＿＿＿＿＿」。",
          checklist: ["新的觀點是否「聽起來反直覺，但仔細一想卻極度合理」？"]
        }
      ],
      pitfalls: {
        zh: "常見錯誤：為了唱反調而唱反調（標題黨），結果第三段拿不出站得住腳的邏輯與證據，反而失去讀者信任。",
        en: "Being contrarian just for clickbait without backing up the twist with solid logic and evidence."
      }
    },

    // ==================== 知識管理與學術架構 (Knowledge & Academic) ====================
    {
      id: "imrad",
      category: "knowledge",
      code: "IMRaD",
      name: { zh: "IMRaD 國際學術論文與研究標準架構", en: "IMRaD Scientific & Research Structure" },
      tagline: {
        zh: "期刊論文、研究報告、白皮書與數據分析報告的全球通用準則",
        en: "Introduction, Methods, Results, and Discussion — the universal architecture of scientific inquiry"
      },
      bestForFields: ["academic", "deep_content", "business"],
      difficulty: "⭐⭐⭐ 高階思維",
      pacing: "嚴謹實證・沙漏結構",
      summary: {
        zh: "呈現為經典的「沙漏型（Hourglass）」結構：Introduction 由寬到窄聚焦研究問題；Methods 與 Results 高度聚焦於本實驗與數據；Discussion 再由窄到寬，探討研究限制與對整體領域的普世貢獻。",
        en: "Follows an hourglass shape: broad-to-narrow Introduction, tightly focused Methods and Results, and narrow-to-broad Discussion of implications."
      },
      steps: [
        {
          key: "I",
          label: { zh: "I — Introduction（研究背景、文獻缺口與假說）", en: "I — Introduction (Context, Gap & Hypothesis)" },
          ratio: "25%",
          purpose: { zh: "交代為什麼這個問題重要（已知）、前人沒解決什麼（未知 Gap）、本研究要做什麼。", en: "Move from known domain context to the specific knowledge gap and research objective." },
          template: "【緒論 Introduction】\n1. 領域背景：【{topic}】對於【{audience}】具有關鍵影響。\n2. 研究缺口 (Research Gap)：然而，現有文獻與方法在面對【{pain}】時，仍缺乏系統性的機制解析。\n3. 研究目的：本研究旨在提出並驗證＿＿＿＿＿＿，以填補上述缺口。",
          checklist: ["是否明確指出了「過去研究還沒解決的缺口（Gap）」？"]
        },
        {
          key: "M",
          label: { zh: "M — Methods（研究設計、實驗材料與分析方法）", en: "M — Methods (Study Design & Reproducibility)" },
          ratio: "25%",
          purpose: { zh: "清楚交代研究設計、樣本標準、工具與統計方法，確保同行可重現（Reproducibility）。", en: "Detail experimental design, dataset/subjects, and analytical pipeline for reproducibility." },
          template: "【方法 Methods】\n為驗證核心假說，本研究採行以下嚴謹設計：\n• 樣本與資料來源：針對【{audience}】相關之【{topic}】數據進行採集（納入/排除標準：＿＿＿＿）。\n• 實驗與評估指標：以＿＿＿＿＿＿作為主要評估指標（Primary Endpoint），控制【{pain}】相關干擾變數。",
          checklist: ["描述是否足夠精確，讓其他研究者能照著重現實驗？"]
        },
        {
          key: "R",
          label: { zh: "R — Results（客觀實驗數據與核心發現）", en: "R — Results (Objective Findings & Data)" },
          ratio: "25%",
          purpose: { zh: "只呈現客觀數據、圖表趨勢與統計顯著性（此處不做主觀延伸推論）。", en: "Present objective data, statistical significance, and key trends without over-interpreting." },
          template: "【結果 Results】\n實驗分析顯示三項核心發現：\n1. 主效應表現：導入新方法後，【{topic}】關鍵指標顯著提升（p < 0.01，較基線改善＿＿%）。\n2. 瓶頸突破：在【{pain}】高風險情境下，本模型仍維持高度穩定性。\n3. 次群體分析：對於【{audience}】特別展現出＿＿＿＿＿＿之趨勢。",
          checklist: ["是否聚焦於客觀數據與圖表對應，沒有把 Discussion 混進來？"]
        },
        {
          key: "D",
          label: { zh: "D — Discussion（機制探討、研究限制與未來展望）", en: "D — Discussion (Interpretation, Limitations & Impact)" },
          ratio: "25%",
          purpose: { zh: "解釋數據背後的意義、與前人文獻對照、坦誠研究限制（Limitations）並總結貢獻。", en: "Interpret findings against prior work, acknowledge limitations honestly, and state broader impact." },
          template: "【討論與結論 Discussion】\n本研究證實了＿＿＿＿＿＿在解決【{pain}】上的關鍵作用。與過往文獻相比，我們的發現突破了＿＿＿＿＿＿的限制。\n• 研究限制 (Limitations)：本研究目前聚焦於特定範圍，未來可進一步擴展至＿＿＿＿＿＿。\n• 實務與學術貢獻：本研究為【{topic}】提供了全新的理論基礎與實踐藍圖。",
          checklist: ["是否主動且誠懇地討論了研究限制（審查委員最看重的一環）？"]
        }
      ],
      pitfalls: {
        zh: "常見錯誤：在 Results 段加入過多主觀評論，或在 Discussion 段只是把 Results 的數據重抄一遍，沒有做深度機制探討。",
        en: "Mixing subjective interpretation into Results, or merely repeating Results in the Discussion without deeper synthesis."
      }
    },

    {
      id: "feynman",
      category: "knowledge",
      code: "FEYNMAN",
      name: { zh: "費曼學習轉譯法（降維打擊科普法）", en: "The Feynman Technique (Analogy & De-jargoning)" },
      tagline: {
        zh: "把最硬核的專業知識，寫成連外行人都能秒懂且拍案叫絕的好文",
        en: "Explain complex concepts simply using everyday analogies, zero jargon, and first principles"
      },
      bestForFields: ["academic", "deep_content", "social"],
      difficulty: "⭐⭐ 進階實戰",
      pacing: "深入淺出・比喻精妙",
      summary: {
        zh: "諾貝爾物理學獎得主理查・費曼的核心心法：「如果你不能向一個 12 歲的孩子解釋清楚一件事，代表你自己還沒真正搞懂。」透過「去術語化 → 生活類比 → 核心機制圖解 → 重新連結實務」四步完成完美轉譯。",
        en: "Strip away jargon, anchor abstract concepts to familiar everyday analogies, expose the core mechanism, and reconnect to real-world mastery."
      },
      steps: [
        {
          key: "PLAIN",
          label: { zh: "1. 一句話白話定義（徹底拿掉行話）", en: "1. Plain-Language Definition (Zero Jargon)" },
          ratio: "20%",
          purpose: { zh: "禁止使用縮寫或術語，用日常詞彙直接告訴讀者【主題】本質上是什麼。", en: "Define the core concept using everyday words a 12-year-old immediately grasps." },
          template: "每次聽到專家談論【{topic}】，總覺得滿頭霧水嗎？其實拿掉那些複雜的專有名詞，它的本質就只是一件事：「如何用更聰明的規則，幫【{audience}】解決【{pain}】。」",
          checklist: ["這段話裡是否完全沒有未經解釋的英文縮寫或學術黑話？"]
        },
        {
          key: "ANALOGY",
          label: { zh: "2. 精準生活類比（用已知解釋未知）", en: "2. The Everyday Analogy (Bridge Known to Unknown)" },
          ratio: "30%",
          purpose: { zh: "借用廚房做菜、交通號誌、整理房間等人人都有經驗的事物來比喻核心機制。", en: "Map the unfamiliar mechanism onto a universal daily experience (cooking, traffic, library)." },
          template: "你可以把【{topic}】想像成「一間高效率餐廳的廚房動線」：\n傳統做法之所以會遇到【{pain}】，就像所有廚師都擠在同一個流理台切菜；而【{topic}】的核心技術，就是先幫食材做好分類備料（＿＿＿＿＿＿），讓出餐速度瞬間翻倍。",
          checklist: ["這個比喻是否貼切且畫面感十足，不會造成誤導？"]
        },
        {
          key: "MECHANISM",
          label: { zh: "3. 拆解底層運作原理（First Principles）", en: "3. Core Mechanism Breakdown" },
          ratio: "30%",
          purpose: { zh: "有了比喻當鷹架後，順勢帶出真正的 2–3 個專業核心原理，讀者就能秒懂。", en: "Now that the mental scaffolding is up, introduce the 2–3 real technical principles." },
          template: "有了這個畫面，我們再來看【{topic}】背後真正的三個運作關鍵就非常清楚了：\n• 第一關（輸入過濾）：對應廚房的備料，負責解決＿＿＿＿＿＿。\n• 第二關（核心轉換）：透過＿＿＿＿＿＿機制，直接繞過【{pain}】。\n• 第三關（輸出校準）：確保成果完全符合【{audience}】的需求。",
          checklist: ["專業原理是否有跟上一段的生活比喻精準扣合？"]
        },
        {
          key: "APPLY",
          label: { zh: "4. 實戰價值與記憶錨點", en: "4. Real-World Application & Takeaway" },
          ratio: "20%",
          purpose: { zh: "告訴讀者學會這個概念後，明天可以怎麼用在自己的決策或生活中。", en: "Give the reader a memorable mental model they can apply immediately." },
          template: "所以，下次當你再遇到【{pain}】時，別被複雜的表象嚇到了。只要在心裡問自己一句：「現在廚房的哪個環節塞車了？」就能立刻用【{topic}】的思維找到解答！",
          checklist: ["讀者看完後，能不能用自己的話轉述給朋友聽？"]
        }
      ],
      pitfalls: {
        zh: "常見錯誤：為了炫技而堆砌專有名詞，或者比喻太過牽強（比喻本身比原概念還難懂）。",
        en: "Hiding behind jargon to sound smart, or choosing an analogy that is more confusing than the original concept."
      }
    },

    {
      id: "zettelkasten",
      category: "knowledge",
      code: "ZETTEL",
      name: { zh: "卡片盒跨界串聯法 (Zettelkasten Synthesis)", en: "Zettelkasten Cross-Domain Synthesis" },
      tagline: {
        zh: "將兩個看似毫無關聯的領域碰撞出驚人原創洞見的知識型寫作法",
        en: "Connect two seemingly unrelated concepts to spark original, non-obvious insights"
      },
      bestForFields: ["deep_content", "academic", "social", "literary"],
      difficulty: "⭐⭐⭐ 高階思維",
      pacing: "跨界碰撞・原創洞見",
      summary: {
        zh: "社會學大師盧曼（Niklas Luhmann）一生產出 70 本專著的秘密：不按傳統學科分類，而是尋找不同領域卡片之間的「結構相似性（Isomorphism）」。將領域 A 的定理移植到領域 B，瞬間產出令人驚豔的原創文章。",
        en: "Luhmann's secret to 70 books: place two distant notes side by side, uncover their hidden structural isomorphism, and synthesize a brand-new mental model."
      },
      steps: [
        {
          key: "NODE_A",
          label: { zh: "1. 卡片 A — 引入跨領域的奇妙現象或定律", en: "1. Note A — The Unexpected Cross-Domain Concept" },
          ratio: "25%",
          purpose: { zh: "從生態學、建築學、歷史或物理學中，引入一個有趣的現象作為引子。", en: "Open with a fascinating phenomenon from biology, physics, history, or art." },
          template: "在生態學（或另一個跨界領域）中有一個著名的現象：當系統過度追求單一效率時，反而會喪失面對環境劇變的韌性。剛讀到這個概念時，我腦中立刻浮現了【{audience}】在【{topic}】上最常遇到的困境。",
          checklist: ["卡片 A 的引入是否足夠新鮮，讓人好奇它跟主題有什麼關係？"]
        },
        {
          key: "BRIDGE",
          label: { zh: "2. 卡片 B 與結構映射（驚人的相似性）", en: "2. Note B & Structural Mapping (The Connection)" },
          ratio: "30%",
          purpose: { zh: "將卡片 A 的底層結構，精準映射到我們今天要探討的【主題/痛點】上。", en: "Reveal the hidden structural parallel between Note A and your core topic/pain point." },
          template: "仔細觀察就會發現，這與我們在【{topic}】中遭遇的【{pain}】幾乎是同一個底層結構！我們總是試圖用線性的方式堆疊產出，卻忽略了系統內部的隱性摩擦。",
          checklist: ["兩個領域之間的連結是否指向「同一個底層規律」，而非牽強附會？"]
        },
        {
          key: "SYNTHESIS",
          label: { zh: "3. 卡片 C — 碰撞出的原創方法論 (Emergence)", en: "3. Note C — Emergent Original Framework" },
          ratio: "45%",
          purpose: { zh: "結合兩者的智慧，提煉出一套專屬於你的原創解法與觀點。", en: "Synthesize a novel, actionable framework born from the collision of A and B." },
          template: "當我們把這個跨界視角帶回【{topic}】，就能推導出三個跳脫傳統框架的全新解法：\n1. 引入「冗餘緩衝」：為【{audience}】保留 20% 的探索空間，從根源化解【{pain}】。\n2. 建立非線性連結：不再單點突破，而是串聯＿＿＿＿＿＿。\n3. 跨界思維升級：真正的破局，往往發生在你走出既有專業同溫層的那一刻。",
          checklist: ["這套結論是否具有高度原創性，讓人讀完有「腦洞大開」的爽感？"]
        }
      ],
      pitfalls: {
        zh: "常見錯誤：跨界故事講得太長，直到文章後半段才勉強扯回主題，導致前半段讀者流失。",
        en: "Taking too long to connect the cross-domain story back to the reader's core topic."
      }
    },

    // ==================== 文學美學與創作 (Literary Craft) ====================
    {
      id: "kishotenketsu",
      category: "literary_craft",
      code: "起承轉合",
      name: { zh: "東方美學「起承轉合」四段論 (Kishōtenketsu)", en: "Kishōtenketsu (East Asian 4-Act Poetic Structure)" },
      tagline: {
        zh: "散文、隨筆、極短篇小說與意境型內容最優雅的結構美學",
        en: "Introduction, Development, Surprising Turn (without violent conflict), and Harmonious Reconciliation"
      },
      bestForFields: ["literary", "deep_content", "social"],
      difficulty: "⭐⭐ 進階實戰",
      pacing: "意境流轉・柳暗花明",
      summary: {
        zh: "不同於西方三幕劇依賴「正反對抗衝突」，東方經典的「起承轉合」透過視角的巧妙挪移來創造驚喜：起（落筆定調）→ 承（順勢鋪展細節）→ 轉（跳開原本脈絡，引入意想不到的對照或回憶）→ 合（將「轉」與「起承」收束在一起，餘音繞樑）。",
        en: "Unlike Western conflict-driven plots, Kishōtenketsu creates resonance through perspective shift: Establish (Ki), Develop (Shō), Unexpected Juxtaposition (Ten), and Unified Resonance (Ketsu)."
      },
      steps: [
        {
          key: "KI",
          label: { zh: "起 (Ki) — 落筆定調・具象切入", en: "Ki (起) — Establish Scene & Tone" },
          ratio: "20%",
          purpose: { zh: "從一個具體的畫面、器物、季節感或日常片段輕巧落筆，不急著說理。", en: "Open with a concrete sensory image, object, or quiet moment that sets the mood." },
          template: "【起】初次接觸到【{topic}】時，往往是在一個極其尋常的時刻。沒有驚心動魄的預兆，只有桌面上一點微涼的光線，以及【{audience}】心底那抹尚未說出口的、關於【{pain}】的隱微感受。",
          checklist: ["開頭是否有具體的「畫面或感官細節」，而非抽象的議論？"]
        },
        {
          key: "SHO",
          label: { zh: "承 (Shō) — 順勢鋪展・深化細節", en: "Shō (承) — Develop & Deepen Nuance" },
          ratio: "25%",
          purpose: { zh: "順著「起」的脈絡往前推進，補充人物的習慣、時間的流逝或處境的肌理。", en: "Expand naturally on the opening, adding texture, memory, and emotional weight." },
          template: "【承】日子一天天過去，我們習慣了在【{topic}】的軌跡裡反覆練習。有時以為已經掌握了分寸，有時卻又在夜深人靜時，被【{pain}】帶來的無力感輕輕絆住腳步。",
          checklist: ["是否自然承接了第一段的情緒與節奏？"]
        },
        {
          key: "TEN",
          label: { zh: "轉 (Ten) — 視角跳接・柳暗花明", en: "Ten (轉) — The Poetic Turn / Juxtaposition" },
          ratio: "30%",
          purpose: { zh: "全文靈魂！暫時移開鏡頭，插入一段看似無關的往事、自然景物或他人的片段，形成奇妙映照。", en: "Shift the camera to a seemingly unrelated memory, observation, or motif that reframes everything." },
          template: "【轉】這讓我想起多年前在異地見過的一位老匠人。他從不急著修補裂痕，反而順著木頭原本的紋理緩慢打磨。他說：「所有的卡頓，都是材料在告訴你它真正的方向。」風吹過窗櫺，遠處傳來模糊的聲響。",
          checklist: ["「轉」是否成功拉開了空間或時間的距離，帶來呼吸感與新視角？"]
        },
        {
          key: "KETSU",
          label: { zh: "合 (Ketsu) — 萬流歸宗・留白餘韻", en: "Ketsu (合) — Harmonious Convergence & Lingering Echo" },
          ratio: "25%",
          purpose: { zh: "將「轉」的體悟輕輕放回「起、承」的處境中，點到為止，把感動留給讀者自己發酵。", en: "Weave the 'Turn' back into the opening motif, ending with quiet resonance and subtext." },
          template: "【合】再低頭看眼前的【{topic}】，原本視為阻礙的【{pain}】，似乎也成了紋理的一部分。光線依然安靜地落在桌角，而我們終於學會了不再與風對抗。",
          checklist: ["結尾是否呼應了開頭的意象，並且「忍住不說破大道理」？"]
        }
      ],
      pitfalls: {
        zh: "常見錯誤：在「合」的最後一段突然變成作文結尾（「因此我們應該努力向上...」），一秒破壞前面營造的所有文學意境。",
        en: "Ruining the poetic ending by tacking on a preachy moral lesson in the final sentence."
      }
    },

    {
      id: "iceberg_sensory",
      category: "literary_craft",
      code: "SHOW-ICE",
      name: { zh: "海明威冰山理論 × 五感沉浸法 (Show, Don't Tell)", en: "Hemingway's Iceberg & Sensory Immersion" },
      tagline: {
        zh: "不要直接寫「他很悲傷」，而是寫他如何盯著涼掉的咖啡——小說與高質感敘事必備",
        en: "Keep 7/8 of emotion beneath the surface; reveal inner states through sensory details and action"
      },
      bestForFields: ["literary", "social", "deep_content"],
      difficulty: "⭐⭐⭐ 高階思維",
      pacing: "細節精雕・言外之意",
      summary: {
        zh: "海明威提出：冰山在海面上移動之所以莊嚴宏偉，是因為只有八分之一露出水面。結合文學創作最高準則「Show, Don't Tell（展示而非告知）」——把抽象的情緒形容詞全部刪掉，改用視覺、聽覺、觸覺、氣味與微小動作來乘載情感（客觀對應物 Objective Correlative）。",
        en: "Delete abstract emotion labels ('anxious', 'passionate'). Instead, anchor feelings in concrete sights, sounds, textures, and micro-actions so the reader feels the 7/8 beneath the surface."
      },
      steps: [
        {
          key: "ANCHOR",
          label: { zh: "1. 空間與感官錨定（視覺＋聽覺＋氣味）", en: "1. Sensory Grounding (Sight, Sound, Scent)" },
          ratio: "25%",
          purpose: { zh: "在前三句話內啟動讀者的至少兩種感官，將讀者瞬間拉進現場。", en: "Activate at least two physical senses in the opening lines to immerse the reader." },
          template: "空氣裡有一股久未開窗的紙張氣味，冷氣出風口發出規律而低沉的嗡鳴。桌面上那份關於【{topic}】的草稿已經改到了第七版，邊角被手指捻得微捲。",
          checklist: ["是否包含了至少兩種具體感官（光影、聲音、溫度、觸感、氣味）？"]
        },
        {
          key: "ACTION",
          label: { zh: "2. 動作與器物投射（不寫情緒詞，只寫動作）", en: "2. Micro-Actions & Objective Correlative" },
          ratio: "35%",
          purpose: { zh: "把【痛點/壓力】轉化為人物對身邊器物的具體動作與停頓。", en: "Translate internal struggle into physical interaction with objects and silence." },
          template: "他沒有直接提起【{pain}】這兩個字，只是把眼鏡摘下來，對著燈光擦拭那片其實很乾淨的鏡片，然後又戴回去。「再試一次吧。」他的聲音很平，像是在對別人說話，指尖卻在鍵盤上方懸停了三秒才落下。",
          checklist: ["試著檢查：這段有沒有直接寫出「焦慮、難過、緊張」？如果有，請改寫成動作！"]
        },
        {
          key: "SUBTEXT",
          label: { zh: "3. 水面下的八分之七（潛台詞與冰山留白）", en: "3. Subtext & The Unsaid (7/8 Under Water)" },
          ratio: "40%",
          purpose: { zh: "透過對話中的刻意岔開話題，或場景中一個微小的改變，暗示內心的轉折。", en: "Use dialogue subtext or a subtle shift in the environment to imply the emotional resolution." },
          template: "窗外的雨不知什麼時候停了，積水映著街燈晃動的光。關於【{topic}】最後究竟會走向哪裡，誰也沒有再追問。他只是起身把那杯早就涼透的茶倒進水槽，重新燒了一壺熱水。水壺開始微微作響時，天邊已經透出了一點灰白。",
          checklist: ["結尾是否停在一個具體的畫面或動作上，讓讀者心裡自己產生共鳴？"]
        }
      ],
      pitfalls: {
        zh: "常見錯誤：堆砌太多華麗卻無關緊要的成語或形容詞；冰山理論追求的是「精準、克制、白描的動詞與名詞」。",
        en: "Overloading purple prose and flowery adjectives instead of crisp, restrained nouns and verbs."
      }
    }
  ]
};
