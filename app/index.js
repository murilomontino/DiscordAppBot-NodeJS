const Comunication = require('./comunication')

const { ipcMain } = require('electron')

ipcMain.on('@comunication/REQUEST', async (event, message) => {
  
  try {
    
    const { title, body } = message
    await Comunication[title]({event, body})
 
  } catch (err) {
    
  }
})

ipcMain.handle('@token/REQUEST', async (event, message) => {
  try{
    
    const { title, body } = message
    try {
      const value = await Comunication[title]({body, event})
      return value
    } catch (error) {
        return 'Error'
    }
    

    
  } catch (err){
  }
 

})
