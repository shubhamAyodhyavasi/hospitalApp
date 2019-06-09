import {
    combineReducers,
} from 'redux';

import rooms from './roomsReducer'
import patients from './patientsReducer'

export default combineReducers({
    rooms,
    patients,
});
  