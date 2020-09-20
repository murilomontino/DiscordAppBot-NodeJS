const assert = require('assert');
const path = require('path');
const {Application} = require('spectron');

// construct paths
const baseDir = path.join(__dirname, '..');
const electronBinary = path.join(baseDir, 'node_modules', '.bin', 'electron');

// utility functions

describe('Application launch', function () {

    
    let app = new Application({
      path: electronBinary,
      args: [baseDir],
    })

    

    it('should ', async () => {
      app = await app.start()
      const count = app.client.isChrome
      assert.strictEqual(count, true);
    });


  


})

