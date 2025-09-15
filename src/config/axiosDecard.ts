import axios from 'axios'
import { createSignature } from '../utils/crypto'
import { env } from './env'

const axiosDecard = axios.create({
  baseURL: env.decard.baseUrl,
})

axiosDecard.interceptors.request.use(
  (requestConfig) => {
    const secret = env.decard?.secret
    if (secret) {
      const signature = createSignature(secret, requestConfig.data)
      requestConfig.headers.set('Api-sign', signature)
    }

    return requestConfig
  },
  (error) => {
    return Promise.reject(error)
  },
)

export { axiosDecard }
