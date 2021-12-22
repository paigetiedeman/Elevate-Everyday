import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

export default function WorkoutDetail(props) {
  const { workout } = props;

  const imgStyle = {
    height: "300px", 
    width: "auto",
    float: "left", 
    padding: "20px"
  }

  return (
    <>
      <h1>Workout Details</h1>
      <img src={workout.img} alt="img" style={imgStyle}/>
      <h3>
        {workout.name} - {workout.duration} minutes
      </h3>
      <p>#{workout.tags}</p>
      <p>{workout.intensity} intensity</p>
      <p>Equipment Needed: {workout.equipment}</p>
      <p>What's to be expected: {workout.details}</p>
      <br />
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
