 <!-- 页面 -->
<template>
  <li class="dropdown-item" @click="handleclick">
    <slot></slot>
  </li>
</template>
<script>
export default {
  mounted () {

  },
  data () {
    return {

    };
  },
  methods: {
    handleclick (e) {
      this.$emit("click", { e, value: e.target.innerHTML });
    }
  }
};
</script>
<style lang='scss' scoped>
.dropdown-item{
  color: #333;
  line-height: 1.3em;
  padding: 4px 5px;
  white-space: nowrap;
  &:hover{
    color:#66b1ff;
    background-color:#ecf5ff
  }
}
</style>
