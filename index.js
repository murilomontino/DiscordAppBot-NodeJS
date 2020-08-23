const { app, BrowserWindow } = require('electron')




function createWindow(){
  
    const win = new BrowserWindow( { 
        width: 1000, 
        height:600, 
        frame: false, 
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
 
             
        }    
    })
    win.removeMenu()
    win.loadURL("http://localhost:3000/")
    win.webContents.openDevTools()

}
app.on("ready", createWindow)




