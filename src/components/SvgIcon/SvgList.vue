 <!-- 页面 -->
<template>
    <div class="svg-list">
        <div v-for="(value) in svgList" :key="value.default.id" class="svg-item" @click="handleCopy($event,value)">
            <svg-icon  :icon-class="value.default.id.substring (5)" ></svg-icon>
            <span>{{value.default.id.substring (5)}}</span>
        </div>
    </div>
</template>
<script>
import { svgList } from "@/icons/index.js";
import clipboard from "@/utils/clipboard.js";
export default {
    mounted () {
    },
    data () {
        return {
            svgList
        };
    },
    methods: {
        handleCopy (event, value) {
            clipboard(`<svg-icon  icon-class="${value.default.id.substring(5)}" ></svg-icon>`, event);
        }
    }
};
</script>
<style lang='scss' coped>
.svg-list{
    display: flex;
    flex-wrap: wrap;
    .svg-item{
        width: 80px;
        height: 80px;
        margin: 10px;
        padding: 10px;
        background-color: #e0e0e0;
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
        svg{
            width: 3rem;
            height: 3rem;
            pointer-events: none;
        }
    }
}
</style>
