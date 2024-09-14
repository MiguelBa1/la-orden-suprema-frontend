import axios from 'axios'

const baseURL = import.meta.env.VITE_API_BASE_URL

export const axiosInstance = axios.create({
  baseURL: baseURL,
})

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      const decodedToken = JSON.parse(token)
      config.headers['Authorization'] = `Bearer ${decodedToken.token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    const errorMessage = error?.response?.data?.message || {
      message: 'Ocurrió un error inesperado',
    }
    
    return Promise.reject({
      message: errorMessage,
    })
  }
)
