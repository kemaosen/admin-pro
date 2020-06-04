// 自定义指令 参数
import store from "@/store";
export default {
  inserted(el, binding) {
    // 外部使用 传递的值
    const { value } = binding; // 指令传过来的值['user_delete']
    // 验证权限 查看登录的时候后台返回的颗粒度权限是否含有当前页面传递的颗粒度权限
    const hasPermission = checkPermission(value);
    // 返回false 调用父节点删除自身
    if (!hasPermission) {
      el.parentNode && el.parentNode.removeChild(el);
    }
  }
};

/**
 * @param {Array} value
 * @returns {Boolean}
 */

export function checkPermission(value) {
  // 判断value的类型是不是数组
  if (value && value instanceof Array && value.length > 0) {
    // 获取后台返回的颗粒度权限 应该在登录的时候存 我这里是在store中写死的
    const functions = store.getters && store.getters.functions;
    if (functions === undefined) {
      return false;
    }

    const permissionFunctions = value;
    const hasPermission = functions.some(f => {
      // 判断传递进来的数组中是否存在于 后台返回来的权限中 或 他有全部权限 all_permission'
      return permissionFunctions.includes(f) || f === "all_permission";
    });

    return hasPermission;
  } else {
    console.error(
      `need functions! Like v-permission="['role_add','role_delete']"`
    );
    return false;
  }
}
