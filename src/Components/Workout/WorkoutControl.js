import React from 'react';
import NewWorkoutForm from './NewWorkoutForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withFirestore, isLoaded } from 'react-redux-firebase';


class WorkoutControl extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        selectedWorkout: null,
        editing: false
      }
    }

    handleAddingWorkout = () => {
      
    }

    
  render() {
  return (
    <div>
      <h1>Workout Control</h1>
    </div>
  )
  }
}

export default WorkoutControl;
