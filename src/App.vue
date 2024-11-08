<template>
  <Header />

  <main>
    <Hero />
    <Demos />
    <Projects />
    <About />
    <Contact />
  </main>

  <LanguagePicker />
</template>

<script lang="ts" setup>
  import Header from './components/Header.vue'

  import Hero from './sections/Hero.vue'
  import Demos from './sections/Demos.vue'
  import Projects from './sections/Projects.vue'
  import About from './sections/About.vue'
  import Contact from './sections/Contact.vue'

  import LanguagePicker from './components/LanguagePicker.vue'
</script>
