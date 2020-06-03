 <!-- 页面 -->
<template>
    <div class="echarts">
        <div class="number">
            <NumberTwo :value="2000000"  refName="b1" title="财务数据"></NumberTwo>
            <NumberTwo :value="200000740"  refName="b2" title="财务数据"></NumberTwo>
            <NumberTwo :value="200056000"  refName="b3" title="财务数据"></NumberTwo>
            <NumberTwo :value="20050000"  refName="b4" title="财务数据"></NumberTwo>
            <NumberTwo :value="852000000"  refName="b5" title="财务数据"></NumberTwo>
            <NumberTwo :value="992000000"  refName="b6" title="财务数据"></NumberTwo>
            <NumberTwo :value="20"  refName="b6" title="财务数据"></NumberTwo>
            <Number :value="20"  refName="b6" title="财务数据"></Number>
        </div>

        <div class="echarts-line">
            <line-bar id="lineBar" :dataList="dataList" :date-list="dadeList" :year-list="yearList" :option="options.barOption" ></line-bar>
        </div>

        <div style="height:200px">
            <Line-echarts id="lineUser" :data-list="lineUserList" :x-list="xList" :option="options.lineOption"></Line-echarts>
        </div>
        <div style="height:300px;margin-top:30px;">
            <Pie-echarts id="picUser" :data-list="picUserList" :option="options.picOption"></Pie-echarts>
        </div>
        <div style="height:500px;margin-top:30px;">
            <graph-echarts id="graphUser" :data-list="picUserList" :option="options.graphOption"></graph-echarts>
        </div>

        <div style="height:500px;margin-top:30px;">
            <map-echarts id="mapUser" :data-list="picUserList" :option="options.mapOption"></map-echarts>
        </div>
    </div>
</template>
<script>
import NumberTwo from "@/components/echarts/NumberTwo.vue";
import Number from "@/components/echarts/Number.vue";
import LineBar from "@/components/echarts/Bar.vue";
import { getJCSJEcharts } from "@/api/echarts.js";
import LineEcharts from "@/components/echarts/Line.vue";
import PieEcharts from "@/components/echarts/Pie.vue";
import GraphEcharts from "@/components/echarts/Graph.vue";
import MapEcharts from "@/components/echarts/Map.vue";
import options from "../echarts/index.js";
import { links, nodes } from "../echarts/data.js";
export default {
  async mounted() {
    const res = await getJCSJEcharts({ projectId: 0, queryType: 1, type: 1 });
    console.log(res, "数据");

    this.dataList = res.data.dataList;
    this.yearList = res.data.yearList;
    this.dadeList = res.data.dateList;
    this.getUserEcharts();
    options.graphOption.series[0].links = links;
    options.graphOption.series[0].data = nodes;
  },
  data() {
    return {
      dataList: [],
      dadeList: [],
      yearList: [],
      lineUserList: [],
      xList: [],
      picUserList: [ { name: "查看企业信息", value: "1290" }, { name: "登录", value: "405" }, { name: "追溯周报表之一", value: "180" } ],
      options
    };
  },
  methods: {
    async getUserEcharts() {
      const data = {
        total: "48970330",
        fields: [ "2020-03-19", "2020-03-20", "2020-03-21", "2020-03-22", "2020-03-23", "2020-03-24", "2020-03-25" ],
        data: [ 458, 305, 108, 132, 261, 2, 0 ]
      };
      this.lineUserList = data.data;
      this.xList = data.fields;
    }
  },
  components: {
    NumberTwo,
    LineBar,
    LineEcharts,
    PieEcharts,
    GraphEcharts,
    MapEcharts,
    Number
  }
};
</script>
<style lang='scss' scoped>
.echarts{
    .number{
        display: flex;
        flex-wrap: nowrap;
    }
}
</style>
