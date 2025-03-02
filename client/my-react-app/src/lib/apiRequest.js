import axios from 'axios'
const apiRequest = new axios.create({
    baseURL: "https://e-commece-mod2.onrender.com/api",
    withCredentials:true
})
export default apiRequest;