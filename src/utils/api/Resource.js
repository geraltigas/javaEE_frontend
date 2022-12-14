import request from "@/utils/request";

export const GET_PROJECTS = (data) => {
    return request('GET', '/projects', data)
}

export const GET_VIDEOS = (data) => {
    return request('GET', '/videos', data)
}

export const GET_BOOKS = (data) => {
    return request('GET', '/books', data)
}

export const GET_NOTES = (data) => {
    return request('GET', '/notes', data)
}
