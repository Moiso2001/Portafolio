import { UPDATE_RESPONSE, GET_ALL } from "./actions";

const initialState = {
    response: {},
    body: [],
    search: ''
}

const rootReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case UPDATE_RESPONSE:

            const responseToBody = state.response[payload.replace('/', '')]
            console.log(payload)
            console.log(responseToBody)

            if(responseToBody){
                return{
                    ...state,
                    body: responseToBody,
                    search: payload
                }
            } else {
                return{
                    ...state,
                    body: state.response.home,
                    search: payload
                }
            }
        case GET_ALL: 
            return{
                ...state,
                response: payload
            }
        default:
            return{
                ...state
            }
            break;
    }
}

export default rootReducer;