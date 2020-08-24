const { ipcMain, Notification } = require('electron');

ipcMain.on('@notification/REQUEST', async (event, message) => {
  try {
    const { title, body } = message;

    const notification = new Notification({
      title,
      body,
    });
    console.log(body)
    notification.show();
  } catch (err) {
    event.sender.send('@notification/FAILURE', 'Houve um erro na criação da notificação');
  }
});

ipcMain.on('asynchronous-message', (event, arg) => {
  console.log(arg) // prints "ping"
  event.reply('asynchronous-reply', 'pong')
})
