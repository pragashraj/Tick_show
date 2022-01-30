import {GET, POST} from './core'

export const getEndpointWithPrefix = (endpoint) => {
    return `movies/${endpoint}`
}

export const getMovies = (page, showing) => {
    const endpoint =  getEndpointWithPrefix(`get-movies?page=${page}&showing=${showing}`)
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