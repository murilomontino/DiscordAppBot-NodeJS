const Bot = require('./botDiscord/bot')

const DiscordAppBot = new Bot()
const config = require('./botDiscord/config/config.json')
 
const logar = (token) => DiscordAppBot.login(token)

const checkToken = async () => config.token

const checkBox = async () => config.checkBox
       
     
const Comunication = {
    logar,
    checkToken,
    checkBox
}


module.exports = Comunication
