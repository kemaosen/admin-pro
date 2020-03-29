<!-- 数字滚动显示  -->
<template>
    <div class="number-warp">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <div class="info">
            <h3>{{ title }}</h3>
            <span :ref="refName" class="number-grow">{{ value }}</span>
        </div>
    </div>
</template>
<script>
export default {
    mounted () {
        this.numberGrow(this.$refs[this.refName]);
    },
    props: {
        time: {
            type: Number,
            default: 3
        },
        // 组件显示的数值
        value: {
            type: Number,
            default: 0
        },
        // 组件唯一ID
        refName: {
            type: String,
            required: true
        },
        // 组件 title
        title: {
            type: String,
            required: true
        }

    },
    methods: {
        numberGrow (ele) {
            const step = Math.ceil((this.value * 10) / (this.time * 400));
            let current = 0;
            let start = 0;
            let t = setInterval(() => {
                start += step;
                if (start > this.value) {
                    clearInterval(t);
                    start = this.value;
                    t = null;
                }
                if (current === start) {
                    return;
                }
                current = start;
                ele.innerHTML = current.toString().replace(/(\d)(?=(?:\d{3}[+]?)+$)/g, "$1,");
            }, 10);
        }
    }
};
</script>

<style scoped lang="scss">
.number-warp{
    display: flex;
    position: relative;
    background-color: #121f2a;
    width: 165px;
    height: 65px;
    justify-content: center;
    align-items: center;
    margin: 0  10px 10px 0;
    &>span{
        position: absolute;
        display: inline-block;
        padding: 10px;
        &:nth-child(1){ left:0; top:0; border-left: 2px solid #897232; border-top: 2px solid #897232; }
        &:nth-child(2){ left:0; bottom:0; border-left: 2px solid #897232; border-bottom: 2px solid #897232; }
        &:nth-child(3){ right:0; top:0; border-right: 2px solid #897232; border-top: 2px solid #897232; }
        &:nth-child(4){ right:0; bottom:0; border-right: 2px solid #897232; border-bottom: 2px solid #897232; }
    }
    .info{
        h3{
            font-size: 12px;
            margin: 0;
            color: orange;
            text-align: center;
        }
        span{
            color: #1dfed6;
            font-size: 28px;
            font-family: LCD;
        }
    }
}
</style>
