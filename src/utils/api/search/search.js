import request from "@/utils/request";

export const SEARCH_BOOK = (data) => {
    return request('get', 'search/books', data)
}

export const SEARCH_KNOWLEDGE = (data) => {
    return request('get', 'search/knowledges', data);
}

export const SEARCH_NOTE = (data) => {
    return request('get', 'search/notes', data);
}

export const SEARCH_VIDEO = (data) => {
    return request('get', 'search/videos', data);
}

export const SEARCH_PROJECT = (data) => {
    return request('get', 'search/projects', data);
}

export const SEARCH_LESSON = (data) => {
    return request('get', 'search/lessons', data);
}

export const SEARCH_TUTORIAL = (data) => {
    return request('get', 'search/tutorials', data);
}
