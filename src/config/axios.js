import axios from 'axios'

const axiosClient = axios.create({
	baseURL: process.env.STRAPI_API_URL
})

export default axiosClient