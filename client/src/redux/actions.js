import axios from "axios"
import { BACKEND_URL } from "./constants";

export const UPDATE_RESPONSE = 'UPDATE_RESPONSE';

export const setResponse = (input) => {
    return (dispatch) => {
        axios(`${BACKEND_URL}${input}`)
        .then(res => {
            dispatch({type: UPDATE_RESPONSE, payload: res.data})
        })
        .catch(err => console.log(err))
    }
}