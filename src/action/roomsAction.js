import { CLEAR_ROOM, SET_ROOM, SET_ROOMS } from "./type";

export const setRoom = room => ({
    type: SET_ROOM,
    payload: room
})
export const setRooms = rooms => ({
    type: SET_ROOMS,
    payload: rooms
})
export const clearRoom = () => ({
    type: CLEAR_ROOM,
    payload: null
})