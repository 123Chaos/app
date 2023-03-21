import { reqCategoryList, reqGetBannerList } from "@/api";
// home模块的小仓库
const state = {
  // 服务器返回对象就写对象，返回数组就写数组
  categoryList: [],
  bannerList: [],
};
const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
  },
  GETBANNERLIST(state, bannerList) {
    state.bannerList = bannerList;
  },
};
const actions = {
  // 调用API中的接口函数
  async categoryList({ commit }) {
    let result = await reqCategoryList();
    // console.log(result);
    if (result.code == 200) {
      commit("CATEGORYLIST", result.data);
    }
  },
  async getBannerList() {
    let result = await reqGetBannerList();
    // console.log(result);
    if (result.code == 200) {
      commit("GETBANNERLIST", result.data);
    }
  },
};
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
