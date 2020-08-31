const Bot = require('./botDiscord/bot')

const DiscordAppBot = new Bot()

const config = require('./botDiscord/config/config.json')
 
const loginWithToken = async ({body}) => { // body === token 
    const response = await DiscordAppBot.login(body)
    await DiscordAppBot.user.setStatus('online')
    return response
    
} 


const checkToken = async () => config.token

const checkBox = async () => config.checkBox
       
const logoutBot = async () => {await DiscordAppBot.logout()}

const botUsername = () =>{
    return DiscordAppBot.user.username
}

const Comunication = {
    loginWithToken,
    checkToken,
    checkBox,
    logoutBot,
    botUsername
}


module.exports = Comunication
