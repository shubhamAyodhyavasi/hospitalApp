import {
    SET_PATIENT,
    CLEAR_PATIENT
} from '../action/type' 

initialState = {
    patients: [{
        name: "rama",
        department: "ortho",
        age: 39,
        address: "12, street A, behind the Park.",
        doctor: {
          name: "Raju",
          departments: ["ortho"],
          id: "123",
          age: 50,
        },
        room: 2,
        id: "1"
      },
      {
        name: "Shyama",
        department: "ortho",
        age: 53,
        address: "45, street C, main market.",
        doctor: {
          name: "Raju",
          departments: ["ortho"],
          id: "123",
          age: 50,
        },
        room: 2,
        id: "2"
      }],
    patient: null
}

export default (state = initialState, action)=> {
    const {
        type, payload
    } = action
    switch (type) {
        case SET_PATIENT:
            return {
                ...state,
                patient: payload
            }
            
        case CLEAR_PATIENT:
            return {
                ...state,
                patient: null
            }
    
        default:
            return state
    }
}