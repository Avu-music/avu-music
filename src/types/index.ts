export type Translations<T> = {
  en: T
  de: T
}

export type Translated<T extends Translations<any>> = Omit<T, 'en' | 'de'> & T['en']

export type Demo = Translations<{
  title: string
  tags: string[]
}> & {
  url: string
}

export type Project = Translations<{
  title: string
  subtitle?: string
}> & {
  link?: string
  youtube?: string
  instagram?: string
  image: string
}

export type Link = Translations<string> & {
  to: string
}

export type General = Translations<{
  title: string
  play: string
  pause: string
  volume: string

  demos: {
    title: string
  }

  projects: {
    title: string
  }

  contact: {
    tagline: string
  }
}>

export type About = Translations<{
  title: string
  body: string
}>
