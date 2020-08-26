const Comunication = require('./comunication')

const { ipcMain } = require('electron');

ipcMain.on('@comunication/REQUEST', async (event, message) => {
  
  try {
    
    const { title, body } = message
    
 
  } catch (err) {
    
  }
})

ipcMain.on('@token/REQUEST', (event, message) => {
  try{
    
    const { title, body } = message
    
<<<<<<< HEAD
    Backend[title](body).then( result => 
    event.returnValue = { onBot: true }
    ).catch(err => {
=======
    Comunication[title](body).then((result) => {
      event.returnValue = { onBot: true }
    }).catch((err) => {
>>>>>>> 6e01ab251587adecbd49096fc87b943a5ae75279
      event.returnValue = { onBot: false }
    });

    
  } catch (err){

  }
 

})

