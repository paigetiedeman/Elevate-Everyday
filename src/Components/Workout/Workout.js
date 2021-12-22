import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Button } from 'semantic-ui-react';

export default function Workout(props) {
  return (
    <Card.Group>
      <Card>
        <Card.Content>
          <Image floated="left" size="mini" src={props.img} />
          <Card.Header>{props.name}</Card.Header>
          <Card.Meta>{props.duration} minutes</Card.Meta>
          <Card.Description>{props.equipment}</Card.Description>
          <Button color='teal' onClick= {() => props.whenWorkoutClicked(props.id)}>
            Details
          </Button>
        </Card.Content>
        <Card.Content>{props.tags}</Card.Content>
      </Card>
    </Card.Group>
  );
}

Workout.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  duration: PropTypes.number,
  equipment: PropTypes.string,
  tags: PropTypes.string,
  intensity: PropTypes.number,
  id: PropTypes.string,
  whenWorkoutClicked: PropTypes.func,
}