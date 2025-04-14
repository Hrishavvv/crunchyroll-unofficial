const { app, BrowserWindow } = require('electron');
const path = require('path');

app.commandLine.appendSwitch('widevine-cdm-path', path.join(__dirname, 'WidevineCdm'));
app.commandLine.appendSwitch('widevine-cdm-version', '4.10.2891.0');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    fullscreenable: true,
    autoHideMenuBar: true,
    resizable: true,
    frame: true,
    webPreferences: {
      plugins: true,
      contextIsolation: false,
      nodeIntegration: false,
      preload: path.join(__dirname, 'preload.js')
    },
    icon: path.join(__dirname, 'resources/app/icon.png')
  });

  win.setMenu(null);
  win.loadURL('https://www.crunchyroll.com');

  win.webContents.on('before-input-event', (event, input) => {
    if (input.key === 'F12' || (input.control && input.shift && input.key.toLowerCase() === 'i')) {
      event.preventDefault();
    }
  });

  win.webContents.on('context-menu', e => {
    e.preventDefault();
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
