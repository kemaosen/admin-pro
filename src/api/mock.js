import service from "@/utils/request.js";
export const getMockOne = () => {
    return service.api("/tableData", "post");
};
