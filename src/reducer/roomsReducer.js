// roomsReducer.js
import {
    CLEAR_ROOM,
    SET_ROOM,
    SET_ROOMS
} from '../action/type'
const initialState = {
    rooms: [],
    room: null,
}

export default (state = initialState, action)=> {
    const { type, payload } = action
    switch (type) {
        case CLEAR_ROOM:
            return {
                ...state,
                room: null
            }

        case SET_ROOM:
            return {
                ...state,
                room: payload
            }

        case SET_ROOMS:
            return {
                ...state,
                rooms: payload
            }
    
        default:
            return state
    }
}
