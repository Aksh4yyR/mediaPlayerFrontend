import axios from "axios";
import SERVER_URL from "./serverUrl";

const commonAPI= async (httpMethod,url,reqBody)=>
{
    const requestConfig={
        method:httpMethod,
        url,
        data:reqBody
    }
    return await axios(requestConfig).then((res)=>
    {
        return res
    }).catch(err=>{
        return err
    })
}
export default commonAPI