<template>
  <div id="hero">
    <h2>
      {{ translations.title }}
    </h2>
  </div>
</template>

<script lang="ts" setup>
  import { useContent } from '@/hooks'

  const { translations } = useContent()
</script>

<style scoped>
  #hero {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    gap: var(--gap);

    padding-top: calc(var(--giant-gap) * 2);
  }

  h2 {
    font-size: 3rem;
    white-space: pre;
    text-align: center;
  }

  @media screen and (max-width: 55rem) {
    h2 {
      white-space: normal;
      text-align: center;
    }
  }
</style>
