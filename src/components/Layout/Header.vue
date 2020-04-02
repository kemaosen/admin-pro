 <!-- 页面 -->
<template>
    <div class="g-header">
        <!-- 关闭侧边栏图标 -->
        <div class="g-header-left">
            <i :class="{'el-icon-s-fold':isCollapse,'el-icon-s-unfold':!isCollapse,}" @click="handleChangeFold"></i>
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> -->
                <el-breadcrumb-item v-for="(item,index) in breadlist" :key="'breadlist'+index" >{{item.meta.title}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <!-- 用户信息 退出 -->
        <div class="right">
            <el-dropdown class="lang">
                <span>
                    {{$t("login.language")}}<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item @click.native="handleChangeLang('zh')">中文</el-dropdown-item>
                    <el-dropdown-item @click.native="handleChangeLang('en')">English</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown>
                <span class="el-dropdown-link"> Admin </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item @click.native="handleLogOut">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import { setLocal } from "@/utils/auth.js";
export default {
    mounted () {
        console.log(this.$router);
        this.getBread();
    },
    data () {
        return {
            breadlist: []
        };
    },
    methods: {
        // 展开收起侧边栏
        handleChangeFold () {
            this.SET_IS_COLLAPSE(!this.isCollapse);
        },
        // 退出登录
        handleLogOut () {
            sessionStorage.clear();
            this.$router.push("/login");
        },
        getBread () {
            this.breadlist = this.$route.matched;
            this.$route.matched.forEach((item, index) => {
                // 先判断父级路由是否是空字符串或者meta是否为首页，直接复写路径到根路径
                // eslint-disable-next-line no-unused-expressions
                item.meta.text === "首页" ? item.path = "/" : this.$route.path === item.path;
            });
        },
        // 切换语言
        handleChangeLang (lang) {
            setLocal("lang", lang);
            location.reload();
        },
        ...mapMutations({
            SET_IS_COLLAPSE: "SET_IS_COLLAPSE"
        })
    },
    watch: {
        $route () { // 监听路由
            this.getBread();
        }
    },
    computed: {
        ...mapGetters({
            isCollapse: "comeIsCollapse"
        })
    }
};
</script>
<style lang='scss' scoped>
.g-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    .g-header-left{
        display: flex;
        align-items: center;
        &/deep/ .el-breadcrumb{
            height: 50px;
            line-height: 50px;
            margin-left: 30px;
        }
        i{
            font-size: 25px;
        }
    }
    .right{
        .lang{
            margin-right: 20px;
        }
    }
}
</style>
