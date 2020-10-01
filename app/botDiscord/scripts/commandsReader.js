
const fs = require('fs')
const path = require('path')

const commandsReader = (prefix) =>{
	const dir = path.resolve(__dirname, '..', 'commands')
	let commands = {}
	const dirCommands = '../commands/'
	const scripts = fs.readdirSync(dir) 
	scripts.forEach(  script=> commands[prefix+script.split('.')[0]] = require(dirCommands + script))  
	return commands
    
}

module.exports = commandsReader