/// <reference types="vite/client" />

declare module '$content' {
  import type { Translations, Demo, Project, General, Link, About } from './src/types'

  export const demos: Demo[]
  export const projects: Project[]
  export const translations: General
  export const links: Link[]
  export const about: About
}
