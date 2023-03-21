// 当前模块:API接口进行统一管理
import requests from "./request";
import mockRequests from "./mockrequest";
// 三级联动的接口
// /api/product/getBaseCategoryList get 无参数
// axios发请求,返回结果为Promise对象
export const reqCategoryList = () =>
  requests({ url: "/product/getBaseCategoryList", method: "get" });
// mock
// 获取banner(Home首页轮播图接口)
export const reqGetBannerList = () => mockRequests.get("/banner");
