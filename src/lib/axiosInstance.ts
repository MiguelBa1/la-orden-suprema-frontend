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
    const statusCode = error?.response?.status

    let errorMessage

    if (statusCode && statusCode >= 500) {
      errorMessage = 'Error interno del servidor. Por favor, inténtalo más tarde.'
    } else if (statusCode && statusCode >= 400) {
      errorMessage = error?.response?.data?.message || 'Error en la solicitud.'
    } else {
      errorMessage = 'Ocurrió un error inesperado. Por favor, inténtalo más tarde.'
    }

    return Promise.reject({
      message: errorMessage,
      statusCode,
    })
  }
)
