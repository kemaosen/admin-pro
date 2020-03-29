import Layout from "../../components/Layout/Index.vue";
import { setSession } from "../../utils/auth.js";
const state = {
    promissionRouter: [],            // 处理好的权限路由
    muenRouter: []  // js对象数组
};
const mutations = {
    CHANGE_NAV_ROUTE (state, params) {
        state.promissionRouter = params.router;
        state.muenRouter = params.params;
    }
};

const actions = {
    SET_NAV_ROUTER: ({ commit }, params) => {
        return new Promise(relove => {
            setSession("promissionRouter", params);
            const router = setRoputer(params);
            commit("CHANGE_NAV_ROUTE", { router: router, params: params });
            return relove(router);
        }, reject => {
            console.log(reject, "报错了");
        });
    }
};

const getters = {
    comePromissionRouter: state => state.promissionRouter,
    comeMuenRouter: state => state.muenRouter
};

function setRoputer (route) {
    const router = [];
    route.forEach(item => {
        const obj = {};
        obj.path = item.path;
        if (item.component === "Layout") {
            obj.component = Layout;
        } else {
            obj.component = () => import(`@/${item.component}`);
        }
        obj.meta = item.meta;
        if (item.children && item.children.length > 0) {
            obj.children = setRoputer(item.children);
        }
        router.push(obj);
    });
    return router;
}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
