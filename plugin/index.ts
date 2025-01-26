import { readFileSync } from 'node:fs'
import { join } from 'node:path'

import type { Plugin } from 'vite'

import chokidar from 'chokidar'
import fm, { FrontMatterResult } from 'front-matter'

import {
  publicPath,
  getPublicFileContent,
  getPublicJSONFiles,
  getPublicFileJSON,
  markdownToHTML
} from './utils'

export type AboutFrontMatter = {
  title: string
}

export const content = (): Plugin => ({
  name: 'content',

  resolveId(id) {
    if (id === '$content') {
      return '$content-resolved'
    }
  },

  async load(id) {
    if (id === '$content-resolved') {
      const translations = getPublicFileJSON('translations/general.json')
      const links = getPublicFileJSON('translations/links.json')

      return `
        export const demos =  ${JSON.stringify(getDemos())};
        export const projects = ${JSON.stringify(getProjects())};
        export const translations = ${JSON.stringify(translations)};
        export const links = ${JSON.stringify(links)};
        export const about = ${JSON.stringify(getAbout())}
      `
    }
  },

  configureServer(server) {
    chokidar.watch(publicPath).on('change', () => {
      const mod = server.moduleGraph.getModuleById('$content-resolved')

      if (mod) {
        server.reloadModule(mod)
      }
    })
  }
})

const getDemos = () => {
  const demoFiles = getPublicJSONFiles('demos')

  return demoFiles.map((file) => {
    const path = join(publicPath, `/demos/${file}`)

    return {
      ...JSON.parse(readFileSync(path).toString()),
      url: `/avu-music/demos/${file}`.replace('.json', '.wav')
    }
  })
}

const getProjects = () => {
  const projectFiles = getPublicJSONFiles('projects')

  return projectFiles.map((file) => {
    const path = join(publicPath, `/projects/${file}`)

    return JSON.parse(readFileSync(path).toString())
  })
}

const getAbout = () => {
  const toPage = (page: FrontMatterResult<AboutFrontMatter>) => ({
    title: page.attributes.title,
    body: markdownToHTML(page.body)
  })

  return {
    en: toPage(fm<AboutFrontMatter>(getPublicFileContent('about.en.md'))),
    de: toPage(fm<AboutFrontMatter>(getPublicFileContent('about.de.md')))
  }
}
