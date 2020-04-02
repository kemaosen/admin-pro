import Vue from "vue";
import SvgIcon from "@/components/SvgIcon/index.vue";// svg组件

// register globally
Vue.component("svg-icon", SvgIcon);

const req = require.context("./svg", false, /\.svg$/);

const requireAll = requireContext => requireContext.keys().map(requireContext);
export const svgList = requireAll(req);
