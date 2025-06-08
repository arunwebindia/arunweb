import axios from "axios";

let token = localStorage.getItem('token');


const Instance = axios.create({
    baseURL:'http://localhost:8080/api/v1/',
    timeout:100000,
    headers:{
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
    }
})

export default Instance;