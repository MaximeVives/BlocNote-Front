<template>
  <div class="about">
    <h1>This is an about page</h1>
    <About />
  </div>
</template>

<script>
// @ is an alias to /src
import About from '@/components/About.vue'

export default {
  name: 'AboutView',
  components: {
    About
  }
}
</script>
