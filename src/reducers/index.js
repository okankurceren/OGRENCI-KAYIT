import { combineReducers } from 'redux';
import kimlikdogrulamareducers from './KimlikDogrulamaReducers';
import studentlistreducers from './StudentCreateReducers';
import studentdatareducers from './StudentDataReducers';
import studentupdatereducers from './StudentUpdateReducers';


export default combineReducers({
  kimlikdogrulamaResponse: kimlikdogrulamareducers,
  studentsListResponse: studentlistreducers,
  studentDataResponse: studentdatareducers,
  studentUpdateReducers: studentupdatereducers
});
