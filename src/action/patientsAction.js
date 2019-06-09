import {
    SET_PATIENT,
    CLEAR_PATIENT
} from './type'

export const setPatient = patient => ({
    type: SET_PATIENT,
    payload: patient
})

export const clearPatient = () => ({
    type: CLEAR_PATIENT,
    payload: null
})