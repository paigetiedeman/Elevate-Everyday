import * as c from './../actions/ActionTypes';

export default (state = {}, action ) => {
  const { id } = action;
  switch (action.type) {
    case c.DELETE_WORKOUT: 
      const newState = {...state};
      delete newState[id];
    return newState;
    default:
      return state;
  }
}