import {GET} from './core'

export const getEndpointWithPrefix = (endpoint) => {
    return `landingPage/${endpoint}`
}

export const getContents = () => {
    const endpoint =  getEndpointWithPrefix(`get-landingPage-contents`)
    return GET(endpoint)
}