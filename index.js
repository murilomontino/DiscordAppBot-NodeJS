const { app, BrowserWindow } = require('electron')

function createWindow(){
  
    let win = new BrowserWindow( { minHeight: 400,
    minWidth: 700, width: 1000, height:600, frame: false, webPreferences: {nodeIntegration: true}})
    win.removeMenu()
    win.loadURL("http://localhost:3000/")
     win.webContents.openDevTools()

    
}

app.on("ready", createWindow)



