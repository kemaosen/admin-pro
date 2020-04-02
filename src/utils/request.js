import axios from "axios";
import store from "@/store/index";
import qs from "qs";
import { getSession } from "@/utils/auth.js";
import { Message, Loading } from "element-ui";
import { debounce } from "@/utils/index.js";
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API
});

let loading;
let needLoadingRequestCount = 0;
// 显示全局loading
export function showFullScreenLoading () {
    if (needLoadingRequestCount === 0) {
      startLoading();
    }
    needLoadingRequestCount++;
  }
// 关闭全局loading
export function tryHideFullScreenLoading () {
    if (needLoadingRequestCount <= 0) return;
    needLoadingRequestCount--;
    if (needLoadingRequestCount === 0) {
        // endLoading();// 页面一开始多个请求 loading会加载多次
        debounce(endLoading, 200);// 函数防抖 200ms 只执行一次
    }
}
function startLoading () {
    loading = Loading.service({
      lock: true,
      text: "加载中……",
      background: "rgba(0, 0, 0, 0.7)"
    });
}

function endLoading () {
    if (needLoadingRequestCount === 0) {
        loading.close();
    }
}
// 请求拦截器
service.interceptors.request.use(config => {
    showFullScreenLoading();
    if (store.getters.token) {
        config.headers.Authorization = "Bearer " + getSession("token");
    }
    // 设置post 方法参数序列号化  若图片上传功能请关闭此处
    return config;
}, error => {
    console.log(error);
    Promise.reject(error);
});
// 响应拦截
service.interceptors.response.use(data => {
    tryHideFullScreenLoading();
    var res = data.data;
    if (res.status === 401) { // token 失效
        sessionStorage.clear();
        // setTimeout(() => {
        //     location.href = baseURLEr"/login"login';
        // }, 100);
        Message({ message: res.message });
    }
    return res;
}, error => {
    return Promise.resolve(error);
});

service.api = (url, method, data, options = {}) => {
    if (method.toLowerCase() === "get") {
        return service({
            url: url,
            data,
            method,
            ...options
        });
    }
    if (method.toLowerCase() === "post") {
        return service({
            url: url,
            data: qs.stringify(data),
            method: "post",
            options: {
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                ...options
            }
        });
    }
};

export default service;
