import {
  foldInside,
  foldNodeProp,
  indentNodeProp,
  LanguageSupport,
  LRLanguage,
} from '@codemirror/language'
import { styleTags, tags } from '@lezer/highlight'
import { parser } from './parser.js'

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
      Application: (context) =>
        context.column(context.node.from) + context.unit,
    }),
    foldNodeProp.add({
      Application: foldInside,
    }),
  ],
})

const language = LRLanguage.define({
  parser: parserWithMetadata,
  languageData: {
    commentTokens: { line: '*' },
  },
})

export function traindown(): LanguageSupport {
  return new LanguageSupport(language, [])
}