import {GET, POST} from './core'

export const getEndpointWithPrefix = (endpoint) => {
    return `theatres/${endpoint}`
}

export const getTheatres = (page, size) => {
    const endpoint =  getEndpointWithPrefix(`get-theatres?page=${page}&size=${size}`)
    return GET(endpoint)
}

export const sortTheatres = (data) => {
    const endpoint =  getEndpointWithPrefix(`sort-theatres`)
    return POST(endpoint, data)
}