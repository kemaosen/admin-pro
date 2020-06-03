 <!-- 页面 -->
<template>
  <!-- 生成二维码 -->
  <div class="block">
    <qriously :value="wxCodeUrl" :size="170" :backgroundAlpha="1"></qriously>
  </div>
</template>
<script>
export default {
  mounted() {

  },
  data() {
    return {
      wxCodeUrl: "https://www.baidu.com/"
    };
  },
  methods: {

  }
};
</script>
<style lang='scss' scoped>
.block{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
