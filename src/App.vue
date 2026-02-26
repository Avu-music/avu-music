<template>
  <Header />

  <main>
    <RouterView />
  </main>

  <LanguagePicker />
</template>

<script lang="ts" setup>
  import Header from './components/Header.vue'
  import LanguagePicker from './components/LanguagePicker.vue'
</script>
