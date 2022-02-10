import {MULTIPART} from './core'

export const getEndpointWithPrefix = (endpoint) => {
    return `admin/${endpoint}`
}

export const createNewMovie = (formData, token) => {
    const endpoint =  getEndpointWithPrefix('create-new-movie')
    return MULTIPART(endpoint, formData, token)
}

export const createNewTheatre = (formData, token) => {
    const endpoint =  getEndpointWithPrefix('create-new-theatre')
    return MULTIPART(endpoint, formData, token)
}

export const createNewEvent = (formData, token) => {
    const endpoint =  getEndpointWithPrefix('create-new-event')
    return MULTIPART(endpoint, formData, token)
}