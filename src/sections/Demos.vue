<template>
  <div id="demos">
    <div class="image">
      <img
        src="/photos/guitar.png"
        alt=""
        height="2029"
        width="1619"
        style="background-image: url(/photos/guitar-low-quality.jpg)"
      />
    </div>

    <div class="text">
      <h2>{{ translations.demos.title }}</h2>

      <AudioPlayer />

      <ul>
        <li v-for="demo in demos" :key="demo.url">
          <Demo v-bind="demo" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useContent } from '@/hooks'

  import Demo from '@/components/Demo.vue'
  import AudioPlayer from '@/components/AudioPlayer.vue'

  const { demos, translations } = useContent()
</script>

<style scoped>
  h2 {
    margin-bottom: var(--gap);
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: var(--gap);
    margin: auto 0;
    padding: var(--gap) var(--giant-gap) var(--gap) var(--gap);
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: var(--gap);
    margin-top: var(--gap);
  }

  li {
    list-style: none;

    display: flex;
    align-items: center;
    gap: var(--gap);
  }

  @media screen and (max-width: 70rem) {
    li {
      flex-wrap: wrap;
    }
  }

  @media screen and (max-width: 55rem) {
    .text {
      padding: var(--giant-gap);
    }

    li {
      align-self: flex-start;
      justify-content: flex-start;
      flex-wrap: wrap;
    }

    li > * {
      width: 100%;
    }
  }
</style>
