<template>
  <div class = 'chart-legend-container'>
    <div class = 'chart-legend'>
      <ul>
        <li
        is='LegendItem'
        v-for="(passedValue, index) in passedValues"
        :key="`value-${index}`"
        :value='passedValue.value'
        :label='passedValue.label'
        :color='passedValue.color'
        @toggle='toggle'
        ></li> 
      </ul>
    </div>
  </div>
</template>


<script>
import LegendItem from './LegendItem.vue'

export default {
  components: {
    LegendItem
  },
  
  props: {
    passedValues: {
      type: Array,
      required: true
    }
  },

  methods: {
    toggle(label){
      this.$emit('toggle', label);
    }
  }
}
</script>