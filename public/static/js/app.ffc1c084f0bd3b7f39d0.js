webpackJsonp([1],{"+1Ao":function(e,t){},"+8wQ":function(e,t,i){"use strict";t.a={props:["value","label","color"],data:function(){return{isDisabled:!1}},computed:{styleObject:function(){return this.isDisabled?{borderWidth:"3px",borderStyle:"solid",borderColor:this.color}:{backgroundColor:this.color}}},methods:{toggle:function(){this.$emit("toggle",this.label),this.isDisabled=!this.isDisabled}}}},"0Lh+":function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"slicechart",staticClass:"vue-slice",attrs:{styles:e.styles}},[i("svg",{ref:"svg"},[i("g",{attrs:{transform:e.translate}},e._l(e.computedValues,function(t){return i("arc",{key:t.data.label,tag:"path",attrs:{value:t,arc:e.arc,fill:t.data.color}})}))]),e._v(" "),e.showLegend?i("chart-legend",{attrs:{passedValues:e.formatedValues},on:{toggle:e.toggle}}):e._e()],1)},n=[];s._withStripped=!0;var a={render:s,staticRenderFns:n};t.a=a},"5aLA":function(e,t,i){"use strict";var s=i("pGec"),n=i("yBWZ"),a=i("VU/8"),r=a(s.a,n.a,!1,null,null,null);r.options.__file="src\\components\\Arc.vue",t.a=r.exports},Qo21:function(e,t,i){"use strict";var s=i("TMWv"),n=i("0Lh+"),a=i("VU/8"),r=a(s.a,n.a,!1,null,null,null);r.options.__file="src\\components\\VueSlice.vue",t.a=r.exports},S8VD:function(e,t,i){"use strict";function s(e){r||i("+1Ao")}var n=i("gxQM"),a=i("TibC"),r=!1,l=i("VU/8"),o=s,u=l(n.a,a.a,!1,o,null,null);u.options.__file="demo\\Demo.vue",t.a=u.exports},TMWv:function(e,t,i){"use strict";var s=i("5aLA"),n=i("sA7a"),a=i("8soT");t.a={components:{Arc:s.a,ChartLegend:n.a},props:{values:{required:!0},height:{required:!1,type:Number},width:{required:!1,type:Number},donutRatio:{default:.5,required:!1,type:Number},colorScheme:{required:!0,type:Function},showLegend:{required:!1,type:Boolean,default:!0}},data:function(){return{myValues:null,myHeight:null,myWidth:null,svgHeight:null,svgWidth:null,disabled:[]}},computed:{formatedValues:function(){var e=this;return this.values.map(function(t,i){return"number"==typeof t?{value:t,label:i+1,color:e.colorScheme(i+1)}:{value:t.value,label:t.label,color:e.colorScheme(t.label)}})},enabledFormatedValues:function(){var e=this;return this.formatedValues.filter(function(t){return-1===e.disabled.indexOf(t.label)})},computedValues:function(){return Object(a.b)().value(function(e){return e.value})(this.enabledFormatedValues)},radius:function(){return.5*Math.min(this.svgHeight,this.svgWidth)},arc:function(){return Object(a.a)().innerRadius(this.donutRatio*this.radius).outerRadius(this.radius)},translate:function(){return"translate("+.5*this.svgWidth+", "+.5*this.svgHeight+")"},styles:function(){var e={};return this.width&&(e.width=this.width),this.height&&(e.height=this.height),e}},mounted:function(){this.updateDimensions(),window.addEventListener("resize",this.updateDimensions)},beforeDestroy:function(){window.removeEventListener("resize",this.updateDimensions)},methods:{updateDimensions:function(){this.$refs.slicechart&&this.$refs.svg&&(this.myHeight=this.height||this.$refs.slicechart.getBoundingClientRect().height,this.myWidth=this.width||this.$refs.slicechart.getBoundingClientRect().width,this.svgHeight=this.$refs.svg.getBoundingClientRect().height,this.svgWidth=this.$refs.svg.getBoundingClientRect().width)},toggle:function(e){var t=this.disabled.indexOf(e),i=this.disabled.slice();t>-1?i.splice(t,1):i.push(e),this.disabled=i,this.$emit("toggle",e,this.disabled,this.enabledFormatedValues)},setDisabled:function(e){this.disabled=e}}}},TibC:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"demo"}},[i("vue-slice",{ref:"chart",staticClass:"chart",attrs:{values:e.rawValues,"donut-ratio":e.donutRatio,"color-scheme":e.colorScheme}})],1)},n=[];s._withStripped=!0;var a={render:s,staticRenderFns:n};t.a=a},"X+yM":function(e,t){},btkV:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("li",{on:{click:e.toggle}},[i("div",{style:e.styleObject}),e._v(e._s(e.label)+"\n")])},n=[];s._withStripped=!0;var a={render:s,staticRenderFns:n};t.a=a},gxQM:function(e,t,i){"use strict";var s=i("lVK7"),n=i("vwbq");t.a={components:{VueSlice:s.a},data:function(){return{rawValues:[{label:"hotdogs",value:500},{label:"hamburgers",value:782},{label:"fries",value:1372},{label:"buns",value:1282},{label:"pickles",value:1500},{label:"tomatoes",value:800},{label:"onions",value:1e3},{label:"people",value:1100}],donutRatio:.5,colorScheme:Object(n.a)(n.b)}}}},iXgl:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("7+uW"),n=i("S8VD");s.a.config.productionTip=!1,new s.a({el:"#app",template:"<Demo/>",components:{Demo:n.a}})},lVK7:function(e,t,i){"use strict";var s=i("Qo21"),n=i("X+yM");i.n(n);t.a=s.a},pGec:function(e,t,i){"use strict";t.a={props:["value","arc"],computed:{d:function(){return this.arc(this.value)}}}},sA7a:function(e,t,i){"use strict";var s=i("yYHX"),n=i("sBOu"),a=i("VU/8"),r=a(s.a,n.a,!1,null,null,null);r.options.__file="src\\components\\ChartLegend.vue",t.a=r.exports},sBOu:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"chart-legend-container"},[i("div",{staticClass:"chart-legend"},[i("ul",e._l(e.passedValues,function(t,s){return i("LegendItem",{key:"value-"+s,tag:"li",attrs:{value:t.value,label:t.label,color:t.color},on:{toggle:e.toggle}})}))])])},n=[];s._withStripped=!0;var a={render:s,staticRenderFns:n};t.a=a},vaQk:function(e,t,i){"use strict";var s=i("+8wQ"),n=i("btkV"),a=i("VU/8"),r=a(s.a,n.a,!1,null,null,null);r.options.__file="src\\components\\LegendItem.vue",t.a=r.exports},yBWZ:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement;return(e._self._c||t)("path",{attrs:{d:e.d}})},n=[];s._withStripped=!0;var a={render:s,staticRenderFns:n};t.a=a},yYHX:function(e,t,i){"use strict";var s=i("vaQk");t.a={components:{LegendItem:s.a},props:{passedValues:{type:Array,required:!0}},methods:{toggle:function(e){this.$emit("toggle",e)}}}}},["iXgl"]);
//# sourceMappingURL=app.ffc1c084f0bd3b7f39d0.js.map