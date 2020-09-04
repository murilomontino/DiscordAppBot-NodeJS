const Bot = require('./botDiscord/bot')
const config = require('./botDiscord/config/config.json')

const Comunication = (mainWindow) => {

    const DiscordAppBot = new Bot(mainWindow)

    const {...comunicationGetSet} = require('./comunication/comunicationGetterSetter')(DiscordAppBot)
    const {...comunicationLoginLogout} = require('./comunication/comunicationLoginLogout')(DiscordAppBot, config)



return {
    ...comunicationLoginLogout,
    ...comunicationGetSet,
}
}

module.exports = Comunication
