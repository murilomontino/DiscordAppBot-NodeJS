const { app, BrowserWindow } = require('electron')
const Bot = require('./bot')



function createWindow(){
    const win = new BrowserWindow( { width: 800, height:600 })
    win.loadURL("http://localhost:3000/")
    win.removeMenu()
    win.webContents.openDevTools()

}

const Client = (async () => {
    return await new Bot()
})()

app.on("ready", createWindow)