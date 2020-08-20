const { app, BrowserWindow } = require('electron')
 

function createWindow(){
  
    let win = new BrowserWindow( { width: 1000, height:600})
    win.removeMenu()
    win.loadURL("http://localhost:3000/")
    


}

app.on("ready", createWindow)