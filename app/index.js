const Comunication = require('./comunication')

const { ipcMain } = require('electron');

ipcMain.on('@comunication/REQUEST', async (event, message) => {
  
  try {
    
    const { title, body } = message
    await Comunication[title]({event, body})
 
  } catch (err) {
    
  }
})

ipcMain.on('@token/REQUEST', (event, message) => {
  try{
    
    const { title, body } = message
    
    Comunication[title](body).then((result) => {
      event.returnValue = { onBot: true }
    }).catch((err) => {
      event.returnValue = { onBot: false }
    });

    
  } catch (err){

  }
 

})

ipcMain.handle('@tokenCheck/REQUEST', async (event, message) => {
  
  const { title } = message   
  const value = await Comunication[title]()
  
  return value

})