const  { BrowserWindow, app, Tray } = require('electron')
const MainProcess = require('../lib')
const path = require('path')


const isDev = process.env.NODE_ENV
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'



let mainWindow

if (isDev === 'production') {
	const sourceMapSupport = require('source-map-support')
	sourceMapSupport.install()
}

const installExtensions = () => {
	try {
		const installer = require('electron-devtools-installer')
		const extensions = ['REACT_DEVELOPER_TOOLS']
		
		return Promise.all(
			extensions.map((name) => installer.default(installer[name]))
		).catch()
	} catch (error) {
		return
	}
		

}

function createWindow() {
	
	mainWindow = new BrowserWindow({
		width: 1000,
		height: 600,
		minHeight: 200,
		minWidth: 750,
		frame: (isDev === 'development')? true: false,
		backgroundColor: '#202225',
		webPreferences: {
			nodeIntegration: true,
			enableRemoteModule: true,
		}
	})
  
	const rendererFile = 
	(isDev === 'development')? 
		'http://localhost:3000' : 
		`file://${path.resolve(__dirname, '..', 'build', 'index.html')}`

	mainWindow.loadURL( rendererFile	)
  
	if (isDev  === 'development') {
		try {
			installExtensions()

			mainWindow.webContents.openDevTools()
		} catch (error) {return}
	
	}

	mainWindow.on('closed', () => {
		mainWindow = null
	})

	MainProcess(mainWindow)

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


