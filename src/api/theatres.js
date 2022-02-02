import {GET} from './core'

export const getEndpointWithPrefix = (endpoint) => {
    return `theatres/${endpoint}`
}

export const getTheatres = (page, size) => {
    const endpoint =  getEndpointWithPrefix(`get-theatres?page=${page}&size=${size}`)
    return GET(endpoint)
}