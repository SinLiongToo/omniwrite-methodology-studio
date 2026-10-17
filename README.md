# ✍️ OmniWrite 寫作方法論總合工作台 (Cross-Field Writing Methodology Studio)

這是一個整合**跨領域寫作方法論**、**社群平台演算法規範**、**動態結構範本生成**與 **LLM API 即時創作**的互動式 Web 工具。

## 🌟 核心功能亮點（雙模式 1 + 2 架構）

1. **模式一：內建智慧結構範本與策略方向引擎（免 API Key 開箱即用）**
   - 使用者輸入「核心主題、目標受眾、痛點/研究缺口/戲劇衝突、目的、語氣」後，系統即時動態注入變數，生成：
     - 🎯 **三大寫作切入方向（Strategic Angles）**：反直覺破題（高轉發）、具象場景共情（高完讀）、系統化槓桿對照（高收藏）。
     - 🪝 **平台專屬破題鉤子（Opening Hooks）**：針對所選社群載體量身打造的前三秒破題句型（一鍵複製）。
     - 📐 **結構化段落拆解與填空範本**：清楚標示每個階段的篇幅比例（%）、段落任務、填空式引導範本、自我檢核清單（Checklist）與常見避坑指南。
     - ✍️ **互動草稿編輯器**：支援將結構範本一鍵匯入右側編輯器，即時計算字數、預估閱讀時間、勾選完稿檢核表，並可匯出 `.md` 檔案。

2. **模式二：專家級 Master Prompt 產生器 ＆ 7 大平台 30+ 模型即時生成**
   - **Master Prompt 一鍵複製**：自動將「領域 × 社群/商業面試規範 × 主寫作法（含雙方法論混搭）× 受眾痛點」封裝為高密度提示詞（若選「商業面試問答」，更會自動要求 AI 輸出「90 秒第一人稱口述逐字稿＋語氣停頓提示＋面試官深水區追問防禦指南」）。
   - **支援 7 大供應商・30+ 模型切換（含自訂模型 ID）**：
     - **Google Gemini**：`gemini-2.5-pro`、`gemini-2.5-flash`、`gemini-2.5-flash-lite`、`gemini-2.0-flash`、`gemini-1.5-pro`
     - **OpenAI**：`gpt-4.1`、`gpt-4.1-mini`、`gpt-4o`、`gpt-4o-mini`、`o3-mini`、`o1`
     - **Anthropic Claude**：`claude-sonnet-4-20250514`、`claude-3-7-sonnet-latest`、`claude-3-5-sonnet-latest`、`claude-3-5-haiku-latest`
     - **OpenRouter 聚合平台**：一把金鑰暢用 Claude 3.7、Gemini 2.5 Pro、GPT-4.1、DeepSeek R1/V3、Llama 3.3 70B、Qwen 2.5 72B、Grok 3
     - **DeepSeek 官方**：`deepseek-chat` (V3)、`deepseek-reasoner` (R1)
     - **Groq Cloud 超高速推理**：`llama-3.3-70b-versatile`、`deepseek-r1-distill-llama-70b`、`qwen-qwq-32b`
     - **Ollama / LM Studio 本機離線模型（免 API Key）**：`qwen2.5:14b`、`gemma3:12b`、`llama3.2`、`deepseek-r1:14b`

---

## 🧭 涵蓋的 6 大領域與 24 種社群/商業/面試載體

| 領域 (Field) | 支援的社群平台與文體載體 (Communities & Formats) | 系統首選推薦寫作/答題法 |
| :--- | :--- | :--- |
| 📱 **社群自媒體** | Threads 觀點串文、X (Twitter) 推文串、Instagram 輪播圖文、Facebook 深度故事文、Reels/Shorts/TikTok 短影音腳本 | `PAS`、`HSO`、`BAB`、`PREP`、`TWIST` |
| 💼 **專業職場與商業** | **商業面試問答（行為面試 ＆ 個案拆解）**、LinkedIn 專業洞察文、商業企劃與提案 (Proposal)、向上管理工作匯報、高回覆率 Cold Email | `STAR`、`SOAR+L`、`CASE-4`、`PREP`、`SCQA`、`PYRAMID` |
| 📚 **深度內容與知識型** | Substack / 深度電子報、Medium / 部落格長文、技術文件與實戰教學 (Tech Docs) | `FEYNMAN`、`ZETTEL`、`PYRAMID`、`SCQA` |
| 🔬 **學術研究與科普** | 期刊論文摘要與緒論 (Abstract & Intro)、研究計畫書 (Grant Proposal)、大眾科普轉譯文章 (SciComm) | `IMRaD`、`SCQA`、`FEYNMAN`、`ZETTEL` |
| 🚀 **行銷與銷售轉換** | 高轉換到達頁 (Landing Page)、群眾募資頁面 (Crowdfunding)、成效型廣告文案 (Ad Copy) | `PAS`、`AIDA`、`BAB`、`HSO`、`WHY-HOW-WHAT` |
| 🖋️ **文學寫作與故事創作** | 短篇/長篇小說創作、現代散文與生活隨筆、影視劇本與潛台詞對白、非虛構寫作與人物報導 | `HERO`、`3-ACT`、`起承轉合`、`SHOW-ICE`、`TWIST` |

---

## 🏛️ 內建 5 大類・16 種經典寫作與商業面試方法論

- **🧠 邏輯與說服架構**：`PREP` 結論先行法、`SCQA` 麥肯錫結構敘事法、`PYRAMID` 金字塔原理（MECE）、`WHY-HOW-WHAT` 黃金圈法則、**`CASE-4` 商業個案面試拆解法 (Clarify-Structure-Analyze-Recommend)**
- **🔥 行銷與社群爆款**：`PAS` 痛點激化轉換法、`BAB` 前後對比橋樑法、`AIDA` 經典漏斗說服法、`HSO` (Hook-Story-Offer) 爆款故事變現法
- **🎬 敘事與故事張力**：`STAR` 實戰復盤故事法、**`SOAR+L` 高階行為面試逆轉法 (Situation-Obstacle-Action-Result + Learning)**、`HERO` 英雄之旅濃縮版、`3-ACT` 好萊塢三幕劇結構、`TWIST` 反直覺認知衝突法
- **🏛️ 知識管理與學術**：`IMRaD` 國際學術論文架構、`FEYNMAN` 費曼學習轉譯法、`ZETTEL` 卡片盒跨界串聯法
- **✒️ 文學美學與創作**：`起承轉合` (Kishōtenketsu) 東方詩學四段論、`SHOW-ICE` 海明威冰山理論 × 五感沉浸法 (Show, Don't Tell)

---

## 🚀 如何啟動使用

直接以瀏覽器開啟專案根目錄下的 [`index.html`](./index.html) 即可完整運作（支援深淺色主題 `☀️/🌙` 與中英雙語切換 `🌐 EN/中文`）。
