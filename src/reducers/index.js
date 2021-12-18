import formVisibleReducer from "./form-visible-reducer";
import workoutListReducer from "./workout-list-reducer";
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer, 
  mainWorkoutList: workoutListReducer, 
  firestore: firestoreReducer
})

export default rootReducer;