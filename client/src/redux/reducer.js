import { UPDATE_RESPONSE } from "./actions";

const initialState = {
    response: 
    `{
      "msg": "Please type an available route",
      "routes": [
          {
              "about": [
                  "me",
                  "love",
                  "abilities",
                  "aspirations"
              ]
          },
          "work",
          "experience",
          "links"
      ]
    }`
}

const rootReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case UPDATE_RESPONSE:
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