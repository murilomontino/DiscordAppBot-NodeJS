const Bot = require("./botDiscord/bot")
const configuration = require("./botDiscord/config/config.json")

const Comunication = (mainWindow) => {

	const DiscordAppBot = new Bot(mainWindow.webContents)

	const {...comunicationGetSet} = require("./comunication/comunicationGetterSetter")(DiscordAppBot)
	const {...comunicationLoginLogout} = require("./comunication/comunicationLoginLogout")(DiscordAppBot, configuration)
	const {...comunicationGuild} = require("./comunication/comunicationGuild")(DiscordAppBot)


	return {
		...comunicationLoginLogout,
		...comunicationGetSet,
		...comunicationGuild
	}
}

module.exports = Comunication
