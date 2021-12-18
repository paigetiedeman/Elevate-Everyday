import * as c from './../actions/ActionTypes';

export default (state = false, action) => {
  switch (action.type) {
    case c.SEE_WORKOUTS:
      return !state;
    default:
      return state;
  }
};
