/**
 *
 * @param {*} name 参数名
 * @param {*} value 参数值
 * @token
 *
 *
 *
 *
 */
export const getSession = (name) => {
    return JSON.parse(sessionStorage.getItem(name));
};

export const setSession = (name, value) => {
    return JSON.stringify(sessionStorage.setItem(name, value));
};
