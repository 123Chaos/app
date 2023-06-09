// 配置路由
import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
// 使用插件
Vue.use(VueRouter);
// 先备份VueRouter对象的push，保存一份
let originPush = VueRouter.prototype.push;
// 重写push
// 参数1：location，往哪里跳转(传递哪些参数)
// 参数2,3：成功和失败的回调函数
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    // call || apply 都可以调用函数一次，篡改上下文，call传递多个参数用','隔开，apply方法执行，传递数组
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};
// 先备份VueRouter对象的replace，保存一份
let originReplace = VueRouter.prototype.replace;
// 重写replace
// 参数1：location，往哪里跳转(传递哪些参数)
// 参数2,3：成功和失败的回调函数
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    // call || apply 都可以调用函数一次，篡改上下文，call传递多个参数用','隔开，apply方法执行，传递数组
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};
// 配置路由
export default new VueRouter({
  routes,
  // to from savedposition
  scrollBehavior(to, from, savedposition) {
    return { y: 0 };
  },
});
