import Vue from "vue";
import Vuex from "vuex";
// 需要使用插件一次
Vue.use(Vuex);
// 引入小仓库
import home from "./home";
import search from "./search";
import detail from "./detail";
export default new Vuex.Store({
  // 实现Vuex仓库模式开发存储数据
  modules: {
    home,
    search,
    detail,
  },
});
