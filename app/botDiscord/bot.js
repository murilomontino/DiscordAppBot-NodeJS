import commandsReader from './scripts/commandsReader'
import Discord from 'discord.js'


const Config = require('./config/config.json')

class Bot extends Discord.Client{
    constructor(...args){
        super(...args)
        this.commands = ( () => {
            return commandsReader(Config.prefix)
        })()
        this.config = require('./config/config.json')

        this.on("ready", ( ) =>{
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

export default Bot