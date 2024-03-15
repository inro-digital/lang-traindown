import { assertEquals } from 'jsr:@std/assert'
import { parser } from './parser.js'

Deno.test('basic parsing', () => {
  assertEquals(
    parser.parse(`
      @ 1/1/2020

      * This is a Traindown scratch pad
      * Practice your knowledge of Traindown!

      # Good time?: YES

      Squat: 500 10r 5s
      `).toString(),
    'File(Date,Note,Note,MetaKey,Movement,Load,Rep,Set)',
  )
})
