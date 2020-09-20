import Login from "../pages/Login";
import Home from "../pages/Home";


const router = require('./routes.json')

export const ADDRESS = {
    Login: router.LOGIN,
    Home: router.HOME,
    Profile: router.PROFILE,
    Bestiary: router.BESTIARY
}

export const PAGE = {
        
    Login,
    Home,
    
    
  
}


