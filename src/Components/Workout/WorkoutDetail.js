import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import './Workout.css';

export default function WorkoutDetail(props) {
  const { workout } = props;

  const imgStyle = {
    height: '302px',
    width: 'auto',
    float: 'left',
    borderLeft: '2px solid #B413EC',
    marginRight: '10px',
  };

  const title = {
    textAlign: 'center',
    fontSize: '40px',
  };

  const details = {
    marginBottom: '6px',
  }

  return (
    <>
      <h1 style={title} className="title">
        {workout.name}
      </h1>
      <div style={details}>
        <img src={workout.img} alt="img" style={imgStyle} />
        <h3>Average Time: {workout.duration} minutes</h3>
        <p>
          {workout.type.tags}, {workout.type.tagsTwo}
        </p>
        <p>{workout.intensity} Intensity</p>
        <p>Equipment Needed: {workout.equipment}</p>
        <p>What's to be expected: {workout.details}</p>
        <br />
        <Button onClick={() => props.onClickingEdit(workout.id)} color="teal">
          Edit
        </Button>
        <Button onClick={() => props.onClickingDelete(workout.id)} color="teal">
          Delete
        </Button>
      </div>
      <br />
    </>
  );
}

WorkoutDetail.propTypes = {
  workout: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func,
};
