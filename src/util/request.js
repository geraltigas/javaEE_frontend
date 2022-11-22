import axios from 'axios'

const myAxios = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 20000
})

myAxios.interceptors.request.use((config) => {
    // todo: handle token
    return config
}, (error) => {
    return Promise.reject(error);
})

export default (url, method = 'GET', params = {}, data = {}, headers = {})=> {
    return myAxios({
        url,
        method,
        params,
        data,
        headers
    })
}
