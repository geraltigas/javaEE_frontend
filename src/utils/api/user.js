import request from "@/utils/request";

export const GET_CODE = (data) => {
    return request('GET', '/authenticate/get-email-code',data)
}

export const GET_USER = (data) => {
    return request('GET',`/users/get-user/${data}`,null)
}

export const GET_USER_NOTE = (data) => {
    return request('GET',`/notes/get-user/`,data)
}

