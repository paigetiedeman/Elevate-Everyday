import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Button } from 'semantic-ui-react';

export default function Workout(props) {
  const imgStyle = {
    height: "100px", 
    width: "100px",
  }

  return (
    <Card.Group>
      <Card>
        <Card.Content>
          <Image floated="left" src={props.img} style={imgStyle}/>
          <Card.Header>{props.name}</Card.Header>
          <Card.Meta>{props.duration} minutes</Card.Meta>
          <Card.Description>Equipment Needed: {props.equipment}</Card.Description>
          <Button color='teal' onClick= {() => props.whenWorkoutClicked(props.id)}>
            Details
          </Button>
        </Card.Content>
        <Card.Content>#Cardio {props.tags}</Card.Content>
      </Card>
    </Card.Group>
  );
}

Workout.propTypes = {
  img: PropTypes.any,
  name: PropTypes.string,
  duration: PropTypes.string,
  equipment: PropTypes.string,
  tags: PropTypes.string,
  intensity: PropTypes.string,
  id: PropTypes.string,
  whenWorkoutClicked: PropTypes.func
}