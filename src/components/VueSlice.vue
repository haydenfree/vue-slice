<template>
  <!-- Why did we set class to pie? Styling? -->
  <div ref = 'slicechart' class = 'vue-slice' :styles = 'styles'>
    <svg ref = 'svg'>
      <g :transform = 'translate'>
        <path
          v-for="(arcValue) in computedValues" 
          is='arc' 
          :key='arcValue.data.label'
          :value='arcValue'
          :arc='arc'
          :fill='arcValue.data.color'
        ></path>
      </g>
    </svg>
    <chart-legend
      v-if = "showLegend"
      :passedValues = 'formatedValues'
      @toggle='toggle'
    ></chart-legend>
  </div>
</template>

<script>
import Arc from './Arc.vue'
import ChartLegend from './ChartLegend.vue'
import { pie, arc } from 'd3-shape'

export default {
  components: {
    Arc,
    ChartLegend
  },

  props: {
    values: {
      required: true,
    },
    height: {
      required: false,
      type: Number
    },
    width: {
      required: false,
      type: Number
    },
    donutRatio: {
      default: .5,
      required: false,
      type: Number
    },
    colorScheme: {
      required: true,
      type: Function
    },
    showLegend: {
      required: false,
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      myValues: null,
      myHeight: null,
      myWidth: null,
      svgHeight: null,
      svgWidth: null,
      disabled: []
    }
  },

  computed: {
    formatedValues() {
      return this.values.map((v, i) => {
        if(typeof v === 'number') {
          return {
            value: v,
            label: i+1,
            color: this.colorScheme(i+1)
          }
        } else {
          return {
            value: v.value,
            label: v.label,
            color: this.colorScheme(v.label)
          }
        }
      })
    },

    enabledFormatedValues() {
      return this.formatedValues.filter(value => this.disabled.indexOf(value.label) === -1)
    },
    computedValues() {
      return pie().value(v => v.value)(this.enabledFormatedValues)
    },

    radius() {
      return 0.5 * (Math.min(this.svgHeight, this.svgWidth));
    },
    
    arc() {
      return arc().innerRadius(this.donutRatio * this.radius).outerRadius(this.radius);
    },

    translate() {
      return `translate(${0.5*this.svgWidth}, ${0.5*this.svgHeight})`
    },

    styles() {
      const defaultStyles = {}
      if(this.width) {
        defaultStyles.width = this.width;
      }
      if(this.height) {
        defaultStyles.height = this.height;
      }
      return defaultStyles;
    }
  },

  mounted() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.updateDimensions);
  },

  methods: {
    updateDimensions() {
      if(!this.$refs.slicechart || !this.$refs.svg) return
      this.myHeight = this.height || this.$refs.slicechart.getBoundingClientRect().height;
      this.myWidth = this.width || this.$refs.slicechart.getBoundingClientRect().width;
      this.svgHeight = this.$refs.svg.getBoundingClientRect().height;
      this.svgWidth = this.$refs.svg.getBoundingClientRect().width;
    },

    toggle(label) {
      let index = this.disabled.indexOf(label);
      let disableTemp = this.disabled.slice();
      if(index > -1) {
        disableTemp.splice(index, 1)
      }else{
        disableTemp.push(label)
      }
      this.disabled = disableTemp;
      this.$emit('toggle', label, this.disabled, this.enabledFormatedValues);
    },

    setDisabled(labels) {
      this.disabled = labels;
    }
  }
}
</script>