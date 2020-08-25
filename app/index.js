const Backend = require('./backend')

const { ipcMain, Notification } = require('electron');

ipcMain.on('@notification/REQUEST', async (event, message) => {
  
  try {
    const { title, body } = message;

    const notification = new Notification({
      title,
      body,
    })
    
    notification.show()
  } catch (err) {
    event.sender.send('@notification/FAILURE', 'Houve um erro na criação da notificação')
  }
})

ipcMain.on('@token/REQUEST', (event, message) => {
  try{
    
    const { title, body } = message
    console.log(body)
    
    Backend[title](body).then((result) => {
      event.returnValue = { onBot: true }
    }).catch((err) => {
      event.returnValue = { onBot: false }
    });

  } catch (err){

  }
 

})

