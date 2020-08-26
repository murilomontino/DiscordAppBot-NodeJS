const Comunication = require('./comunication')

const { ipcMain } = require('electron');

ipcMain.on('@comunication/REQUEST', async (event, message) => {
  
  try {
    
    const { title, body } = message;
    
 
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

