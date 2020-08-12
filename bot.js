const Discord = require('discord.js')
const Config = require('./config/config.json')

class Bot extends Discord.Client{
    constructor(...args){
        super(...args)
        this.commands = require("./scripts/commandsReader")(Config.prefix)
        this.config = require('./config/config.json')

        this.on("ready", () =>{
            console.log(`${this.user.tag}`)
        
        })

        this.on("message", async msg => {
            if(!msg.author.bot){
                console.log(`${msg.author.username}: ${msg.content}`)
        
                const args = msg.content.split(" ")
                if(Client.commands[args[0]]) {
                    await Client.commands[args[0]](Client,msg)        
                }
                
            }
        
            
        })

        this.login(this.config.token)
    }

}

module.exports = Bot