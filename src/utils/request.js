import axios from 'axios'
import {BASE_URL, TIMEOUT} from "@/utils/config";

const base_request = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT
})

// 请求拦截器
base_request.interceptors.request.use((config) => {
    // todo: handle token
    return config
}, (error) => {
    return Promise.reject(error);
})

// 响应拦截器
base_request.interceptors.response.use((response) => {
    return response.data
}, (error) => {
    return Promise.reject(error);
})

export default function (method, url, data = null) {
    method = method.toLowerCase();
    if (method === 'post') {
        return base_request.post(url, data)
    } else if (method === 'get') {
        console.log(data)
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
