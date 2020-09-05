const Bot = require('./botDiscord/bot')
const configuration = require('./botDiscord/config/config.json')

const Comunication = (mainWindow) => {

    const DiscordAppBot = new Bot(mainWindow.webContents)

    const {...comunicationGetSet} = require('./comunication/comunicationGetterSetter')(DiscordAppBot)
    const {...comunicationLoginLogout} = require('./comunication/comunicationLoginLogout')(DiscordAppBot, configuration)



return {
    ...comunicationLoginLogout,
    ...comunicationGetSet,
}
}

module.exports = Comunication
