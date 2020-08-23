// const { app, BrowserWindow } = require('electron')

const electron = require("electron")

function createWindow(){
  
    let win = new electron.BrowserWindow( { width: 1000, height:600, frame: false, webPreferences: {nodeIntegration: true}    })
    win.removeMenu()
    win.loadURL("http://localhost:3000/")
    // win.webContents.openDevTools()

    
}

electron.app.on("ready", createWindow)



