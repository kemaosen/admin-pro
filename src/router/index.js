import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
/*
hidden: true // 添加这个属性 不会再路由菜单上显示
*/
const routes = [ {
    path: "/",
    component: () => import("@/components/Layout/Index.vue")
  },
  {
    path: "/Index",
    name: "layout",
    component: () => import("../components/Layout/Index.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../view/login/Index.vue")
  },
  {
    path: "/EChartsList",
    name: "EChartsList",
    component: () => import("../view/EChartsList.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
