 <!-- 页面 -->
<template>
    <div>
        商品管理
        <el-button @click="handleGetDate">请求数据</el-button>
    </div>
</template>
<script>
import { getDemoTest } from "@/api/shop.js";
export default {
    async mounted () {
        const res1 = await getDemoTest();
        const res2 = await getDemoTest();
        const res3 = await getDemoTest();
        console.log(res1, res2, res3);
    },
    data () {
        return {

        };
    },
    methods: {
        async handleGetDate () {
            const res3 = await getDemoTest();
            console.log(res3);
        }
    }
};
</script>
<style lang='scss' scoped>
</style>
