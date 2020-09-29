// const {Client} = require('discord.js')
// const guilds = Client.prototype.guilds.cache
// guilds.forEach( guild => {
// 	console.log('------------------------')
// 	console.log(guild.iconURL())
// 	console.log(`ID: ${guild.id}`)
// 	console.log(`Name: ${guild.name}`)
// 	console.log(`Description: ${guild.description}`)
// 	console.log(`memberCount: ${guild.memberCount}`)
// 	guild.owner.user.username
    
// })



const comunicationGuild = (DiscordAppBot) => {
    

	const getGuilds = async () => {
		let ArrayGuilds = []
		const guilds = await DiscordAppBot.guilds.cache
        
        
		guilds.forEach( async guild => {
			const owner = await guild.owner.user.fetch()
			ArrayGuilds.push({
				icon: guild.iconURL(),
				id: guild.id,
				name: guild.name,
				description: guild.description,
				memberCount: guild.memberCount,
				owner: owner.username

			})
    
            
		})

		return ArrayGuilds
	}
    
	return {
		getGuilds
	}
}

module.exports = comunicationGuild