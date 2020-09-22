/* eslint-disable no-undef */

const initialiseSpectron = require('./application.spectron')
const assert = require('assert')

const mocha = require('mocha')

describe = mocha.describe
it = mocha.it
beforeEach = mocha.beforeEach
afterEach = mocha.afterEach

describe.only('visible window', () => {
	
	
	let app = initialiseSpectron()

	beforeEach((done) => {
		return app.start().then(
			response => app = response
		).catch(done)

	})
	
	afterEach( (done) => {
		if (app && app.isRunning()) {
			app.stop().then(() => done()).catch(done)
		}
		done()
	})

	it('visible window', (done)=>{
		app.client.getWindowCount().then(
			count => {assert.strictEqual(count, 1)}
		).catch(done)
		done()
	})

}).timeout(10000)