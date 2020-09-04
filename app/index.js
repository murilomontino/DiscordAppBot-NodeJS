const { ipcMain } = require('electron')

module.exports = (mainWindow) => {
  
  const Comunication = require('./comunication')(mainWindow)
  const port1 = ipcMain.on('@comunication/REQUEST', async (event, message) => {
    try{
      const { title, ...body } = message
      await Comunication[title]({ ...body})
      
    } catch (error) {}
    
  })

  
  const port2 = ipcMain.handle('@token/REQUEST', async (event, message) => {
  try{
    
    const { title, ...body } = message
    try {
      const value = await Comunication[title]({...body, event})
      return value
    } catch (error) {
        return 'Error'
    }
  } catch (err){
  }
})

  return {
    port1,
    port2
  }

}






