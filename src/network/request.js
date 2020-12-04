import axios from 'axios'

export function request (config) {
  const instance = axios.create({
    baseURL: '***'
  })

  instance.interceptors.response.use(response => {
    // Do something before response is sent
    return response.data
  }, error => {
    // Do something with response error
    return Promise.reject(error)
  })

  return instance(config)
}
