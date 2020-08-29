const { Application } = require('spectron')
const assert = require('assert')
const electronPath = require('electron') // Require Electron from the binaries included in node_modules.
const path = require('path')

describe('Application launch', function () {
    this.timeout(3000)

    this.app = new Application({
        path: electronPath,
        args: [path.join(__dirname, '..')]
      })

    it('shows an initial window', async () => {
        if (!this.app.isRunning()){
            await this.app.start()
        }
        
        await this.app.client.waitUntilWindowLoaded()
        const count = await this.app.client.getWindowCount()
        assert.equal(count, 2)
        await this.app.stop()

    })


})