 <!-- 地图页面页面 -->
<template>
  <div class="echarts">
    <div :id="id" style="width: 100%;height:100%;"></div>
  </div>
</template>
<script>
import "echarts/map/js/china.js";
import "echarts/map/js/province/neimenggu.js";
import { dataBig } from "../../echarts/data.js";
const res = require("../../static/shanghai");;
var convertData = (data) => {
  var res = [];
  for (var i = 0; i < data.length; i++) {
    var geoCoord = data[i].value;
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)
      });
    }
  }
  return res;
};

export default {
  async mounted() {
    setTimeout(() => {
      console.log(dataBig.a);

      this.option.series[1].data = convertData(dataBig.a);
      this.option.series[2].data = convertData(dataBig.b);
      this.myChart = this.$echarts.init(document.getElementById(this.id));
      this.$echarts.registerMap("shanghai", res);
      this.init();
    }, 500);
  },
  data() {
    return {
      myChart: ""
    };
  },
  props: {
    id: {
      type: String,
      required: true

    },
    option: {
      type: Object,
      required: true
    }
  },
  methods: {
    init() {
      this.myChart.setOption(this.option, true);
    }
  }
};
</script>
<style lang='scss' scoped>
.echarts {
  height: 100%;
  background-color: #000;
  & > div {
    height: 100%;
  }
}
</style>
