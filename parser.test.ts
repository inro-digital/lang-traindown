import { assertEquals } from 'jsr:@std/assert'
import { parser } from './parser.js'

Deno.test('basic parsing', () => {
  assertEquals(
    parser.parse(`@ 1/1/2020
      * This is a Traindown scratch pad
      * Practice your knowledge of Traindown!
      # Good time?: YES
      Squat:
        500 10r 5s 3F
        100 2r
        +Pullups: bw+20
    `).toString(),
    `
      File(
        Date(DateValue),
        Note(NoteValue),
        Note(NoteValue),
        Meta(MetaName,MetaValue),
        Movement(MovementName,Load,Rep,Set,Failure,Load,Rep),
        Movement(SuperSetMovementName,Load)
      )
      `.replace(/(\n|\s)/g, ''),
  )
})
