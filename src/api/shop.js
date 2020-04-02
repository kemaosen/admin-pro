import service from "@/utils/request.js";
export const getDemoTest = () => {
    return service.api("http://jsonplaceholder.typicode.com/posts", "get");
};
