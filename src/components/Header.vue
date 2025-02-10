<template>
  <header>
    <h1>Björn Murra</h1>

    <nav>
      <a
        v-for="link in links"
        :key="link.to"
        :href="link.to"
        :class="link.to.includes('contact') ? 'standout' : ''"
      >
        {{ link.title }}
      </a>
    </nav>
  </header>
</template>

<script lang="ts" setup>
  import { useContent } from '@/hooks'

  const { links } = useContent()
</script>

<style scoped>
  header {
    margin-top: var(--giant-gap);
  }

  nav {
    display: flex;
    align-items: center;
    gap: calc(var(--gap) * 1.5);
  }

  a {
    text-decoration: none;
  }

  a:not(.standout):hover {
    text-decoration: underline;
  }

  a.standout {
    font-weight: 500;

    border: 1px solid var(--color);
    border-radius: var(--br);
    padding: 0.5em 0.75em;
  }

  a.standout:hover {
    background-color: var(--color);
    color: var(--background);
  }

  @media screen and (max-width: 55rem) {
    a.standout {
      border-width: 0px;
      padding: 0;
      font-weight: 400;
    }
  }
</style>
