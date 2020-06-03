const mutations = {
  // 修改侧边栏展开还是关闭
  SET_IS_COLLAPSE: (state, params) => {
    state.isCollapse = params;
  }
};
export default mutations;
