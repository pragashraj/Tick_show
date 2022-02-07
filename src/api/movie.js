import {GET, POST} from './core'

export const getEndpointWithPrefix = (endpoint) => {
    return `movies/${endpoint}`
}

export const getMovies = (page, size) => {
    const endpoint =  getEndpointWithPrefix(`get-movies?page=${page}&size=${size}`)
    return GET(endpoint)
}

export const filterMovies = (data) => {
    const endpoint =  getEndpointWithPrefix('filter-movies')
    return POST(endpoint, data)
}

export const sortMovies = (data) => {
    const endpoint =  getEndpointWithPrefix(`sort-movies`)
    return POST(endpoint, data)
}

export const searchMovies = (name, page) => {
    const endpoint =  getEndpointWithPrefix(`search-movie?name=${name}&page=${page}`)
    return GET(endpoint)
}

export const bookMyTickets = (data) => {
    const endpoint =  getEndpointWithPrefix('book-tickets')
    return POST(endpoint, data)
}