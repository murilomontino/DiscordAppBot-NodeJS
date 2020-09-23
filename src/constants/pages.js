import { lazy } from 'react'

const ADDRESS = require('./routes.json')

const Soundpad = lazy(()=> import('../pages/Soundpad'))
const Home = lazy(()=> import('../pages/Home'))
const Login = lazy(()=> import('../pages/Login'))
const Profile = lazy(()=> import('../pages/Profile') )
const Bestiary = lazy(()=> import('../pages/Bestiary'))

const PAGE = {
	Profile: {
		component: Profile, 
		route: ADDRESS.PROFILE.route,
		name: ADDRESS.PROFILE.name
	},
	Bestiary:{
		component: Bestiary, 
		route: ADDRESS.BESTIARY.route,
		name: ADDRESS.BESTIARY.name
	},
	Soundpad:{
		component: Soundpad, 
		route: ADDRESS.SOUNDPAD.route,
		name: ADDRESS.SOUNDPAD.name
	},
	Home:{
		component: Home, 
		route: ADDRESS.HOME.route,
		name: ADDRESS.HOME.name
	},
	Login:{
		component: Login, 
		route: ADDRESS.LOGIN.route,
		name: ADDRESS.LOGIN.name
	},
}

export default PAGE
