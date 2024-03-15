import {styleTags, tags} from "@lezer/highlight"

export const highlighting = styleTags({
  Note: tags.lineComment,
  Date: tags.string,
  MetaKey: tags.meta,

  Movement: tags.heading,
  Load: tags.strong,
  Rep: tags.number,
  Set: tags.string,
  Failure: tags.bool,
})
