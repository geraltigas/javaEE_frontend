import request from '@/utils/request'

export const GET_VIDEO = (data) => {
    return request('get', `/videos`,data)
}

export const GET_PROJECT = (data) => {
    return request('get', `/projects`,data)
}

export const GET_KNOWLEDGE = (data) => {
    return request('get','mysql-knowledge/top',data)
}

export const GET_NOTE = (data) => {
    return request("get","/notes/get-notes-by-time",data)
}
