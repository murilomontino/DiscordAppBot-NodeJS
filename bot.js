const Discord = require('discord.js')
const Client = new Discord.Client()
const Config = require('./config/config.json')


const commands = require("./scripts/commandsReader")(Config.prefix)

Client.on("ready", () =>{
    console.log(`${Client.user.tag}`)

})

Client.on("message", msg => {
    if(!msg.author.bot){
        console.log(`${msg.author.username}: ${msg.content}`)
        const args = msg.content.split(" ")
        if(commands[args[0]]) commands[args[0]](Client,msg)
    }

    
})

Client.login(Config.token)
