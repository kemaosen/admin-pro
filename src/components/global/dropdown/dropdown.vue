 <!-- 页面 -->
<template>
  <div class="g-dropdown" ref="dropdown" :data-isshow="isShowMenu" >
    <div @click="onOpen" >
      <slot></slot>
    </div>

    <div class="menu" v-show="isShowMenu" :style="dropdownStyle">
      <slot name="dropdown"></slot>
    </div>

  </div>
</template>
<script>
export default {
  mounted () {
    this.body = document.body;
    this.body.addEventListener("click", (e) => {
      if (e.target.offsetParent === this.$refs.dropdown) {
      } else {
        this.onClose();
      }
    });
  },
  destroyed () {
    this.body.removeEventListener("click", (e) => { });
  },

  props: {
    align: {
      type: String,
      default: "left",
      validator (value) {
        return [ "left", "right", "center" ].includes(value) >= 0;
      }
    },
    dataList: {
      type: Array
    }
  },
  data () {
    return {
      isShowMenu: false,
      body: ""
    };
  },
  methods: {
    onOpen () {
      this.isShowMenu = !this.isShowMenu;
    },
    onClose () {
      this.isShowMenu = false;
    }
  },
  computed: {
    dropdownStyle () {
      return `textAlign:${this.align}`;
    }
  }
};
</script>
<style lang='scss' scoped>
.g-dropdown {
  position: relative;
  display: inline-block;
  cursor: pointer;
	color: #409eff;
  .menu {
    position: absolute;
    top: 100%;
		box-sizing: border-box;
    padding: 8px 0px 8px 0px;
    text-align: center;
    border-radius: 4px;
    margin-top: 4px;
    border: 1px solid #ddd;
    z-index: 1;
    margin-top: 10px;
    &::before {
      position: absolute;
      bottom: 100%;
      content: "";
      display: inline-block;
      left: 50%;
      width: 0;
      height: 0;
      border: 7px solid black;
      border-right: 7px solid transparent;
      border-left: 7px solid transparent;
      border-top: 7px solid transparent;
      border-bottom: 7px solid #ddd;
    }
    &::after {
      position: absolute;
      bottom: 99.8%;
      content: "";
      display: inline-block;
      width: 0;
      height: 0;
      left: 51%;
      border-color: transparent;
      border-style: solid;
      border-width: 6px;
      border-bottom: 6px solid #fff;
    }
  }
}
</style>
