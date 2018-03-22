<template>
  <li>
    <div @click='toggle' :style='{"background-color": color}'></div>{{label}}
  </li>
</template>


<script>
export default {
  props: ['value', 'label', 'color'],

  methods: {
    toggle(){
      this.$emit('toggle', this.label);
    }
  }
}
</script>