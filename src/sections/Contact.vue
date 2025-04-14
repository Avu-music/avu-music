<template>
  <div id="contact">
    <span>{{ translations.contact.tagline }}</span>

    <div class="email">
      <span>avu.music</span>
      <span> @t-online.de </span>
    </div>

    <div class="social-media">
      <a href="https://www.youtube.com/@bjornmurra" target="_blank">
        <Youtube class="youtube-icon" />
        bjornmurra
      </a>

      <Wave class="wave" />

      <a href="https://www.instagram.com/bjornmurra" target="_blank">
        bjornmurra
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

    span {
      display: inline-block;
    }
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

    &:hover {
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 55rem) {
    .email {
      font-size: 2.75rem;
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
