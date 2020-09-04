const { ipcMain } = require('electron')

module.exports = (mainWindow) => {
  
  const Comunication = require('./comunication')(mainWindow)
  
  ipcMain.on('@comunication/REQUEST', async (event, message) => {
    try{
      const { title, ...body } = message
      await Comunication[title]({ ...body})
      
    } catch (error) {}
    
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
  } catch (err){
  }})

  
// ================================================================================================
// Eventos do MenuTitleBar 

  ipcMain.handle('@window/REQUEST', async (event, message) => {
    try {
      
      
      if(message === 'maximize'){
          if(mainWindow.isMaximized()){
              mainWindow.unmaximize()
          } else
              mainWindow.maximize()
      }else
          mainWindow[message]()
  
    } catch (error) {
     
    }
  
  })


}






