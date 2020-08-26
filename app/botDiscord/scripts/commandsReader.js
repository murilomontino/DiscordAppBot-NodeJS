
const fs = require('fs')

const commandsReader = (prefix) =>{
        const dir = "app/botDiscord/commands/"
        const commandsDir = '../commands/'
        let commands = {};
        
        const scripts = fs.readdirSync(dir) 

        scripts.forEach(  script=> commands[prefix+script.split(".")[0]] = require(commandsDir+script))  
        return commands;
    
}

module.exports = commandsReader