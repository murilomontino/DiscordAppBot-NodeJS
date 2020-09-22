const Application = require('spectron').Application
const electronPath = require('electron') // Require Electron from the binaries included in node_modules.

function initialiseSpectron() {
	let pathElectron = electronPath
	const appPath = 'E:/Workspace/DiscordAppBot-NodeJS/botapp/build/electron.js'
	
	return new Application({
		path: pathElectron,
		args: [appPath],
		env: {
			ELECTRON_ENABLE_LOGGING: true,
			ELECTRON_ENABLE_STACK_DUMPING: true
		},
		chromeDriverLogPath: '../chromedriverlog.txt'
	})
}

module.exports = initialiseSpectron