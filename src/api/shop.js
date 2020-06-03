import service from "@/utils/request.js";
export const getDemoTest = (data) => {
    return service.api("/getWangYiNews", "POST", data);
};
