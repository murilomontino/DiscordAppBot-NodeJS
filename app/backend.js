const Bot = require('./botDiscord/bot')

const DiscordAppBot = new Bot()

const logar = token => DiscordAppBot.login(token)

const Backend = {
    logar
}

module.exports = Backend
