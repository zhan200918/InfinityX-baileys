<div align="center">

# ⚡ InfinityX-Baileys

### A Fast, Modern and Lightweight WhatsApp Web API Library

Built on the Multi-Device protocol with enhanced performance, modern architecture, and complete WhatsApp features.

<p>
<img src="https://img.shields.io/github/license/zhan200918/InfinityX-baileys?style=for-the-badge">
<img src="https://img.shields.io/github/stars/zhan200918/InfinityX-baileys?style=for-the-badge">
<img src="https://img.shields.io/github/forks/zhan200918/InfinityX-baileys?style=for-the-badge">
<img src="https://img.shields.io/github/last-commit/zhan200918/InfinityX-baileys?style=for-the-badge">
<img src="https://img.shields.io/badge/Node.js-18+-green?style=for-the-badge&logo=node.js">
<img src="https://img.shields.io/badge/TypeScript-Supported-blue?style=for-the-badge&logo=typescript">
</p>

---

High-performance WhatsApp library designed for developers.

</div>

---

# ✨ Features

- 🚀 Multi Device Support
- 🔐 Pairing Code Authentication
- 📱 QR Code Authentication
- 💬 Send & Receive Messages
- 🖼️ Image, Video & Document Messages
- 🎵 Audio & Voice Messages
- 🎭 Sticker Support
- 👥 Group Management
- 📢 Newsletter (Channel) API
- 📊 Event-Based Architecture
- ⚡ Lightweight & Fast
- 📦 TypeScript Ready
- 🌐 ESM Support
- 🔄 Automatic Reconnection
- 🧩 Easy to Extend

---

# 📦 Installation

## NPM

```bash
npm install infinityx-baileys
```

## GitHub

```bash
npm install github:zhan200918/InfinityX-baileys
```

---

# 🚀 Quick Start

```javascript
import makeWASocket, {
    useMultiFileAuthState
} from "infinityx-baileys"

async function start() {

    const { state, saveCreds } =
        await useMultiFileAuthState("session")

    const sock = makeWASocket({
        auth: state,
        printQRInTerminal: true
    })

    sock.ev.on("creds.update", saveCreds)

}

start()
```

---

# 📚 API

### Authentication

- QR Login
- Pairing Code
- Multi-File Auth State

### Messaging

- Text
- Image
- Video
- Audio
- Sticker
- Document
- Poll
- Reaction

### Groups

- Create Group
- Update Group
- Participants
- Invite
- Settings

### Newsletter

- Create
- Metadata
- Follow
- Unfollow
- Mute
- Unmute
- Update Name
- Update Description
- Update Picture
- Delete

---

# 📁 Project Structure

```
src/
├── Defaults
├── Socket
├── Types
├── Utils
├── WAProto
├── WABinary
└── index.ts

lib/
```

---

# ⚙ Requirements

- Node.js 18+
- npm 9+
- WhatsApp Multi Device

---

# ❤️ Credits

- WhiskeySockets
- Baileys Contributors
- WhatsApp Web Team

---

# 🤝 Contributing

Contributions, issues and feature requests are welcome.

Feel free to open an Issue or Pull Request.

---

# ⭐ Support

If you like this project, please consider giving it a ⭐ on GitHub.

---

# 📄 License

MIT License

Copyright © 2026 ZhanXoffc
