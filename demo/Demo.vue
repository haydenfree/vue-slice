<template>
  <div id = 'app'>
    <vue-slice
      ref = 'chart'
      class='chart'
      :values='rawValues' 
      :donut-ratio='donutRatio'
      :color-scheme='colorScheme'
      ></vue-slice>
  </div>
</template>

<script>
import VueSlice from '../src/index.js'
import {scaleOrdinal, schemeCategory10} from 'd3'

export default {
  components: {
    VueSlice
  },
  
  data() {
    return {
      rawValues: [
        {label: 'hotdogs', value: 500},
        {label: 'hamburgers', value: 782},
        {label: 'fries', value: 1372},
        {label: 'buns', value: 1282},
        {label: 'pickles', value: 1500},
        {label: 'tomatoes', value: 800},
        {label: 'onions', value: 1000},        
        {label: 'people', value: 1100},
        
      ],
      // rawValues: [1, 1, 2, 3, 5, 8, 13, 21],
      donutRatio: .5,
      colorScheme: scaleOrdinal(schemeCategory10)
    }
  }
}
</script>

<style>
  .chart {
    height: 500px;
    width: 100%;
  }
</style>
