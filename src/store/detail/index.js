import { reqGoodsInfo } from "@/api";

const state = {
  goodInfo: {},
};
const mutations = {
  GETGOODINFO(state, goodInfo) {
    state.goodInfo = goodInfo;
  },
};
const actions = {
  async getGoodInfo({ commit }, goodid) {
    let result = await reqGoodsInfo(goodid);
    if (result.code == 200) {
      commit("GETGOODINFO", result.data);
    }
  },
};
const getters = {
  // 路径导航简化信息
  categoryView(state) {
    // 防止传回undefined
    return state.goodInfo.categoryView || {};
  },
  // 产品售卖属性简化信息
  skuInfo(state) {
    return state.goodInfo.skuInfo || {};
  },
};
export default {
  state,
  mutations,
  actions,
  getters,
};
