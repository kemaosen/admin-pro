import router from "./router";
import store from "./store";
import { getSession } from "@/utils/auth";
const whiteList = [ "/login", "/svgList" ];// 不需要判断权限的路由地址

router.beforeEach(async(to, from, next) => {
    const hasToken = getSession("promissionRouter");// 获取token的值 判断是否登录了  这里我用路由来判断 实际上使用用户登录状态判断
    if (hasToken) {
        // 登录了 判断用户去什么页面  是登录页 重定向到首页
        if (to.path === "/login") {
            next({ path: "/" });
        } else {
            // 登录了 判断登录的用户是否返回的 权限路由
            const hasRoutes = store.getters["promission/comeMuenRouter"] && store.getters["promission/comeMuenRouter"].length > 0;
            if (hasRoutes) { // 含有权限路由 n ext()
                next();
            } else { // 没有权限路由 从 新获取
                try {
                    store.dispatch("promission/SET_NAV_ROUTER", getSession("promissionRouter"))
                    .then(routerList => {
                        router.addRoutes(routerList);
                        next({ ...to, replace: true });
                    })
                    .catch(error => { console.log(error); });
                } catch (error) { // 捕获到错误 清楚 数据 跳转到登录页面
                    console.log(error || "Has Error");
                    next(`/login`);
                }
            }
        }
    } else { // 没有登录 判断是 不是去无权限页面 是的 next() 否则重定向登录页
        if (whiteList.indexOf(to.path) !== -1) {
            next();
        } else {
            next(`/login`);
        }
    }
});
