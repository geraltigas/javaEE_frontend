import request from '@/utils/request'

export const GET_BOOK = (id) => {
    return request('get', `/resource/${id}/books`)
}

export const GET_PROJECT = (id) => {
    return request('get', `/resource/${id}/projects`)
}

export const GET_LESSON = (id) => {
    return request('get', `/resource/${id}/lessons`)
}

export const GET_VIDEO = (id) => {
    return request('get', `/resource/${id}/videos`)
}

export const GET_TUTORIAL = (id) => {
    return request('get', `/resource/${id}/tutorials`)
}

export const GET_KNOWLEDGE = (id) => {
    return request('get', `/resource/${id}`)
}
