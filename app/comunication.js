const Bot = require('./botDiscord/bot')

const DiscordAppBot = new Bot()

<<<<<<< HEAD:app/backend.js
const logar = token => DiscordAppBot.login(token)

const Backend = {
    logar
}

module.exports = Backend
=======
const logar = (token) => {
    return DiscordAppBot.login(token)
}
       
     
const Comunication = {
    logar
}


module.exports = Comunication
>>>>>>> 6e01ab251587adecbd49096fc87b943a5ae75279:app/comunication.js
