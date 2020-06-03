 <!-- 页面 -->
<template>
  <div>
    商品管理
    <el-button @click="handleGetDate">请求数据</el-button>
  </div>
</template>
<script>
import { getDemoTest } from "@/api/shop.js";
import { getMockOne } from "@/api/mock.js";
export default {
  async mounted() {
    const res3 = await getDemoTest({ page: 1, count: 5 });
    const res1 = await getMockOne();
    console.log(res3);
    console.log(res1);
  },
  data() {
    return {

    };
  },
  methods: {
    async handleGetDate() {
      const res3 = await getDemoTest({ page: 1, count: 5 });
      const res1 = await getMockOne();
      console.log(res3);
      console.log(res1);
    }
  }
};
</script>
<style lang='scss' scoped>
</style>
