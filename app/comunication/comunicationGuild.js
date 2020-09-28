// const {Client} = require('discord.js')
// const guilds = Client.prototype.guilds.cache
// guilds.forEach( guild => {
//     console.log('------------------------')
//     console.log(guild.iconURL())
//     console.log(`ID: ${guild.id}`)
//     console.log(`Name: ${guild.name}`)
//     console.log(`Description: ${guild.description}`)
//     console.log(`memberCount: ${guild.memberCount}`)

    
// })



const comunicationGuild = (DiscordAppBot) => {
    

	const getGuilds = async () => {
		let ArrayGuilds = []
		const guilds = await DiscordAppBot.guilds.cache
        
        
		guilds.forEach( guild => {
            
			ArrayGuilds.push({
				icon: guild.iconURL(),
				id: guild.id,
				name: guild.name,
				description: guild.description,
				memberCount: guild.memberCount

			})
    
            
		})

		return ArrayGuilds
	}
    
	return {
		getGuilds
	}
}

module.exports = comunicationGuild