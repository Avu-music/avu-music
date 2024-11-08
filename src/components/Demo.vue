<template>
  <button @click="src === url ? (src = undefined) : (src = url)">
    <Pause v-if="src === url" :aria-label="translations.pause" />
    <Play v-else :aria-label="translations.play" />

    <span class="title">{{ title }}</span>
  </button>

  <div class="tags">
    <span v-for="tag in tags" :key="tag" :data-tag="tag" class="tag">{{ tag }}</span>
  </div>
</template>

<script lang="ts" setup>
  import type { Demo } from '@/types'
  import { src } from '@/store'

  import { useContent } from '@/hooks'

  import Play from '@/assets/icons/Play.vue'
  import Pause from '@/assets/icons/Pause.vue'

  defineProps<Demo['en'] & { url: string }>()

  const { translations } = useContent()
</script>

<style scoped>
  button {
    text-transform: lowercase;
    white-space: nowrap;
    max-width: fit-content;
  }

  button:focus-visible,
  button:hover {
    text-transform: uppercase;
    outline: none;
    text-decoration: underline;
  }

  .title {
    font-family: Syne, Georgia;
    font-size: 2.25rem;
    font-weight: 500;

    padding-left: calc(var(--gap) / 2);
  }

  .tags {
    display: flex;
    align-items: center;
    gap: calc(var(--gap) / 2);
  }

  .tag {
    --tag-color: rgb(194, 194, 194);

    font-weight: 600;

    background-color: hsl(from var(--tag-color) h s l / 0.25);
    color: var(--tag-color);

    padding: 4px 5px;
    border-radius: var(--br);
  }

  [data-tag='orchestral'] {
    --tag-color: rgb(114, 163, 255);
  }

  [data-tag='epic'],
  [data-tag='epos'] {
    --tag-color: rgb(235, 146, 204);
  }

  @media screen and (max-width: 750px) {
    .title {
      font-size: 1.75rem;
    }
  }
</style>
