//define all api for project,it calls commonAPI functions
import commonAPI  from './commonAPI'
import SERVER_URL from './serverUrl'


//uploadVideo api-result or api must call by Add component
export const  uploadVideoAPI=async (video)=>
{
return await commonAPI("POST",`${SERVER_URL}/allVideos`,video)
}

//getAllVideoAPI-called by view component

export const getAllVideoAPI=async ()=>
{
    return await commonAPI("GET",`${SERVER_URL}/allVideos`,"")
}

//save history API-called by videoCard

export const saveHistoryAPI=async (videoDetails)=>{
    return await commonAPI("POST",`${SERVER_URL}/history`,videoDetails)
}

//getHistoryAPI-called by History
export const getHistoryAPI=async ()=>
{
    return await commonAPI("GET",`${SERVER_URL}/history`,"")
}

//removeHistoryAPI-called by history
export const removeHistoryAPI=async (id)=>
{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${id}`,{})
}

//removeVideoAPI-called by videocard
export const removeVideoAPI=async (id)=>
    {
        return await commonAPI("DELETE",`${SERVER_URL}/allVideos/${id}`,{})
    }
//addCategoryAPI called by category

export const addCategoryAPI =async (categoryDetails)=>
{
    return await commonAPI("POST",`${SERVER_URL}/categories`,categoryDetails)
}

//getAllCategoryAPI-called by Category

export const getAllCategoryAPI=async ()=>
{
    return await commonAPI("GET",`${SERVER_URL}/categories`,"")
}

//removeCategoryAPI-called by category

export const removeCategoryAPI=async (id)=>
{
    return await commonAPI("DELETE",`${SERVER_URL}/categories/${id}`,{})
}

//getSingleVideoAPI-called by category

export const getSingleVideoAPI=async (id)=>
{
    return await commonAPI("GET",`${SERVER_URL}/allVideos/${id}`,"")
}

//updateCategory-called by category

export const updateCategoryAPI=async(categoryId,updateCategoryDetails)=>
{
return  await commonAPI("PUT",`${SERVER_URL}/categories/${categoryId}`,updateCategoryDetails)

}
//getSingleCategoryAPI -Called by view

export const getSingleCategoryAPI=async(id)=>
{
    return await commonAPI("GET",`${SERVER_URL}/categories/${id}`,"")
}