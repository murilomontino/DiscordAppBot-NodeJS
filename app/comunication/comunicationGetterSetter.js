const comunicationBot = (CLient) => {

    const DiscordAppBot = CLient

    const getBotUsername = () => DiscordAppBot.user.username

    const getBotStatus = () => DiscordAppBot.user.presence.status

    const getBotTag = () => DiscordAppBot.user.client.owner

    const setBotUsername =({name}) => DiscordAppBot.user.setUsername(name)
    
    const getBotAvatarURL = ()=> DiscordAppBot.user.avatarURL()
    
    const setBotAvatarURL = ({avatar}) => DiscordAppBot.user.setAvatar(avatar)

    const setBotActivity = ({name, url, type, shardID}) => DiscordAppBot.user.setActivity(name, {url, type, shardID})

    const getBotOnwerApplication = () => DiscordAppBot.getOwner()
    
    const getBotDescriptionApplication = () => DiscordAppBot.getDescription()


    return {
        getBotUsername,
        getBotStatus,
        getBotTag,
        setBotUsername,
        getBotAvatarURL,
        setBotAvatarURL,
        setBotActivity,
        getBotOnwerApplication,
        getBotDescriptionApplication
    }
}

module.exports = comunicationBot
