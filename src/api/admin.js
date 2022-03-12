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

export const searchMovie = (value, token) => {
    const endpoint =  getEndpointWithPrefix(`search-movie/${value}`)
    return GET(endpoint, token)
}

export const searchEvent = (value, token) => {
    const endpoint =  getEndpointWithPrefix(`search-event/${value}`)
    return GET(endpoint, token)
}

export const searchTheatre = (value, token) => {
    const endpoint =  getEndpointWithPrefix(`search-theatre/${value}`)
    return GET(endpoint, token)
}

export const editMovieItem = (data, token) => {
    const endpoint =  getEndpointWithPrefix('edit-movie')
    return POST(endpoint, data, token)
}

export const updateMovieItem = (data, token) => {
    const endpoint =  getEndpointWithPrefix('update-movie')
    return POST(endpoint, data, token)
}

export const deleteMovieItem = (data, token) => {
    const endpoint =  getEndpointWithPrefix('delete-movie')
    return POST(endpoint, data, token)
}

export const editEventItem = (data, token) => {
    const endpoint =  getEndpointWithPrefix('edit-event')
    return POST(endpoint, data, token)
}

export const updateEventItem = (data, token) => {
    const endpoint =  getEndpointWithPrefix('update-event')
    return POST(endpoint, data, token)
}

export const deleteEventItem = (data, token) => {
    const endpoint =  getEndpointWithPrefix('delete-event')
    return POST(endpoint, data, token)
}

export const editTheatreItem = (data, token) => {
    const endpoint =  getEndpointWithPrefix('edit-theatre')
    return POST(endpoint, data, token)
}

export const updateTheatretItem = (data, token) => {
    const endpoint =  getEndpointWithPrefix('update-theatre')
    return POST(endpoint, data, token)
}

export const deleteTheatretItem = (data, token) => {
    const endpoint =  getEndpointWithPrefix('delete-theatre')
    return POST(endpoint, data, token)
}