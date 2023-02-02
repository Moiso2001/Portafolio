import axios from "axios"
import { BACKEND_URL } from "./constants";

export const UPDATE_RESPONSE = 'UPDATE_RESPONSE';
export const UPDATE_SEARCH = "UPDATE_SEARCH";

export const setResponse = (input) => {
    return (dispatch) => {
        axios(`${BACKEND_URL}${input}`)
        .then(res => {
            dispatch({type: UPDATE_RESPONSE, payload: {response: res.data, search: input}})
        })
        .catch(err => console.log(err))
    }
}