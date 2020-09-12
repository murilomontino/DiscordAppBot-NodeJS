const { Client } = require('discord.js')

const commandsReader = require('./scripts/commandsReader')

const date = (msg) => {
    const day = msg.createdAt.getDate()<10? `0${msg.createdAt.getDate()}`: msg.createdAt.getDate()
    const month = msg.createdAt.getMonth()<10? `0${msg.createdAt.getMonth()}`: msg.createdAt.getMonth()
    const year = msg.createdAt.getFullYear()
    const hour = msg.createdAt.getHours()<10? `0${msg.createdAt.getHours()}`: msg.createdAt.getHours()
    const minutes = msg.createdAt.getMinutes()<10? `0${msg.createdAt.getMinutes()}`: msg.createdAt.getMinutes()

    return  `${day}/${month}/${year} (${hour}:${minutes})`
}

class Bot extends Client {
    constructor(webContents, ...args) {
        super(...args)
        this.webContents = webContents
        this.config = require('./config/config.json')
        this.commands = commandsReader(this.config.prefix)

        this.on("ready", async () => {
            console.log(`${this.user.tag}`)

        })

        

        this.on("message", async msg => {

           
            const messageFormated =  `${date(msg)} ${msg.author.username}: ${msg.content}`
                        
            if (this.user.presence.status === 'online') {

                this.webContents.send('console/LOG', {messageFormated} )
                if (!msg.author.bot) {

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