
import Login from "../pages/Login";
import Home from "../pages/Home";


const router = require('./routes.json')

export const PAGE = {
    login: {
        address: router.LOGIN,
        Login
    },
    home: {
        address: router.HOME,
        Home
    }
        
}



