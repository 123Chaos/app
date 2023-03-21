// 对于axios进行二次封装
import axios from "axios";
// 引入进度条
import nProgress from "nprogress";
// start:进度条开始 done:进度条结束
// 引入进度条样式
import "nprogress/nprogress.css";
// 1.利用axios的方法create创建一个axios实例
const requests = axios.create({
  // 配置对象
  // 基础路径,发请求的时候,路径中会出现api
  baseURL: "/mock",
  // 代表请求超时的时间为5s
  timeout: 5000,
});

// 请求拦截器:在发送请求之前,请求拦截器可以检测到,可以在发送前完成一些业务
requests.interceptors.request.use((config) => {
  // 进度条开始动
  nProgress.start();
  return config;
});

// 响应拦截器:在服务器发回数据之前,响应拦截器可以检测到,可以在发送前完成一些业务
requests.interceptors.response.use(
  (res) => {
    // 响应成功
    // 进度条结束
    nProgress.done();
    return res.data;
  },
  (error) => {
    // 响应失败
    return Promise.reject(new Error("fail"));
  }
);

export default requests;
