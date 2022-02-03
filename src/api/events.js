import {GET, POST} from './core'

export const getEndpointWithPrefix = (endpoint) => {
    return `events/${endpoint}`
}

export const getEvents = (page, size) => {
    const endpoint =  getEndpointWithPrefix(`get-events?page=${page}&size=${size}`)
    return GET(endpoint)
}

export const filterEvents = (data) => {
    const endpoint =  getEndpointWithPrefix('filter-events')
    return POST(endpoint, data)
}

export const sortEvents = (data) => {
    const endpoint =  getEndpointWithPrefix(`sort-events`)
    return POST(endpoint, data)
}