import request from '@/utils/request'

export const GET_GRAPH = (data) => {
    return request('get', 'knowledge', data)
}

export const ADD_NODE = (data) => {
    return request('post', 'knowledge', data)
}

export const ADD_RELATION = (data) => {
    return request('post', 'relation', data)
}

export const GET_FIRST25 = () => {
    return request('get', 'knowledge/first25')
}


