# TRUTH/DARE GAMING PLATFORM

A responsive, dark-mode party game starter with demo gameplay, editable prompt management, Web Speech announcements, camera preview, and an Electron shell for macOS and Windows.

## Run locally

```bash
npm install
npm run start
```

Open the Vite URL printed in your terminal. Build the web app with `npm run build`; run the Electron shell with `npm run start` in one terminal and `npm run desktop` in another; package installers with `npm run dist` after installing dependencies.

## What works

- Responsive home, pass-the-phone play flow, multiplayer arena spinner, round counter and selected players.
- Demo mode with no account required; built-in truth/dare prompts, random selection, a specific-prompt picker, and a speech-recognition start-turn control where supported.
- Browser Text-to-Speech with an announcer toggle.
- Question manager with search, edit, add, delete, JSON and CSV import, and JSON export. Prompts are stored in IndexedDB and imported lists can contain 10,000+ records. CSV headers supported: `type,category,text` (or `type,prompt`); JSON accepts an array or `{ "prompts": [...] }`.
- Local account creation/sign-in/sign-out and deletion, stored only on the current device. This is a prototype, not secure production authentication.
- Browser camera/microphone permission and a private local preview. Scenic background choices are preview treatments, not real background segmentation.
- Electron packaging configuration for Windows (NSIS) and macOS (DMG).

## Important production integrations

Remote invitations, live online presence, synchronized rounds, and actual two-way WebRTC require a trusted server/signaling service. This repository provides local UI/demo flows but does not include that backend. Camera/microphone availability requires user permission and a secure context (HTTPS or localhost). Web Bluetooth support is experimental, browser-dependent, and does not provide generic peer-to-peer multiplayer; Electron does not grant Bluetooth discovery automatically. A dedicated native Bluetooth transport and secure peer discovery layer must be implemented for offline local multiplayer. Never store real passwords in this local prototype.

## Prompt JSON example

```json
{
  "prompts": [
    { "type": "truth", "category": "Getting to know you", "text": "What small thing always makes you smile?" },
    { "type": "dare", "category": "Silly", "text": "I dare you to do a dramatic slow-motion wave." }
  ]
}
```

This app is a playful starter, not a production-ready auth or video-call service. Keep prompts friendly, allow anyone to pass, and avoid unsafe dares.
