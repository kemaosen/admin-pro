import service from "@/utils/request.js";
const baseURL = "https://test.xiaozhangbao.cn:8000/castle-provider-order";
const baseURLInesa = "http://210.14.69.84:8888/api/";
export const getJCSJEcharts = (data) => {
    return service({
        url: baseURL + "/system/statisticsTeachingProduct/getCompare",
        data,
        method: "post"
    });
};

export const getUserLineOne = (data) => {
    return service({
        url: baseURLInesa + "/customer-usage",
        data,
        method: "get"
    });
};

export const getMapShangHai = (data) => {
    return service({
        url: "../static/shanghai.json",
        data,
        method: "get"
    });
};
