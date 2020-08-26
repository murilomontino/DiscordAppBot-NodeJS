require('../app')

const electron = require('electron');

const { app } = electron;
const { BrowserWindow } = electron;

const path = require('path');
const isDev = require('electron-is-dev');


let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    minHeight: 400,
    minWidth: 700,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false
    },
  });

  
    isDev ? (mainWindow.loadURL('http://localhost:3000'), mainWindow.webContents.openDevTools()) 
    : mainWindow.loadURL(`file://${path.resolve(__dirname, '..', 'build', 'index.html')}`);

  //if (isDev) {
   // mainWindow.webContents.openDevTools();
  //}

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});