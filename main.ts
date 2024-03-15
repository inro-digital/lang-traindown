import {parser} from "./parser.js"
import {highlightCode, classHighlighter} from "@lezer/highlight"

let code = `
@ 1/1/2020

* This is a Traindown scratch pad
* Practice your knowledge of Traindown!

# Good time?: YES

Squat: 500 10r 5s

`

function emit(text, classes) {
  console.log(text, classes)
}
function emitBreak() {
  console.log("break")
}

highlightCode(code, parser.parse(code), classHighlighter, emit, emitBreak)
