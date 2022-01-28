import {POST} from './core'

export const getEndpointWithPrefix = (endpoint) => {
    return `auth/${endpoint}`
}

export const signUp = (data) => {
    const endpoint =  getEndpointWithPrefix('sign-up')
    return POST(endpoint, data)
}

export const signIn = (data) => {
    const endpoint =  getEndpointWithPrefix('sign-in')
    return POST(endpoint, data)
}