// 全局过滤文件
const filterString = (value, num, bool, bar) => {
    if (!value) {
        return bar || "无";
    }
    // num || value.length;
    if (num < value.length) {
        if (bool) {
            return value.substring(0, num) + "...";
        } else {
            return value.substring(0, num);
        }
    } else {
        return value.substring(0, num);
    }
};

const filterKong = (value) => {
    if (value) {
        return value;
    } else {
        return "无";
    }
};
const filterPhone = (value) => {
    return value.substring(0, 3) + "****" + value.substring(7, 11);
};
export { filterString, filterKong, filterPhone };
