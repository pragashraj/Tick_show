import {GET} from './core'

export const getEndpointWithPrefix = (endpoint) => {
    return `events/${endpoint}`
}

export const getEvents = (page, size) => {
    const endpoint =  getEndpointWithPrefix(`get-events?page=${page}&size=${size}`)
    return GET(endpoint)
}