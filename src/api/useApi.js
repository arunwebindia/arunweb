import Instance from "../services/intance";

const useApi = async(path)=>{
    try {
        const resp = await Instance.get(path);
        return resp.data;
    } catch (error) {
        console.log(error.message);
    }
}


export default useApi;