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
export const reqGetBannerList = () =>
  mockRequests({ url: "/banner", method: "get" });

// 获取floor数据
export const reqGetFloorList = () =>
  mockRequests({ url: "/floor", method: "get" });

// 获取搜索模块数据
// 当前接口必须给服务器传递一个默认参数，可以是个空对象
export const reqGetSearchInfo = (params) =>
  requests({ url: "/list", method: "post", data: params });
