<template>
  <div class="note">
    <h1>This is a note page</h1>
    <p>C'est encore en construction</p>
    <Notes />
  </div>
</template>

<script>
// @ is an alias to /src
import Notes from '@/components/Notes.vue'

export default {
  name: 'NotesView',
  components: {
    Notes
  }
}
</script>
