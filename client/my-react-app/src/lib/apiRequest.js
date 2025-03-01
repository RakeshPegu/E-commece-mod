import axios from 'axios'
const apiRequest = new axios.create({
    baseURL: "http://localhost:5500/api",
    withCredentials:true
})
export default apiRequest;