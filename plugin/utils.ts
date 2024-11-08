import { fileURLToPath, URL } from 'node:url'
import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

import markdownIt from 'markdown-it'

const md = markdownIt()

export const publicPath = fileURLToPath(new URL(`../public`, import.meta.url))

export const getPublicJSONFiles = (path: string) => {
  return readdirSync(join(publicPath, path)).filter((file) => file.endsWith('.json'))
}

export const getPublicFileContent = (path: string) => {
  return readFileSync(join(publicPath, path)).toString()
}

export const getPublicFileJSON = <T = any>(path: string) => {
  return JSON.parse(getPublicFileContent(path)) as T
}

export const markdownToHTML = (markdown: string) => {
  return md.render(markdown)
}
