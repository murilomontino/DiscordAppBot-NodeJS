const comunicationBot = (CLient) => {

    const DiscordAppBot = CLient

    const getBotUsername = () => DiscordAppBot.user.username

    const getBotTag = () => DiscordAppBot.user.tag

    const setBotUsername =({name}) => DiscordAppBot.user.setUsername(name)
    
    const getBotAvatarURL = ()=> DiscordAppBot.user.avatarURL()
    
    const setBotAvatarURL = ({avatar}) => DiscordAppBot.user.setAvatar(avatar)

    const setBotActivity = ({name, url, type, shardID}) => DiscordAppBot.user.setActivity(name, {url, type, shardID})

    const getBotOnwerApplication = () => DiscordAppBot.getOwner()

    const getCreatorBotName = async () => {
        const { username } = await DiscordAppBot.getOwner()
        return username
    }
    
    const getBotDescriptionApplication = async () => await DiscordAppBot.getDescription()

    const getBotStatus = async () => {
        const {status} = await DiscordAppBot.user.presence
        return status    
    }

    return {
        getBotUsername,
        getBotTag,
        setBotUsername,
        getBotAvatarURL,
        setBotAvatarURL,
        setBotActivity,
        getBotOnwerApplication,
        getBotDescriptionApplication,
        getCreatorBotName,
        getBotStatus
    }
}

module.exports = comunicationBot
