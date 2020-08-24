

const commandsReader = (prefix) =>{
        const dir = "src/botDiscord/commands/"
        let commands = {};
    
        const fs = window.require('fs');
            const scripts = fs.readdirSync(dir)
            scripts.forEach(script=>{
                commands[prefix+script.split(".")[0]] = window.require("../"+dir+script);
            })
       
        
        return commands;
    
}

export default commandsReader