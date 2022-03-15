import {MULTIPART, POST, GET} from './core'

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

export const responseToUserMessage = (data, token) => {
    const endpoint =  getEndpointWithPrefix('response-to-user-message')
    return POST(endpoint, data, token)
}

export const getMessages = (page, token) => {
    const endpoint =  getEndpointWithPrefix(`get-messages/${page}`)
    return GET(endpoint, token)
}

export const getMessagesByReplied = (isReplied, page, token) => {
    const endpoint =  getEndpointWithPrefix(`get-messages-by-isReplied?isReplied=${isReplied}&page=${page}`)
    return GET(endpoint, token)
}

export const searchApi = (end, value, token) => {
    const endpoint =  getEndpointWithPrefix(`search-${end}/${value}`)
    return GET(endpoint, token)
}

export const updateApi = (end, data, token) => {
    const endpoint =  getEndpointWithPrefix(`update-${end}`)
    return POST(endpoint, data, token)
}

export const deleteApi = (end, data, token) => {
    const endpoint =  getEndpointWithPrefix(`delete-${end}`)
    return POST(endpoint, data, token)
}