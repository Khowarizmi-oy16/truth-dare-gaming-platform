const { contextBridge } = require('electron');
// Intentionally expose no Node APIs to the renderer. The game runs in a sandboxed web context.
contextBridge.exposeInMainWorld('desktopInfo', Object.freeze({ isDesktop: true, product: 'Truth Dare' }));
