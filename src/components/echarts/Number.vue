<!-- 数字滚动显示  -->
<template>
  <div class="number-grow-warp">
    <span :ref="refName" :data-time="time" class="number-grow">0</span>
    <h5>{{title}}</h5>
  </div>
</template>

<script>
export default {
  mounted() {
    this.numberGrow(this.$refs[this.refName]);
  },
  props: {
    time: {
      type: Number,
      default: 2
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
    numberGrow(ele) {
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
.number-grow-warp {
  min-width: 150px;
  max-width: 18%;
  transform: translateZ(0);
  border: 1px solid #054e96;
  padding: 15px 10px;
  border-radius: 4px;
  box-shadow: 0 0 5px 3px #054e96 inset;
  text-align: center;
  margin: 0 10px 10px 0;
  .number-grow {
    font-size: 28px !important;
    font-weight: normal;
    letter-spacing: 1.67px;
    display: block;
  }
  h5 {
    margin: 0;
    font-size: 16px !important;
    margin-top: 10px;
    font-weight: normal;
    letter-spacing: 1px;
  }
}
</style>
