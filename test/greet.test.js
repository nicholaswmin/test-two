import test from 'node:test'

import { greet } from '../src/index.js'

test('#greet', async t => {
   await t.test('returns a result', async t => {
     const result = await greet()
     
     t.assert.ok(result, 'result is falsy, exp. truthy')
   })
   
   await t.test('returns a greeting', async t => {
     const result = await greet()
     
     t.assert.strictEqual(result, 'Hello')
   })
})
