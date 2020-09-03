const comunicationBot = (CLient) => {

    const DiscordAppBot = CLient

    const getBotUsername = () => DiscordAppBot.user.username

    const getBotTag = () => DiscordAppBot.user.tag

    const setBotUsername =({name}) => DiscordAppBot.user.setUsername(name)
    
    const getBotAvatarURL = ()=> DiscordAppBot.user.avatarURL()
    
    const setBotAvatarURL = ({avatar}) => DiscordAppBot.user.setAvatar(avatar)

    const setBotActivity = ({name, url, type, shardID}) => DiscordAppBot.user.setActivity(name, {url, type, shardID})

    const GetBotOnwerApplication = async () => {
        const response = await DiscordAppBot.AuthorAplication()
        console.log(response)
    }

    return {
        getBotUsername,
        getBotTag,
        setBotUsername,
        getBotAvatarURL,
        setBotAvatarURL,
        setBotActivity,
        GetBotOnwerApplication
    }
}

module.exports = comunicationBot
