

const {
	PersonIcon,
	MusicNoteIcon,
	MenuBookIcon,
	ExitToAppIcon
} = require('./icons').icons()

const ADDRESS = require('../../../constants/routes.json')

export const ComponentItemMenu = [
	{
		id: 1,
		icon: PersonIcon,
		title: ADDRESS.PROFILE.name,
		name: 'Perfil'
	},
	{
		id: 2,
		icon: MenuBookIcon,
		title: ADDRESS.BESTIARY.name,
		name: 'Bestiario',
	},
	{
		id: 3,
		icon: MusicNoteIcon,
		title: ADDRESS.SOUNDPAD.name,
		name: 'Soundpad',
	}


]

export const EXIT = {
	icon: ExitToAppIcon,
	name: 'Logout',
}
