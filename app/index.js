import { ipcMain, BrowserWindow } from 'electron'

module.exports = (mainWindow) => {
  
	const Comunication = require('./comunication')(mainWindow)
	
	ipcMain.on('@comunication/REQUEST', async (event, message) => {
		try{
			const { title, ...body } = message
			await Comunication[title]({ ...body})
      
		} catch (error) { return }
    
	})

  
	ipcMain.handle('@token/REQUEST', async (event, message) => {
		try{
    
			const { title, ...body } = message
			try {
				const value = await Comunication[title]({...body, event})
				return value
			} catch (error) {
				return 'Error'
			}
		} catch (err){ return }
	})

  
	// ================================================================================================
	// Eventos do MenuTitleBar 

	ipcMain.on('@window/REQUEST', async (event, message) => {
		try {
			const {title} = message
			const mainWindow = BrowserWindow.getFocusedWindow()

			if(title === 'maximize'){
				if(mainWindow.isMaximized()){
					mainWindow.unmaximize()
				} else
					mainWindow.maximize()
			}else
				mainWindow[title]()
  
		} catch (error) {
			console.error(error)
		}
  
	})

	// ================================================================================================
	// Eventos de criação de Janela
	ipcMain.handle('create-window', async (event, message) => {
    
		const {page} = message
		const childrenWindow = new BrowserWindow({  
			parent: mainWindow,
			frame: false,  
			webPreferences: {
				nodeIntegration: true
			},
			show: false
		})
		childrenWindow.loadURL('http://localhost:3000'+page)

		childrenWindow.on('ready-to-show', ()=>{
			childrenWindow.webContents.send('parent-window')
			childrenWindow.show()
		})

	})
}






