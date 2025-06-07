import axios from "axios";

const Instance = axios.create({
    baseURL:'https://dummyjson.com',
    timeout:100000,
})

export default Instance;