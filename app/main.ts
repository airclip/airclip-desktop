import { app, BrowserWindow } from 'electron';
import path from 'path';
import installExtension, {
  REDUX_DEVTOOLS,
  REACT_DEVELOPER_TOOLS
} from 'electron-devtools-installer';
import electronDebug from 'electron-debug';
import { menubar, Menubar } from 'menubar';
import { isProd, isDev } from './utils';

let mb: Menubar | null = null;

(async () => {
  if (isProd()) {
    require('source-map-support').install();
  }

  if (isDev() || process.env.DEBUG_PROD === 'true') {
    electronDebug();
  }

  await app.whenReady();

  if (isDev() || process.env.DEBUG_PROD === 'true') {
    await installExtension(
      [REDUX_DEVTOOLS, REACT_DEVELOPER_TOOLS],
      !!process.env.UPGRADE_EXTENSIONS
    );
  }

  await createMenubar();

  app.on('window-all-closed', () => {
    // Respect the OSX convention of having the application in memory even
    // after all windows have been closed.
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', async () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      await createMenubar();
    }
  });
})().catch(err => {
  console.error(err);
});

async function createMenubar() {
  mb = menubar({
    index: isProd()
      ? `file://${__dirname}/app.prod.html`
      : `file://${__dirname}/app.dev.html`,
    icon: path.resolve(__dirname, 'assets/images/IconTemplate.png'),
    tooltip: 'ClipSynk',
    browserWindow: {
      width: 350,
      height: 460,
      fullscreenable: false,
      resizable: false,
      transparent: true,
      frame: false,
      webPreferences: {
        backgroundThrottling: false,
        nodeIntegration: true
      },
      alwaysOnTop: true
    },
    showOnAllWorkspaces: !!isProd(),
    preloadWindow: true
  });

  mb.on('after-create-window', () => {
    if (mb && mb.window) {
      mb.window.webContents.openDevTools({ mode: 'undocked' });
    }
  });

  mb.on('after-close', () => {
    mb = null;
  });
}
