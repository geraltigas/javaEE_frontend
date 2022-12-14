import request from "@/utils/request";

export const SEARCH_BOOK = (data) => {
    return request('get', 'search/books', data)
}
