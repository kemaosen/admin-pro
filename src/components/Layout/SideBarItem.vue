 <!-- 菜单栏子标题 递归组件 -->
<template>
    <el-menu-item-group>
        <template v-for="(value,index) in item">
            <div :key="'item'+index" v-if="value.children && value.children.length > 0">
                <el-submenu :index="value.path" >
                    <template  slot="title">{{value.meta.title}}</template>
                    <SideBarItem :item="value.children"  ></SideBarItem>
                </el-submenu>
            </div>
            <div v-else :key="'itema'+index">
                    <el-menu-item :index="value.path"  >{{value.meta.title}}</el-menu-item>
            </div>
        </template>
    </el-menu-item-group>
</template>
<script>
export default {
    name: "SideBarItem",
    mounted () {
    },
    props: {
        item: {
            type: Array
        }
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
