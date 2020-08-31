const Bot = require('./botDiscord/bot')

const DiscordAppBot = new Bot()
const config = require('./botDiscord/config/config.json')
 
const loginWithToken = (token) => DiscordAppBot.login(token)

const checkToken = async () => config.token

const checkBox = async () => config.checkBox
       
const logoutBot = () => DiscordAppBot.destroy()

const Comunication = {
    loginWithToken,
    checkToken,
    checkBox,
    logoutBot
}


module.exports = Comunication
