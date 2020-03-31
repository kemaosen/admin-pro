<!--登录页面 -->
<template>
    <div class="wrap">
        <div class="login ">
            <el-input v-model="input" placeholder="222"></el-input>
            <el-input v-model="pwad" placeholder="请输入密码"></el-input>
            <el-button @click="handleSubmit">{{ $t('login.denglu') }}</el-button>
        </div>
    </div>
</template>

<script>
import { navRouter } from "./router.js";
import { mapMutations, mapActions } from "vuex";
export default {
    data () {
        return {
            input: "admin",
            pwad: "123456"
        };
    },
    methods: {
        // 用户登录
        handleSubmit () {
            // 登录的时候将路由写入navRouter
            this.SET_NAV_ROUTER(navRouter)
                .then(router => {
                    this.$router.addRoutes(router);
                    console.log(this.$router);
                })
                .catch(error => {
                    console.log(error);
                });

            this.SET_COM_LOGIN(true);
            setTimeout(() => {
                this.$router.replace("/");
            }, 100);
        },
        ...mapMutations({
            SET_COM_LOGIN: "user/SET_COM_LOGIN"
        }),
        ...mapActions({
            SET_NAV_ROUTER: "promission/SET_NAV_ROUTER"
        })
    }
};
</script>

<style scoped lang="scss">
.wrap{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .login{
        width: 300px;
        text-align: center;
        & /deep/ input{margin: 10px 0}
    }
}
</style>
