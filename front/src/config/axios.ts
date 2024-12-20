import axios, { AxiosInstance } from 'axios'

class Http {
  instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:3000/',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}

const http = new Http().instance

http.interceptors.response.use((response) => {
  return response
}, function (error) {
  return Promise.reject(error);
})

http.interceptors.request.use((config) => {
  return config
})

export default http
