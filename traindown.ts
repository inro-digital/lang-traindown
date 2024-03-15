import {parser} from "./parser.js"
import {foldNodeProp, foldInside, indentNodeProp} from "npm:@codemirror/language"
import {styleTags, tags } from "npm:@lezer/highlight"
import {LRLanguage, LanguageSupport} from "npm:@codemirror/language"

const parserWithMetadata = parser.configure({
  props: [
    styleTags({
      Note: tags.lineComment,
      Date: tags.string,
      MetaKey: tags.meta,

      Movement: tags.heading,
      Load: tags.strong,
      Rep: tags.number,
      Set: tags.string,
      Failure: tags.bool,
    }),
    indentNodeProp.add({
      Application: context => context.column(context.node.from) + context.unit
    }),
    foldNodeProp.add({
      Application: foldInside
    })
  ]
})

const language = LRLanguage.define({
  parser: parserWithMetadata,
  languageData: {
    commentTokens: { line: "*" }
  }
})

export function traindown() {
  return new LanguageSupport(language, [])
}
