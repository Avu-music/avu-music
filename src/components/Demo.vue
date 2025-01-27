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

  [data-tag='jazz'] {
    --tag-color: rgb(255, 238, 7);
  }

  [data-tag='electronic'] {
    --tag-color: rgb(157, 114, 236);
  }

  [data-tag='synthesizer'] {
    --tag-color: rgb(147, 220, 223);
  }

  [data-tag='pop'] {
    --tag-color: rgb(231, 169, 240);
  }

  [data-tag='action'] {
    --tag-color: rgb(245, 123, 123);
  }

  [data-tag='western'] {
    --tag-color: rgb(155, 128, 93);
  }

  [data-tag='country'] {
    --tag-color: rgb(209, 181, 121);
  }

  [data-tag='christmas'] {
    --tag-color: rgb(218, 230, 252);
  }

  [data-tag='epic'] {
    --tag-color: rgb(31, 233, 81);
  }

  @media screen and (max-width: 750px) {
    .title {
      font-size: 1.75rem;
    }
  }
</style>
