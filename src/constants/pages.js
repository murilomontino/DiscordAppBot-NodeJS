
const ADDRESS = require('./routes.json')

const ComponentHome = require('../pages/Home').default
const ComponentLogin = require('../pages/Login').default
const ComponentSoundpad = require('../pages/Soundpad').default
const ComponentProfile = require('../pages/Profile').default
const ComponentBestiary = require('../pages/Bestiary').default


const PAGE = {
	Profile: {
		component: ComponentProfile, 
		route: ADDRESS.PROFILE.route,
		name: ADDRESS.PROFILE.name
	},
	Bestiary:{
		component: ComponentBestiary, 
		route: ADDRESS.BESTIARY.route,
		name: ADDRESS.BESTIARY.name
	},
	Soundpad:{
		component: ComponentSoundpad, 
		route: ADDRESS.SOUNDPAD.route,
		name: ADDRESS.SOUNDPAD.name
	},
	Home:{
		component: ComponentHome, 
		route: ADDRESS.HOME.route,
		name: ADDRESS.HOME.name
	},
	Login:{
		component: ComponentLogin, 
		route: ADDRESS.LOGIN.route,
		name: ADDRESS.LOGIN.name
	},
}

export default PAGE
