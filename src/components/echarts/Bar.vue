<!-- 数字滚动显示  -->
<template>
    <div class="number-warp">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <div class="info">
            <div :id="id" style="width: 100%;height:100%;"></div>
        </div>
    </div>
</template>
<script>
export default {
  mounted() {
    setTimeout(() => {
      this.init();
      this.windowResize();
    }, 500);
  },
  data() {
    return {
      screenWidth: ""
    };
  },
  props: {
    id: {
      type: String,
      required: true
    },
    // 柱状图 折线图
    echartsType: {
      type: String,
      default: "bar",
      validator: (value) => {
        return [ "line", "bar" ].indexOf(value) !== -1;
      }
    },
    dataList: {
      type: Array,
      required: true
    },
    yearList: {
      type: Array,
      required: true
    },
    dateList: {
      type: Array,
      required: true
    },
    option: {
      type: Object,
      required: true
    }
  },
  methods: {
    windowResize(chart) { // 调整浏览器大小所触发的事件
      window.addEventListener("resize", () => {
        chart.resize();// echarts自适应屏幕大小
        return (() => {
          window.screenWidth = document.body.clientWidth;
          this.screenWidth = window.screenWidth;
        })();
      });
    },
    init() {
      this.option.series[0].type = this.echartsType;
      this.option.xAxis.data = this.dateList;          // X轴 显示的时间节点
      this.option.series[0].data = this.dataList[0];
      this.option.series[0].name = this.yearList[0];
      // this.option.legend.data = this.yearList;        // Y轴 显示的时间节点
      this.myChart = this.$echarts.init(document.getElementById(this.id));
      this.myChart.setOption(this.option, true);
    }
  },
  watch: {
    // 监听类型切换 重新渲染图表数据
    echartsType(newValue, oldValue) {
      this.option.series[0].type = newValue;
      this.myChart.setOption(this.option, true);
    },
    dataList(newValue, oldValue) {
      this.init();
    },
    screenWidth: function(val) { // 监听屏幕宽度变化
      this.init();
    }
  }
};
</script>

<style scoped lang="scss">
.number-warp{
    display: flex;
    position: relative;
    background-color: #121f2a;
    width: 500px;
    height: 350px;
    justify-content: center;
    align-items: center;
    margin: 0  10px 10px 0;
    padding: 10px;
    &>span{
        position: absolute;
        display: inline-block;
        padding: 30px;
        &:nth-child(1){ left:0; top:0; border-left: 5px solid #33c7d5; border-top: 5px solid #33c7d5; }
        &:nth-child(2){ left:0; bottom:0; border-left: 5px solid #33c7d5; border-bottom: 5px solid #33c7d5; }
        &:nth-child(3){ right:0; top:0; border-right: 5px solid #33c7d5; border-top: 5px solid #33c7d5; }
        &:nth-child(4){ right:0; bottom:0; border-right: 5px solid #33c7d5; border-bottom: 5px solid #33c7d5; }
    }
    .info{
        width:100%;height:100%
    }
}
</style>

<style lang="scss">
</style>
