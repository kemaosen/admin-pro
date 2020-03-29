 <!-- 关系图页面 -->
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
        option: {
            type: Object,
            required: true
        }
    },
    methods: {
        init () {
            this.myChart = this.$echarts.init(document.getElementById(this.id));
            this.myChart.setOption(this.option, true);
        }
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
