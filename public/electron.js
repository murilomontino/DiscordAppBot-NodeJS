
const  { BrowserWindow, app } = require('electron')

const path = require('path')
const isDev = require('electron-is-dev')

let mainWindow

function createWindow() {
	mainWindow = new BrowserWindow({
		width: 1000,
		height: 600,
		minHeight: 200,
		minWidth: 750,
		frame: true,
		backgroundColor: '#36393f',
		webPreferences: {
			nodeIntegration: true,
			enableRemoteModule: true,
			preload: './preload'
		}
	})
  
	mainWindow.loadURL(
		isDev ? 'http://localhost:3000' : `file://${path.resolve(__dirname, '..', 'build', 'index.html')}`,
	)
  
	if (isDev) {
		mainWindow.webContents.openDevTools()
	}

	mainWindow.on('closed', () => {
		mainWindow = null
	})

	require('../app')(mainWindow)

}



app.on('ready', createWindow)

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

app.on('activate', () => {
	if (mainWindow === null) {
		createWindow()
	}
})


