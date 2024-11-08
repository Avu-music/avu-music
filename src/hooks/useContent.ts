import { ref, computed, type ComputedRef } from 'vue'
import { demos, projects, translations, links, about } from '$content'

import type { About, Demo, General, Project, Translated } from '@/types'

export const language = ref<'en' | 'de'>('en')

type Content = {
  demos: ComputedRef<Translated<Demo>[]>
  projects: ComputedRef<Translated<Project>[]>
  translations: ComputedRef<Translated<General>>
  links: ComputedRef<{ title: string; to: string }[]>
  about: ComputedRef<Translated<About>>
}

export const useContent = (): Content => ({
  demos: computed(() => {
    return demos.map((demo) => ({
      ...demo[language.value],
      url: demo.url
    }))
  }),

  projects: computed(() => {
    return projects.map((project) => ({
      ...project[language.value],
      image: project.image,
      youtube: project.youtube,
      instagram: project.instagram,
      link: project.link
    }))
  }),

  translations: computed(() => {
    return translations[language.value]
  }),

  links: computed(() => {
    return links.map((link) => {
      return {
        title: link[language.value],
        to: link.to
      }
    })
  }),

  about: computed(() => {
    return about[language.value]
  })
})
