import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "echarts",
        component: () => import("@/view/EChartsList.vue")
    }
];

const router = new VueRouter({
    routes
});

export default router;
