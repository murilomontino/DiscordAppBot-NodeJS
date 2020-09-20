import Login from "../../../pages/Login";
import Home from "../../../pages/Home";
import Profile from "../../../pages/Profile";
import Bestiary from "../../../pages/Bestiary";


const router = require('./routes_test.json')

export const ADDRESS = {
    Login: router.LOGIN,
    Home: router.HOME,
    Profile: router.PROFILE,
    Bestiary: router.BESTIARY
}

export const PAGE = {
        
    Login,
    Home,
    Profile,
    Bestiary
    
  
}



