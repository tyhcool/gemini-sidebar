# Gemini Sidebar Chrome Extension

A lightweight Chrome extension that allows you to quickly access Google Gemini directly from your browser's side panel. 

## ✨ Features

* **Quick Access:** Open Gemini instantly by clicking the extension icon in your toolbar.
* **Optimized Performance:** Utilizes DNS prefetching and preconnecting to ensure Gemini loads as fast as possible.
* **Smooth UX:** Features a sleek loading spinner while the Gemini interface is being fetched.
* **Bypass Restrictions:** Automatically handles `X-Frame-Options` and `Content-Security-Policy` headers via Chrome's `declarativeNetRequest` API to allow seamless iframe rendering.
* **Localization:** Supports Japanese description and title natively.

## 🚀 Installation (Developer Mode)

Since this extension is not currently published on the Chrome Web Store, you can install it manually using Developer Mode:

1. Download or clone this repository to your local machine.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** by toggling the switch in the top right corner.
4. Click on the **Load unpacked** button in the top left.
5. Select the `gemini-sidebar` folder.
6. (Optional but recommended) Click the "puzzle piece" icon in Chrome's toolbar and pin the Gemini Sidebar extension for easy access.

## 💻 Usage

1. Ensure you are logged into your Google account in a standard Chrome tab (you can visit [gemini.google.com](https://gemini.google.com) to verify).
2. Click the Gemini Sidebar extension icon.
3. The Chrome side panel will slide out and display the Gemini interface.

## 📁 Project Structure

* `manifest.json`: The core configuration file for the extension (Manifest V3).
* `sidebar.html` & `sidebar.js`: The UI and logic for the side panel, including the loading animation.
* `background.js`: Service worker handling the extension icon click event to open the side panel.
* `rules.json`: Configuration to modify HTTP response headers to allow iframe embedding.
* `icon.png`: The extension icon.

## 📄 License

This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.