import apiRequest from "./apiRequest"

export const addressLoader = async({params})=>{
    const res = await apiRequest(params.tokenUserId)
    return res
}