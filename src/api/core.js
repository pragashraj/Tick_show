import axios from 'axios'

export const POST = async(endpoint, requestBody = {}, authorization = null) => {
    const instance = createInstance(authorization, 'application/json')

    const response = await instance.post(endpoint, requestBody)

    return response.data
}

export const GET = async(endpoint, authorization = null) => {
    const instance = createInstance(authorization, 'application/json')
        
    const response = await instance.get(endpoint)
    
    return response.data
}

const createInstance = (authorization, contentType) => {
    const instance = axios.create({
        baseURL: "http://localhost:9000/api/"
    })
      
    if (authorization) {
        instance.defaults.headers.common['Authorization'] = `Bearer ${authorization}`
    }

    instance.defaults.headers.post['Content-Type'] = contentType

    return instance
}