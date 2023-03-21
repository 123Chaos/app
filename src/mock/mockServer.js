// 引入模块
import Mock from "mockjs";
// 把json数据引入进来
// webpack默认对外暴露的资源:图片,json
import banner from "./banner.json";
import floor from "./floor.json";

// 第一个参数 请求地址 第二个参数 请求数据
Mock.mock("/mock/banner", { code: 200, data: banner });
Mock.mock("/mock/floor", { code: 200, data: floor });
