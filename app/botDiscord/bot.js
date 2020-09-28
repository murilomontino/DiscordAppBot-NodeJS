import { Client } from 'discord.js'

const commandsReader = require('./scripts/commandsReader')

const { date_formmater } = require('../utils').default()

class Bot extends Client {
	constructor(webContents, configuration, ...args) {
		super(...args)
		this.webContents = webContents
		this.config = configuration
		this.commands = commandsReader(this.config.prefix)

		this.on('ready', async () => {
			console.log(`${this.user.tag}`)

		})

        

		this.on('message', async msg => {

           
			const messageFormated =  `${date_formmater(msg)} ${msg.author.username}: ${msg.content}`
                        
			if (this.user.presence.status === 'online') {

				this.webContents.send('console/LOG', {messageFormated} )
				if (!msg.author.bot) {

					const args = msg.content.split(' ')
					if (this.commands[args[0]]) {
						await this.commands[args[0]](this, msg)
					}

				}
			}




		})

	}

	async getCreator(){ 
		return await this.clientApplication.owner.username
	}

	async logout(){
		this.token = null
		setTimeout(async () => await this.user.setStatus('invisible'), 1000)
		console.log('Bot offline')
	}

	async getOwner()  {
		return this.clientApplication.owner
	}

	async getDescription() {
		return  this.clientApplication.description
	}

	async login(token) {
		await Client.prototype.login.call(this, token)
		this.clientApplication = await this.fetchApplication()
	}

}

module.exports = Bot