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
  categoryView(state) {
    // 防止传回undefined
    return state.goodInfo.categoryView || {};
  },
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
