const fs = require('fs')

const comunicationBot = (CLient, configuration) => {

    const DiscordAppBot = CLient
    const config = configuration
    const loginWithToken = async ({ token, ...body }) => {
        const response = await DiscordAppBot.login(token)
        await DiscordAppBot.user.setStatus('online')
        return response

    }

    const checkToken = async () => config.token

    const checkBox = async () => config.checkBox

    const logoutBot = async () => { await DiscordAppBot.logout() }

    const saveTokenCheck = ({ checkBox, token, ...body }) => {
        

        if (token === config.token && checkBox === true && config.checkBox === true) {
            return
        }

        config.checkBox = checkBox
        config.token = checkBox ? token : ''
        const dir_name = __dirname.replace('comunication', '')
        fs.writeFile(dir_name+'botDiscord/config/config.json', JSON.stringify(config), err => { })

    }
    
    return {
        loginWithToken,
        checkBox,
        logoutBot,
        saveTokenCheck,
        checkToken
    }
}

module.exports = comunicationBot

