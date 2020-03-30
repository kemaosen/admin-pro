import service from "@/utils/request.js";
export const getMockOne = () => {
    return service.api("/mock/api/tableData", "post");
};
