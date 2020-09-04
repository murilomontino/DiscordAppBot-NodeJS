const { Client } = require('discord.js')

const commandsReader = require('./scripts/commandsReader')

class Bot extends Client {
    constructor(mainWindow, ...args) {
        super(...args)
        this.mainWindow = mainWindow
        this.config = require('./config/config.json')
        this.commands = commandsReader(this.config.prefix)

        this.on("ready", async () => {
            console.log(`${this.user.tag}`)

        })

        this.on("message", async msg => {

            let messageFormated =  `${msg.author.username}: ${msg.content}`
                        
            this.mainWindow.send('console/LOG', {messageFormated} )
            

            if (this.user.presence.status === 'online') {
                if (!msg.author.bot) {
                    console.log(`${msg.createdAt} ${msg.author.username}: ${msg.content}`)

                    const args = msg.content.split(" ")
                    if (this.commands[args[0]]) {
                        await this.commands[args[0]](this, msg)
                    }

                }
            }




        })

    }

    getCreator = async () => await this.clientApplication.owner.username

    logout = async () => {
        this.token = null
        setTimeout(async () => await this.user.setStatus('invisible'), 1000)
        console.log('Bot offline')
    }

    getOwner = async () => this.clientApplication.owner

    getDescription = async () => this.clientApplication.description

    async login(token) {
        await Client.prototype.login.call(this, token)
        this.clientApplication = await this.fetchApplication()
    }

}

module.exports = Bot