
jest.mock('../app/comunication.js')
jest.mock('../app/botDiscord/bot.js')
jest.mock('electron')

const { app } = require('electron')
const { getBotUsername, setBotUsername } = require('../app/comunication.js')

describe('Comunication Bot', () => {
    
    it('Nome Bot',()=>{
        expect(getBotUsername()).toBeUndefined()
    })

})
