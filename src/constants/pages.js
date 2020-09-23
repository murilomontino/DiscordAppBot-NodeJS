import { lazy } from 'react'
// import Profile from '../../../pages/Profile'
// import Bestiary from '../../../pages/Bestiary'

const Soundpad = lazy(()=> import('../pages/Soundpad'))
const Home = lazy(()=> import('../pages/Home'))
const Login = lazy(()=> import('../pages/Login'))
const Profile = lazy(()=> import('../pages/Profile') )
const Bestiary = lazy(()=> import('../pages/Bestiary'))
const PAGE = {
	Profile,
	Bestiary,
	Soundpad,
	Home,
	Login
}

export default PAGE
