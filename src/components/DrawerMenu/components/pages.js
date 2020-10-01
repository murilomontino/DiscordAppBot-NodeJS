

const {
	PersonIcon,
	MusicNoteIcon,
	MenuBookIcon,
} = require('./components/icons').icons()

const ADDRESS = require('../../../constants/routes.json')

export const Page = [
	{ 
		icon: PersonIcon,
		title: ADDRESS.PROFILE.name,
		name: 'Perfil',
	},
	{
		icon: MenuBookIcon,
		title: ADDRESS.BESTIARY.name,
		name: 'Bestiario',
	},
	{
		icon: MusicNoteIcon,
		title: ADDRESS.SOUNDPAD.name,
		name: 'Perfil',
	}


]
  
export const EXIT = {
    
}
