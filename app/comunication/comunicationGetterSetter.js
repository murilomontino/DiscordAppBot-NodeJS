const comunicationBot = (CLient) => {

    const DiscordAppBot = CLient

    const getBotUsername = () => DiscordAppBot.user.username

    const setBotUsername =({name}) => DiscordAppBot.user.setUsername(name)
    
    const getBotAvatarURL = ()=> DiscordAppBot.user.avatarURL()
    
    const setBotAvatarURL = ({avatar}) => DiscordAppBot.user.setAvatar(avatar)

    const setBotActivity = ({name, url, type, shardID}) => DiscordAppBot.user.setActivity(name, {url, type, shardID})


    return {
        getBotUsername,
        setBotUsername,
        getBotAvatarURL,
        setBotAvatarURL,
        setBotActivity
    }
}

module.exports = comunicationBot
