# Maang.in AI Assistant 🤖

## 🚀 Overview
**Maang.in AI Assistant** is a powerful Chrome Extension that embeds an intelligent AI tutor directly into the [Maang.in](https://maang.in) competitive programming platform.

Powered by **Google Gemini**, this tool provides real-time, context-aware assistance. Unlike generic chatbots, this extension **automatically reads the problem statement, constraints, and your current code**, offering specific hints and logic explanations without you needing to copy-paste context.

## ✨ Key Features
* **🧠 Context-Aware AI:** Automatically detects the current problem and feeds the details to the AI for accurate, specific help.
* **💬 Persistent Chat History:** Saves your conversation for *each specific problem*. You can leave a problem and come back later; your chat will still be there.
* **🎨 Smart UI:**
    * **Draggable & Resizable:** Move the chat window anywhere on your screen.
    * **Theme Adaptation:** Automatically syncs with Maang.in's Dark or Light mode.
* **⚡ Productivity Tools:**
    * **One-Click Copy:** Copy code snippets from the AI response instantly.
    * **Markdown Support:** Responses are formatted beautifully with syntax highlighting.
    * **Export Chat:** Download your entire study session for offline review.

## 🛠️ Tech Stack
* **Core:** JavaScript (ES6+), HTML5, CSS3
* **AI Engine:** Google Gemini API (LLM)
* **Browser API:** Chrome Manifest V3, Storage API, Shadow DOM
* **Libraries:** `marked.js` (Markdown parsing)

## 📸 Screenshots
| **AI Chat Interface** | **Context Awareness** |
|:---:|:---:|
| ![Interface](https://github.com/user-attachments/assets/54136ea0-fccd-4e24-a91b-8e57b9546166) | ![Context](https://github.com/user-attachments/assets/76378f) |
| *Clean, draggable chat interface* | *AI understands the specific problem context* |

| **API Configuration** | **Theme Support** |
|:---:|:---:|
| ![Config](https://github.com/user-attachments/assets/20b8b9b9-9686-446a-8224-24c5ab94985b) | ![Dark Mode](https://github.com/user-attachments/assets/6bbac5) |
| *Secure local API Key storage* | *Adapts to Dark/Light themes automatically* |

## ⚙️ Installation Guide

### 1. Clone the Repository
```bash
git clone [https://github.com/rahulpaul-07/AI-Help-Extension.git](https://github.com/rahulpaul-07/AI-Help-Extension.git)

2. Load into Chrome
Open Google Chrome and navigate to chrome://extensions/.

Toggle Developer Mode (top right corner) to ON.

Click Load unpacked.

Select the folder AI-Help-chrome-extension (the one you just cloned).

3. Configure API Key
Get your free API Key from Google AI Studio.

Go to Maang.in and open any problem.

Click the AI Assistant Icon (next to the "Ask Doubt" button).

Paste your key and click Save.

Note: Your API key is stored locally in your browser for security.

🤝 Contributing
Contributions are welcome! If you want to improve the UI or add support for other platforms:

Fork the repository.

Create a feature branch (git checkout -b feature/NewFeature).

Commit changes (git commit -m 'Add NewFeature').

Push to the branch (git push origin feature/NewFeature).

Open a Pull Request.

👨‍💻 Author
Rahul Paul

GitHub Profile

LinkedIn

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.


