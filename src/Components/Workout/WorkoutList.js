import React from 'react';
import Workout from './Workout';
import PropTypes from 'prop-types';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

export default function WorkoutList(props) {

  useFirestoreConnect([
    { collection: 'workouts' }
  ]);

  const workouts = useSelector(state => state.firestore.ordered.workouts);
  if (isLoaded(workouts)) {
    return (
      <>
        <hr/>
        {workouts.map((workout) => {
          return <Workout
            whenWorkoutClicked = { props.onWorkoutSelection }
            name={workout.name}
            duration={workout.duration}
            intensity={workout.intensity}
            equipment={workout.equipment}
            tags={workout.tags}
            details={workout.details}
            img={workout.img}
            id={workout.id}
            key={workout.id}/>
        })}
      </>
    );
      } else {
        return (
        <>
          <h3>Loading...</h3>
        </>
        );
      }
}

WorkoutList.propTypes = {
  onWorkoutSelection: PropTypes.func,
}