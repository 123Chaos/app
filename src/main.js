import Vue from "vue";
import App from "./App.vue";
// 三级联动全局组件
import TypeNav from "@/components/TypeNav";
import Carousel from "@/components/Carousel";
// 第一个参数：全局组件的名字 第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
// 引入路由
import router from "@/router";
// 引入仓库
import store from "@/store";
// 引入mock
import "@/mock/mockServer";
// 引入swiper样式
import "swiper/css/swiper.css";
Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App),
  // kv一致省略v
  // 注册路由信息：当这里写router时，组件都拥有$route，$router属性
  router,
  // 注册仓库:组件实例会多一个$store的属性
  store,
}).$mount("#app");
