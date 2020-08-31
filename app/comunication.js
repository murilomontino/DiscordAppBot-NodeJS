const Bot = require('./botDiscord/bot')

const DiscordAppBot = new Bot()
const fs = require('fs')
const config = require('./botDiscord/config/config.json')
 
const loginWithToken = async ({token, ...body}) => { 
    const response = await DiscordAppBot.login(token)
    await DiscordAppBot.user.setStatus('online')
    return response
    
} 

const checkToken = async () => config.token

const checkBox = async () => config.checkBox
       
const logoutBot = async () => {await DiscordAppBot.logout()}

const botUsername = () => DiscordAppBot.user.username

const saveTokenCheck = ({checkBox, token, ...body}) => {
    
    if(token === config.token && checkBox===true){
        return
    }

    config.checkBox = checkBox
    config.token = checkBox? token: ''

    fs.writeFile(__dirname + '/botDiscord/config/config.json', JSON.stringify(config), err => {})

}


const Comunication = {
    loginWithToken,
    checkToken,
    checkBox,
    logoutBot,
    botUsername,
    saveTokenCheck
}


module.exports = Comunication
