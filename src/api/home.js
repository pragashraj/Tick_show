import {GET, POST} from './core'

export const getEndpointWithPrefix = (endpoint) => {
    return `landingPage/${endpoint}`
}

export const getContents = () => {
    const endpoint =  getEndpointWithPrefix(`get-landingPage-contents`)
    return GET(endpoint)
}

export const searchMovie = (data) => {
    const endpoint =  getEndpointWithPrefix(`search-movie`)
    return POST(endpoint, data)
}