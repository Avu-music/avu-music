<template>
  <div id="projects">
    <h2>{{ translations.projects.title }}</h2>

    <div
      v-for="project in projects"
      :key="project.image"
      class="project"
      :style="`background-image: url(${project.image})`"
    >
      <div class="socials" v-if="project.youtube || project.instagram">
        <a v-if="project.youtube" :href="project.youtube" aria-label="YouTube" target="_blank">
          <Youtube class="youtube-icon" />
        </a>

        <a
          v-if="project.instagram"
          :href="project.instagram"
          aria-label="Instagram"
          target="_blank"
        >
          <Instagram class="instagram-icon" />
        </a>
      </div>

      <div v-if="project.subtitle" class="subtitle">
        {{ project.subtitle }}
      </div>

      <component
        :is="project.link ? 'a' : 'span'"
        :href="project.link"
        class="title"
        target="_blank"
      >
        {{ project.title }}
        <span v-if="project.link">→</span>
      </component>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useContent } from '@/hooks'

  import Youtube from '../assets/icons/Youtube.vue'
  import Instagram from '../assets/icons/Instagram.vue'

  const { projects, translations } = useContent()
</script>

<style scoped>
  h2 {
    text-align: right;
  }

  .project {
    position: relative;
    width: calc(30% - var(--gap));
    height: 15rem;

    padding: var(--gap);
    border-radius: var(--br);

    background-color: var(--image-fallback-background);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    transition: transform 0.2s;

    text-decoration: none;
    font-weight: 600;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .project::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;

    background: rgb(17, 19, 22);
    background: linear-gradient(0deg, rgba(17, 19, 22, 0.9) 30%, transparent 100%);

    height: 75%;
    width: 100%;
  }

  .project:hover {
    transform: scale(1.1) rotate(-5deg);
  }

  .project > * {
    color: var(--color);
    z-index: 1;
  }

  .title {
    font-size: 1.25rem;
  }

  .title:has(+ *) {
    padding-bottom: 0.5em;
  }

  .subtitle {
    opacity: 0.75;
    font-style: italic;
    font-size: 1rem;
    padding-bottom: 0.5em;
  }

  .socials {
    display: flex;
    gap: 0.5em;

    padding-bottom: 0.5em;
  }

  .instagram-icon,
  .youtube-icon {
    height: 1.25rem;
  }

  a {
    text-decoration: none;
  }

  @media screen and (max-width: 55rem) {
    h2 {
      text-align: center;
    }

    .project {
      width: 10rem;
    }
  }
</style>
