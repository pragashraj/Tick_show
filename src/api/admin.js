import {MULTIPART} from './core'

export const getEndpointWithPrefix = (endpoint) => {
    return `admin/${endpoint}`
}

export const createNewMovies = (formData, token) => {
    const endpoint =  getEndpointWithPrefix('create-new-movie')
    return MULTIPART(endpoint, formData, token)
}

export const createNewTheatre = (formData, token) => {
    const endpoint =  getEndpointWithPrefix('create-new-theatre')
    return MULTIPART(endpoint, formData, token)
}