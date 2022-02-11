import {POST, GET} from './core'

export const getEndpointWithPrefix = (endpoint) => {
    return `contact/${endpoint}`
}

export const sendMessage = (data) => {
    const endpoint =  getEndpointWithPrefix('send-message')
    return POST(endpoint, data)
}

export const getMessages = (page) => {
    const endpoint =  getEndpointWithPrefix(`get-messages/${page}`)
    return GET(endpoint)
}