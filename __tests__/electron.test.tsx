jest.mock('electron')

const app = window.require('electron').remote.getCurrentWindow().show();
const Login = require('../src/pages/Login/')

describe('comunication', ()=>{
        it('window is visible?', ()=>{
            expect(app.isVisible()).toBe(true)
        })

})