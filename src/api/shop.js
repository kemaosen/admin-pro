import service from "@/utils/request.js";
export const getDemoTest = () => {
    return service.api("/posts", "get");
};
