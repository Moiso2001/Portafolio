import axios from "axios"
import { BACKEND_URL } from "./constants";

export const UPDATE_RESPONSE = 'UPDATE_RESPONSE';
export const UPDATE_SEARCH = "UPDATE_SEARCH";
export const GET_ALL = 'GET_ALL'

export const setResponse = (input) => {
    return (dispatch) => {
            dispatch({type: UPDATE_RESPONSE, payload: input})
    }
}

export const getAll = () => {
    return (dispatch) => {
        axios(`${BACKEND_URL}all`)
        .then(res => {
            dispatch({type: GET_ALL, payload: res.data})
            dispatch({type: UPDATE_RESPONSE, payload: 'home'})
        })
        .catch(err => console.log(err))
    }
}