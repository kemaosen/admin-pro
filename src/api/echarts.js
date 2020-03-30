import service from "@/utils/request.js";
import { baseURL, baseURLInesa } from "./baseURL.js";
export const getJCSJEcharts = (data) => {
    return service.api(baseURL + "/system/statisticsTeachingProduct/getCompare", "post", data);
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
