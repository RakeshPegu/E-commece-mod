import axios from 'axios'
const apiRequest = new axios.create({
    baseURL: "https://e-commece-mod.onrender.com/api",
    withCredentials:true
})
export default apiRequest;