<template>
  <Hero />
  <Demos />
  <Projects />
  <About />
  <Contact />

  <div style="text-align: center; padding-block-end: 6rem">
    <router-link :to="{ name: 'imprint' }"> Imprint </router-link>
  </div>
</template>

<script lang="ts" setup>
  import Hero from '../sections/Hero.vue'
  import Demos from '../sections/Demos.vue'
  import Projects from '../sections/Projects.vue'
  import About from '../sections/About.vue'
  import Contact from '../sections/Contact.vue'
</script>
