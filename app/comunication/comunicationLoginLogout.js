const fs = require('fs')

const comunicationBot = (DiscordAppBot, configuration) => {


    const loginWithToken = async ({ token, ...body }) => {
        const response = await DiscordAppBot.login(token)
        await DiscordAppBot.user.setStatus('online')
        return response

    }

    const checkToken = async () => configuration.token

    const checkBoxIsChecked = async () => configuration.checkBox

    const checkTokenBox = async () => {
        const token = await checkToken()
        const checkBox = await checkBoxIsChecked()
        return {token, checkBox}
    }

    const logoutBot = async () => { await DiscordAppBot.logout() }

    const saveTokenCheck = ({ checkBox, token, ...body }) => {
        

        if (token === configuration.token && checkBox === true && configuration.checkBox === true) {
            return
        }

        configuration.checkBox = checkBox
        configuration.token = checkBox ? token : ''
        const dir_name = __dirname.replace('comunication', '')
        fs.writeFile(dir_name+'botDiscord/config/config.json', JSON.stringify(configuration), err => { })

    }
    
    return {
        checkTokenBox,
        loginWithToken,
        checkBoxIsChecked,
        logoutBot,
        saveTokenCheck,
        checkToken
    }
}

module.exports = comunicationBot

