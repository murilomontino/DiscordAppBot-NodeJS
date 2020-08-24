const Bot = require('./botDiscord/bot')

const DiscordAppBot = new Bot()

const logar = (token) => {
    DiscordAppBot.Login(token)
}

const BackEnd = {
    logar
}


module.exports = BackEnd
