

import Bot from './botDiscord/bot'

const Comunication = (mainWindow) => {

	const configuration = require('../database/config.json')
	const DiscordAppBot = new Bot(mainWindow.webContents, configuration)
	
	const {...comunicationGetSet} = require('./comunication/comunicationGetterSetter')(DiscordAppBot)
	const {...comunicationLoginLogout} = require('./comunication/comunicationLoginLogout')(DiscordAppBot, configuration)
	const {...comunicationGuild} = require('./comunication/comunicationGuild')(DiscordAppBot)


	return {
		...comunicationLoginLogout,
		...comunicationGetSet,
		...comunicationGuild
	}
}

module.exports = Comunication
