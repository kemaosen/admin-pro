 <!-- 页面 -->
<template>
  <el-container>
    <!-- 侧边栏 -->
    <el-aside :class="{'g-aside':!isCollapse,'g-aside-two':isCollapse}" style="width:10%">
      <g-sidebar></g-sidebar>
    </el-aside>
    <el-container>
      <!-- 头部组件 -->
      <el-header height="50px">
        <g-header></g-header>
      </el-header>
      <!-- 内容区域 -->
      <el-main>
        <router-view></router-view>
      </el-main>
      <!-- 尾部区域  没啥用-->
      <!-- <el-footer>
                <g-footer></g-footer>
            </el-footer> -->
    </el-container>
  </el-container>
</template>
<script>
import GHeader from "./Header.vue";
// import GFooter from "./Footer.vue";
import GSidebar from "./Sidebar.vue";
import { mapGetters } from "vuex";
export default {
    mounted () {
    },
    data () {
        return {

        };
    },
    methods: {

    },
    components: {
        GHeader,
        GSidebar
    // GFooter,
    },
    computed: {
        ...mapGetters({
            isCollapse: "comeIsCollapse"
        })
    }
};
</script>
<style lang='scss' scoped>
.g-aside {
  min-width: 200px;
  height: 100%;
  overflow-x: hidden;
  transition: all 1s;
}
.g-aside-two {
  width: 64px !important;
  min-width: 64px;
  overflow-x: hidden;
  transition: all 1s;
}
.el-header {
  border-bottom: 1px solid #ededed;
}
</style>
