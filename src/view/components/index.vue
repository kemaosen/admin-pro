 <!-- 页面 -->
<template>
  <div>
    <g-dropdown>
      <span>下拉菜单</span> <i class="el-icon-arrow-down el-icon--right"></i>
      <g-dropdown-menu slot="dropdown">
        <g-dropdown-item>追溯码<i  class="el-icon-eleme el-icon--right"></i></g-dropdown-item>
        <g-dropdown-item>追溯码<i  class="el-icon-eleme el-icon--right"></i></g-dropdown-item>
        <g-dropdown-item>追溯码<i  class="el-icon-eleme el-icon--right"></i></g-dropdown-item>
      </g-dropdown-menu>
    </g-dropdown>
  </div>
</template>
<script>
import gDropdown from "../../components/global/dropdown/dropdown.vue";
import gDropdownItem from "../../components/global/dropdown/dropdownItem.vue";
import gDropdownMenu from "../../components/global/dropdown/dropdownMenu.vue";
export default {
  components: {
    gDropdown,
    gDropdownItem,
    gDropdownMenu
  },
  mounted () {

  },
  data () {
    return {

    };
  },
  methods: {

  }
};
</script>
<style lang='scss' scoped>
</style>
