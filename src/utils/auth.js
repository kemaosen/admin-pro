/**
 *
 * @param {*} name 参数名
 * @param {*} value 参数值
 * @token
 * @promissionRouter    后台返回的动态路由
 *
 *
 *
 *
 */
export const getSession = (name) => {
  return JSON.parse(sessionStorage.getItem(name));
};

export const setSession = (name, value) => {
  return sessionStorage.setItem(name, JSON.stringify(value));
};
/**
 *
 * @param {*} name 参数名
 * @param {*} value 参数值
 *
 * @lang        // 设置项目语言
 */
export const getLocal = (name) => {
  return JSON.parse(localStorage.getItem(name));
};

export const setLocal = (name, value) => {
  return localStorage.setItem(name, JSON.stringify(value));
};
