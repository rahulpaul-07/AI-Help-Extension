# Maang.in AI Assistant

## Overview
Maang.in AI Assistant is a Chrome Extension that embeds an intelligent AI tutor directly into the Maang.in competitive programming platform.

Powered by Google Gemini, this tool provides real-time, context-aware assistance. Unlike generic chatbots, this extension automatically reads the problem statement, constraints, and your current code, offering specific hints and logic explanations without the need to manually copy-paste context.

## Key Features
* **Context-Aware AI:** Automatically detects the current problem and feeds the details to the AI for accurate, specific help.
* **Persistent Chat History:** Saves your conversation for each specific problem. You can leave a problem and come back later; your chat will still be there.
* **Smart UI:**
    * **Draggable & Resizable:** Move the chat window anywhere on your screen.
    * **Theme Adaptation:** Automatically syncs with Maang.in's Dark or Light mode.
* **Productivity Tools:**
    * **One-Click Copy:** Copy code snippets from the AI response instantly.
    * **Markdown Support:** Responses are formatted with syntax highlighting.
    * **Export Chat:** Download your entire study session for offline review.

## Tech Stack
* **Core:** JavaScript (ES6+), HTML5, CSS3
* **AI Engine:** Google Gemini API (LLM)
* **Browser API:** Chrome Manifest V3, Storage API, Shadow DOM
* **Libraries:** marked.js (Markdown parsing)

## Installation Guide

### 1. Clone the Repository
Open your terminal and run:
```bash
git clone git clone https://github.com/rahulpaul-07/AI-Help-Extension.git

```

### 2. Load into Chrome

1. Open Google Chrome and type `chrome://extensions/` in the address bar.
2. Toggle "Developer Mode" (top right corner) to ON.
3. Click the "Load unpacked" button.
4. Select the folder `AI-Help-chrome-extension` (the folder you just cloned).

### 3. Configure API Key

1. Get your free API Key from Google AI Studio.
2. Go to the Maang.in platform and open any problem.
3. Click the AI Assistant Icon (it appears next to the "Ask Doubt" button).
4. Paste your API key into the input field and click "Save".
* Note: Your API key is stored locally in your browser for security.



## Contributing

Contributions are welcome! If you want to improve the UI or add support for other platforms:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/NewFeature`).
3. Commit changes (`git commit -m 'Add NewFeature'`).
4. Push to the branch (`git push origin feature/NewFeature`).
5. Open a Pull Request.

## Author

**Rahul Paul**

* [GitHub Profile](https://github.com/rahulpaul-07)
* [LinkedIn Profile](https://www.linkedin.com/in/rahul-paul-554225251/)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
