<template>
  <path :d = 'd'>

  </path>
</template>

<script>
export default {
  props: ['value', 'arc'],

  computed: {
    d() {
      return this.arc(this.value);
    }
  }
}
</script>
