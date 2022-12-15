import request from "@/utils/request";

export const GET_CODE = (data) => {
    return request('GET', '/authenticate/get-email-code',data)
}
