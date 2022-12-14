import axios from 'axios'
import {BASE_URL, TIMEOUT} from "@/utils/config";
import store from "@/store";
import router from "@/router";

const base_request = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT
})

// 请求拦截器
base_request.interceptors.request.use(config =>{
    if(store.state.token){
        config.headers.common['token'] =store.state.token
    }
    return config;
}, error =>{
    //对请求错误做什么
    return Promise.reject(error);
})

// 响应拦截器
base_request.interceptors.response.use(response =>{
    return response;
}, error=>{
    if(error.response){
        switch(error.response.status){
            case 401:
                localStorage.removeItem('token');
                router.replace({
                    path: '/login',
                    query: {redirect: router.currentRoute.fullPath}//登录成功后跳入浏览的当前页面
                })
        }
    }
})

export default function (method, url, data = null) {
    method = method.toLowerCase();
    if (method === 'post') {
        return base_request.post(url, data)
    } else if (method === 'get') {
        return base_request.get(url, { params: data })
    } else if (method === 'delete') {
        return base_request.delete(url, { params: data })
    }else if(method === 'put'){
        return base_request.put(url,data)
    }else{
        console.error('unknown method'+method)
        return false
    }
}
