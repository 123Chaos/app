// 当前模块:API接口进行统一管理
import requests from "./request";

// 三级联动的接口
// /api/product/getBaseCategoryList get 无参数
// axios发请求,返回结果为Promise对象
export const reqCategoryList = () => requests({ url: "/product/getBaseCategoryList", method: "get" });;
