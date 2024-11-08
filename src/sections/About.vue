<template>
  <div id="about">
    <div class="text">
      <h2>{{ about.title }}</h2>

      <div v-html="about.body" />
    </div>

    <div class="image">
      <img
        src="/photos/portrait.png"
        alt=""
        height="1828"
        width="1504"
        style="background-image: url(/photos/portrait-low-quality.jpg)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useContent } from '@/hooks'

  const { about } = useContent()
</script>

<style scoped>
  .text {
    margin: auto 0;
  }

  .text,
  .text div {
    display: flex;
    flex-direction: column;
    gap: var(--gap);
  }
</style>
