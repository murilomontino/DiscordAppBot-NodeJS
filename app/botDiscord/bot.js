const { Client } = require('discord.js')

const commandsReader = require('./scripts/commandsReader')

class Bot extends Client{
    constructor(...args){
        super(...args)
        
        this.config = require('./config/config.json')
        this.commands = commandsReader(this.config.prefix)

        this.on("ready", () =>{
            console.log(`${this.user.tag}`)
        })

        this.on("message", async msg => {
           if(this.user.presence.status === 'online'){
                if(!msg.author.bot){
                    console.log(`${msg.author.username}: ${msg.content}`)
            
                    const args = msg.content.split(" ")
                    if(this.commands[args[0]]) {
                        await this.commands[args[0]](this,msg)        
                    }
                    
                }
            }
          
        
        
            
        })
        
    }
    
  
    logout = async () =>{
        this.token = null
        setTimeout(async ()=>await this.user.setStatus('invisible'), 1000)
        console.log('Bot offline')
    }

    getOwner = () => this.clientApplication.owner

    getDescription = () => this.clientApplication.description

    async login(token){
        await Client.prototype.login.call(this, token)
        this.clientApplication = await this.fetchApplication()
    }

}

module.exports = Bot