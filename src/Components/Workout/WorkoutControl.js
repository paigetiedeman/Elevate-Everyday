import React from 'react';
import NewWorkoutForm from './NewWorkoutForm';
import EditWorkout from './EditWorkout';
import WorkoutDetail from './WorkoutDetail';
import WorkoutList from './WorkoutList';
import * as a from './../../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withFirestore } from 'react-redux-firebase';
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
      const action = a.toggleForm();
      dispatch(action);
    }
  };

  handleAddingWorkout = () => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  };

  handleChangingWorkout = (id) => {
    this.props.firestore.get({collection: 'workouts', doc: id}).then((workout) => {
      const firestoreWorkout = {
        name: workout.get('name'),
        duration: workout.get('duration'),
        intensity: workout.get('intensity'),
        tags: workout.get('tags'),
        equipment: workout.get('equipment'),
        details: workout.get('details'),
        img: workout.get('img'),
        id: workout.id
      }
      this.setState({selectedWorkout: firestoreWorkout});
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditing = () => {
    this.setState({
      editing: false,
      selectedWorkout: null
    });
  }

  handleDelete = (id) => {
    this.props.firestore.delete({collection: 'workouts', doc: id});
    this.setState({selectedWorkout: null});
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = (
        <EditWorkout workout={this.state.selectedWorkout} onEditWorkout={this.handleEditing}/>
      );
      buttonText = 'Return to Workouts';
    } else if (this.state.selectedWorkout != null) {
      currentlyVisibleState = (
        <WorkoutDetail workout={this.state.selectedWorkout} onClickingDelete={this.handleDelete} onClickingEdit={this.handleEditClick}/>
      );
      buttonText = 'Return to Workouts';
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewWorkoutForm onNewWorkoutCreations={this.handleAddingWorkout}/>;
      buttonText = 'Return to Workouts';
    } else {
      currentlyVisibleState = (
        <WorkoutList workoutList={this.props.mainWorkoutList} onWorkoutClick={this.handleChangingWorkout} />
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
