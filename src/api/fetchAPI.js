
import Instance from "../services/intance";

const getAPI = async(path)=>{
    try {
        const resp = await Instance.get(path);
        return resp.data;
    } catch (error) {
        console.log(error.message);
    }
}

const postAPI = async(path,data)=>{
    try {
        const resp = await Instance.post(path,data);
        return resp.data;
    } catch (error) {
        console.log(error.message);
    }
}

const patchAPI = async(path,data)=>{
    try {
        const resp = await Instance.post(path,data);
        return resp.data;
    } catch (error) {
        console.log(error.message);
    }
}

const deleteAPI = async(path)=>{
    try {
        const resp = await Instance.get(path);
        return resp.data;
    } catch (error) {
        console.log(error.message);
    }
}

export {getAPI,postAPI,patchAPI,deleteAPI}