 <!-- 页面 -->
<template>
    <div class="g-menu">
        <div :class="{'menu-top':isCollapse,'collapse':!isCollapse}" >
            <img src=".././../assets/logo.png" alt="">
            <h3>后台管理系统</h3>
        </div>
        <el-scrollbar wrap-class="scrollbar-wrapper">
            <el-menu :default-active="this.$route.path" class="el-menu" :router="true" @open="handleOpen" @close="handleClose" :collapse="isCollapse" background-color="#001529"  text-color="#fff"
            active-text-color="#ffd04b">
                <el-submenu :index="item.path" v-for="(item,index) in muenRouter" :key="muenRouter+index">
                    <template slot="title">
                        <svg-icon  :icon-class="item.meta.icon" ></svg-icon>
                        <span slot="title">{{item.meta.title}}</span>
                    </template>
                    <SideBarItem v-if="item.children && item.children.length>0" :item="item.children"></SideBarItem>
                </el-submenu>
            </el-menu>
        </el-scrollbar>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import SideBarItem from "./SideBarItem.vue";
export default {
    name: "sidebar",
    mounted () {
    },
    data () {
        return {
        };
    },
    methods: {
        handleOpen (key, keyPath) {},
        handleClose (key, keyPath) {
            console.log(key, keyPath);
        }
    },
    components: {
        SideBarItem
    },
    computed: {
        ...mapGetters({
            isCollapse: "comeIsCollapse",
            promissionRouter: "promission/comePromissionRouter",
            muenRouter: "promission/comeMuenRouter"
        })
    }
};
</script>
<style lang='scss' scoped>
.g-menu{
    height: 100%;
    // background-color: rgb(84, 92, 100);
    background-color:#001529;
    color: #fff;
    .-top{
        height: 40px;
        padding: 5px 20px;
        display: flex;
        align-items: center;
        width: 200px;
        img{
            width: 30px;
            height: 30px;
        }
        h3{
            width: 120px;
            margin-left: 15px;
        }
    }
    .collapse{
        height: 50px;
        padding: 5px 20px;
        display: flex;
        align-items: center;
        width: 200px;
        img{
            width: 30px;
            height: 30px;
        }
        h3{
            width: 120px;
            margin-left: 15px;
        }
    }
    .el-menu{
        border-right:none;
        // min-height: calc(100vh - 60px);
        height: calc(100vh - 60px);
    }
}
</style>
