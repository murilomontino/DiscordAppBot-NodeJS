const Discord = require('discord.js')
const Client = new Discord.Client()

let prefix   = "!"

const commands = require("./scripts/commandsReader")(prefix)

Client.on("ready", () =>{
    console.log(`${Client.user.tag}`)

})

Client.on("message", msg => {
    if(!msg.author.bot){
        console.log(`${msg.author.username}: ${msg.content}`);
        const args = msg.content.split(" ");
        if(commands[args[0]]) commands[args[0]](Client,msg);
    }

    
})
Client.login("NzE1NjgyMDcxOTQyNTI5MTM0.XuW_-w.UGFoK5PZ38PADlRy3qyrNGJk_1Q")
