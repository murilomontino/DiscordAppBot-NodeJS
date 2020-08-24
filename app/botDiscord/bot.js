const Discord = require('discord.js')

const commandsReader = require('./scripts/commandsReader')

class Bot extends Discord.Client{
    constructor(...args){
        super(...args)
        
        this.config = require('./config/config.json')
        this.commands = commandsReader(this.config.prefix)
        

        this.on("ready", () =>{
            console.log(`${this.user.tag}`)
        
        })

        this.on("message", async msg => {
            if(!msg.author.bot){
                console.log(`${msg.author.username}: ${msg.content}`)
        
                const args = msg.content.split(" ")
                if(this.commands[args[0]]) {
                    await this.commands[args[0]](this,msg)        
                }
                
            }
        
            
        })
        
        this.Login = (token) =>{
            try {
                this.login(this.config.token)
                console.log('Suceffuly')
            } catch (error) {
                
            }
            
            
        }
        
    }

}

module.exports = Bot