 <!-- 用户统计页面 -->
<template>
    <div class="echarts">
        <div :id="id" style="width: 100%;height:100%;"></div>
    </div>
</template>
<script>
export default {
    mounted () {
        setTimeout(() => {
            this.init();
        }, 500);
    },
    data () {
        return {
        };
    },
    props: {
        id: {
            type: String,
            required: true
        },
        dataList: {
            type: Array,
            required: true
        },
        // yList: {
        //     type: Array,
        //     required: true
        // },
        xList: {
            type: Array,
            required: true
        },
        option: {
            type: Object,
            required: true
        }
    },
    methods: {
        init () {
            this.option.xAxis.data = this.xList;          // X轴 显示的时间节点
            this.option.series[0].data = this.dataList;
            this.myChart = this.$echarts.init(document.getElementById(this.id));
            this.myChart.setOption(this.option, true);
        }
    },
    watch: {
        // // 监听类型切换 重新渲染图表数据
        // echartsType (newValue, oldValue) {
        //     this.option.series[0].type = newValue;
        //     this.myChart.setOption(this.option, true);
        // },
        // dataList (newValue, oldValue) {
        //     this.init();
        // }
    }
};
</script>
<style lang='scss' scoped>
.echarts{
    height: 100%;
    background-color: #000;
    &>div{
        height: 100%;
    }
}
</style>
