import {GET, POST} from './core'

export const getEndpointWithPrefix = (endpoint) => {
    return `movies/${endpoint}`
}

export const getMovies = (page) => {
    const endpoint =  getEndpointWithPrefix(`get-movies/${page}`)
    return GET(endpoint)
}

export const filterMovies = (data) => {
    const endpoint =  getEndpointWithPrefix('filter-movies')
    return POST(endpoint, data)
}

export const sortMovies = (sortBy, page) => {
    const endpoint =  getEndpointWithPrefix(`sort-movies?sortBy=${sortBy}&page=${page}`)
    return GET(endpoint)
}

export const searchMovies = (name, page) => {
    const endpoint =  getEndpointWithPrefix(`search-movie?name=${name}&page=${page}`)
    return GET(endpoint)
}