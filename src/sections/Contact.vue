<template>
  <div id="contact">
    <span>{{ translations.contact.tagline }}</span>
    <span class="email">avu@avu-music.com</span>

    <div class="social-media">
      <a href="https://www.youtube.com/@avu.composer">
        <Youtube class="youtube-icon" />
        avu.composer
      </a>

      <Wave class="wave" />

      <a href="https://www.instagram.com/avu.music/">
        avu.music
        <Instagram class="instagram-icon" />
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useContent } from '@/hooks'

  import Wave from '../assets/icons/Wave.vue'
  import Youtube from '../assets/icons/Youtube.vue'
  import Instagram from '../assets/icons/Instagram.vue'

  const { translations } = useContent()
</script>

<style scoped>
  #contact {
    display: grid;
    text-align: center;
    place-content: center;

    padding: calc(var(--giant-gap) * 2) var(--giant-gap);
    font-size: 1.25rem;
  }

  .email {
    font-size: 4rem;
    font-family: Syne, Georgia;
    font-weight: 700;

    padding-top: var(--gap);
  }

  .social-media {
    display: flex;
    gap: var(--gap);
    justify-content: center;
    align-items: center;
    padding-top: var(--giant-gap);
  }

  .wave {
    width: 8rem;
  }

  .instagram-icon,
  .youtube-icon {
    height: 1.5rem;
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    padding-top: 1rem;
    gap: var(--gap);
  }

  @media screen and (max-width: 750px) {
    .email {
      font-size: 3.5rem;
    }

    .wave {
      width: 6rem;
    }

    a {
      font-size: 0.8rem;
      gap: calc(var(--gap) / 2);
    }
  }
</style>
