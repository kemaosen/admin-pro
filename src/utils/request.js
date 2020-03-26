import axios from "axios";
import store from "@/store/index";
import qs from "qs";
import { getSession } from "@/utils/auth.js";
import { Message } from "element-ui";

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    withCredentials: true // 跨域请求时发送 cookies
});

// 请求拦截器
service.interceptors.request.use(config => {
    if (store.getters.token) {
        config.headers.Authorization = "Bearer " + getSession("token");
    }
    // 设置post 方法参数序列号化  若图片上传功能请关闭此处
    if (config.methos === "post") {
        config.data = qs.stringify(config.data);
    }
    return config;
}, error => {
    console.log(error);
    Promise.reject(error);
});
// 响应拦截
axios.interceptors.response.use(data => {
    var res = data.data;
    if (res.status === 401) { // token 失效
        sessionStorage.clear();
        // setTimeout(() => {
        //     location.href = baseURLEr"/login"login';
        // }, 100);
    } else {
        Message({ message: res.message });
        return res;
    }
}, error => {
    return Promise.resolve(error);
});

export default service;
