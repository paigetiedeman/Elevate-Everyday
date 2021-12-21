import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

export default function WorkoutDetail(props) {
  const { workout } = props;

  return (
    <>
      <h1>Workout Details</h1>
      <h3>
        {workout.name} - {workout.duration}
      </h3>
      <p>{workout.tags}</p>
      <p>{workout.intensity}</p>
      <p>{workout.equipment}</p>
      <p>{workout.details}</p>
      <Button onClick={props.onEditWorkout} color="teal">
        Edit
      </Button>
      <Button onClick={() => props.onClickingDelete(workout.id)} color="teal">
        Delete
      </Button>
    </>
  );
}

WorkoutDetail.propTypes = {
  workout: PropTypes.object,
  onEditWorkout: PropTypes.func,
  onClickingDelete: PropTypes.func,
};
