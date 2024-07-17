import { commonAPI } from "./commonApi"
import {serverUrl} from "./serverUrl"


//api to add videos


export const allVideoApi =async(reqBody)=>{
 return await   commonAPI('POST',`${serverUrl}/allVideos`,reqBody)
}

//api to get all video
export const getAllvideoApi = async()=>{
    return await commonAPI('GET',`${serverUrl}/allVideos`,"")
}
//delete a video
export const deleteVideoApi = async(id)=>{
    return await commonAPI('DELETE',`${serverUrl}/allvideos/${id}`,{})
}
//api ti add video to watch history
export const addVideoHistoryApi = async(reqBody)=>{
    return await commonAPI('POST',`${serverUrl}/history`,reqBody)
}
export const getVideoHistoryApi = async()=>{
    return await commonAPI('GET',`${serverUrl}/history`,"")
}
export const deletevideoHistoryApi = async(id)=>{
    return await commonAPI('DELETE',`${serverUrl}/history/${id}`,{})
}

export const addCategoryApi = async(reqBody)=>{
    return await commonAPI('POST',`${serverUrl}/category`,reqBody)
}
//api to get all category

export const getAllCategory = async()=>{
    return await commonAPI('GET',`${serverUrl}/category`)
}
// API to delete category
export const removeCategoryApi =async(id)=>{
    return await commonAPI('DELETE',`${serverUrl}/category/${id}`,{})
}
//api to update category
export const UpdateCategoryApi = async (id,reqBody)=>{
    return await commonAPI('PUT',`${serverUrl}/category/${id}`,reqBody)
}