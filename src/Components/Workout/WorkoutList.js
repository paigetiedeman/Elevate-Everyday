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



    return (
      <React.Fragment>
        <hr/>
        {workouts.map((workout) => {
          return <Workout
            whenWorkoutClicked = { props.onWorkoutClick }
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
      </React.Fragment>
    );

}

WorkoutList.propTypes = {
  onWorkoutClick: PropTypes.func
}