const Bot = require('./botDiscord/bot')
const DiscordAppBot = new Bot()
const config = require('./botDiscord/config/config.json')

const {...comunicationGetSet} = require('./comunication/comunicationGetterSetter')(DiscordAppBot)
const {...comunicationLoginLogout} = require('./comunication/comunicationLoginLogout')(DiscordAppBot, config)


const Comunication = {
    ...comunicationLoginLogout,
    ...comunicationGetSet,
}


module.exports = Comunication
