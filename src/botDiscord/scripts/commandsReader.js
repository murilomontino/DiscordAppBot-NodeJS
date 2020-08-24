import isElectron from 'is-electron'


const commandsReader = (prefix) =>{
        const dir = "src/botDiscord/commands/"
        let commands = {};
        
        const electron = require('electron')
        const remote = electron.remote
        const fs = remote.require('fs')
        fs.readdirSync()

        if (isElectron()) {
            const fs = window.require('fs');
            const scripts = fs.readdirSync(dir)
            scripts.forEach(script=>{
                commands[prefix+script.split(".")[0]] = window.require("../"+dir+script);
            });
        }
        
        return commands;
    
}

export default commandsReader