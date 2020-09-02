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

    const checkBoxIsChecked = async () => config.checkBox

    const logoutBot = async () => { await DiscordAppBot.logout() }

    const saveTokenCheck = ({ checkBox, token, ...body }) => {

        if (token === config.token && checkBox === true) {
            return
        }
        console.log('saveCheck')
        config.checkBox = checkBox
        config.token = checkBox ? token : ''

        fs.writeFile(__dirname + '/botDiscord/config/config.json', JSON.stringify(config), err => { })

    }
    
    return {
        loginWithToken,
        checkBoxIsChecked,
        logoutBot,
        saveTokenCheck,
        checkToken
    }
}

module.exports = comunicationBot
