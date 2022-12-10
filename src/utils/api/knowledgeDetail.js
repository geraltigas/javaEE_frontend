import request from '@/utils/request'

export const GET_BOOK = (id,data) => {
    return request('get', `/resource/${id}/books`,data)
}

export const GET_PROJECT = (id,data) => {
    return request('get', `/resource/${id}/projects`,data)
}

export const GET_LESSON = (id,data) => {
    return request('get', `/resource/${id}/lessons`,data)
}

export const GET_VIDEO = (id,data) => {
    return request('get', `/resource/${id}/videos`,data)
}

export const GET_TUTORIAL = (id,data) => {
    return request('get', `/resource/${id}/tutorials`,data)
}

export const GET_KNOWLEDGE = (id,data) => {
    return request('get', `/resource/${id}`,data)
}
