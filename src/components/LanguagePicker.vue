<template>
  <div class="language-picker">
    <button aria-label="English" :data-selected="language === 'en'" @click="language = 'en'">
      🇺🇸
    </button>

    <button aria-label="Deutsch" :data-selected="language === 'de'" @click="language = 'de'">
      🇩🇪
    </button>
  </div>
</template>

<script lang="ts" setup>
  import { language } from '@/hooks'
</script>

<style scoped>
  .language-picker {
    position: fixed;
    right: 0;
    bottom: 0;

    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    padding: var(--gap);

    z-index: 10;
  }

  .language-picker button {
    background: none;
    border: none;

    padding: 0.25rem;
    font-size: 1rem;

    cursor: pointer;
  }

  .language-picker [data-selected='true'] {
    background: var(--accent);
    border-radius: var(--br);
  }
</style>
