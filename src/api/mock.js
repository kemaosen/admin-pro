import service from "@/utils/request.js";
export const getMockOne = () => {
    return service.api("/api/tableData", "post");
};
