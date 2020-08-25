const Bot = require('./botDiscord/bot')

const DiscordAppBot = new Bot()

const logar = (token) => {
    return DiscordAppBot.login(token)
}

const Backend = {
    logar
}


module.exports = Backend
