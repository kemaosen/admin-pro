import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    // {
    //     path: "/",
    //     name: "layout",
    //     component: () => import("../view/Information.vue")
    // },
    // {
    //     path: "/",
    //     name: "layout",
    //     component: () => import("../view/EChartsList.vue")
    // },
    {
        path: "/",
        name: "layout",
        component: () => import("../components/Layout/Index.vue")
    },
    {
        path: "/login",
        name: "login",
        component: () => import("../view/login/Index.vue")
    }
];

const router = new VueRouter({
    routes
});

export default router;
