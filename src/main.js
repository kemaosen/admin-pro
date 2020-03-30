import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
import "@/utils/element-ui.js";
import "./style/index.scss";
import "./permission.js";
// 引入二维码插件
import VueQriously from "vue-qriously";
Vue.use(VueQriously);
// 引入eCharts
// eslint-disable-next-line import/first
import echarts from "echarts";
Vue.prototype.$echarts = echarts;
//  注册全局过滤器
// eslint-disable-next-line import/first
import * as custom from "./utils/filters.js";
Object.keys(custom).forEach(key => {
    Vue.filter(key, custom[key]);
});

Vue.config.productionTip = false;
require("./mock/index.js");
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
