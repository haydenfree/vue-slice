<template>
  <li @click='toggle'>
    <div :style='styleObject'></div>{{label}}
  </li>
</template>


<script>
export default {
  props: ['value', 'label', 'color'],
  
  data() {
    return {
      isDisabled: false
    }
  },

  computed: {
    styleObject() {
      if(this.isDisabled) {
        return {
          borderWidth: '3px',
          borderStyle: 'solid',
          borderColor: this.color
        }
      } else {
        return {
          backgroundColor: this.color
        }
      }
    }
  },

  methods: {
    toggle() {
      this.$emit('toggle', this.label);
      this.isDisabled = !this.isDisabled;
    }
  }
}
</script>