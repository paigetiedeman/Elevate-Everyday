import React from 'react';
import NewWorkoutForm from './NewWorkoutForm';
import EditWorkout from './EditWorkout';
import WorkoutDetail from './WorkoutDetail';
import WorkoutList from './WorkoutList';
import * as a from './../../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withFirestore, isLoaded } from 'react-redux-firebase';
import { Button } from 'semantic-ui-react';

class WorkoutControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedWorkout: null,
      editing: false,
    };
  }

  handleClick = () => {
    if (this.state.selectedWorkout != null) {
      this.setState({
        selectedWorkout: null,
        editing: false,
      });
    } else {
      const { dispatch } = this.props;
      const action = a.seeWorkouts();
      dispatch(action);
    }
  };

  handleAddingWorkout = () => {
    const { dispatch } = this.props;
    const action = a.seeWorkouts();
    dispatch(action);
  };

  handleChangingWorkout = (id) => {
    this.props.firestore.get({collection: 'workouts', doc: id}).then((workout) => {
      const firestoreWorkout = {
        
      }
    })
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = (
        <EditWorkout workout={this.state.selectedWorkout} />
      );
      buttonText = 'Return to Workouts';
    } else if (this.state.selectedWorkout != null) {
      currentlyVisibleState = (
        <WorkoutDetail workout={this.state.selectedWorkout} />
      );
      buttonText = 'Return to Workouts';
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewWorkoutForm />;
      buttonText = 'Return to Workouts';
    } else {
      currentlyVisibleState = (
        <WorkoutList workoutList={this.props.mainWorkoutList} />
      );
      buttonText = 'Add a New Workout';
    }
    return (
      <>
        {currentlyVisibleState}
        <Button color="teal" onClick={this.handleClick}>
          {buttonText}
        </Button>
      </>
    );
  }
}

WorkoutControl.propTypes = {
  mainWorkoutList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    mainWorkoutList: state.mainWorkoutList,
    formVisibleOnPage: state.formVisibleOnPage,
  };
};

WorkoutControl = connect(mapStateToProps)(WorkoutControl);

export default withFirestore(WorkoutControl);
