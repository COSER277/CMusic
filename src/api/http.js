/**
 * 网络请求封装
 */
import axios from 'axios'
import Vue from 'vue'

const http = axios.create({

    baseURL: "",//bendi
    //  baseURL: "http://localhost:3000/admin/api" //
})

// 添加请求拦截器
http.interceptors.request.use(function (config) {

    // 在发送请求之前做些什么
    if (localStorage.token) {
        config.headers.Authorization = 'Bearer ' + (localStorage.token); //附加上token Bearer+空格+token

        config.headers = {
            'Content-Type': 'application/json'
        }
        // config.headers = {
        //     'Access-Control-Allow-Origin': 'http://localhost:8081',
        // }
        // config.headers = {
        //     'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept, " +
        //         "WG-App-Version, WG-Device-Id, WG-Network-Type, WG-Vendor, WG-OS-Type, WG-OS-Version, WG-Device-Model, WG-CPU, WG-Sid, WG-App-Id, WG-Token",
        // }
    }

    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
//响应拦截器
http.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error) {
        // console.warn(error)
        // Vue.prototype.$message({
        //     type: "error",
        //     message: error.response.data.msg
        // })
        // if (error.response.status == 401) {
        //     router.push('/login')
        // }
    }
    return Promise.reject(error)
})
export default http;