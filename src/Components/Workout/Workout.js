import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Button } from 'semantic-ui-react';

export default function Workout(props) {
  return (
    <Card.Group>
      <Card>
        <Card.Content>
          <Image floated="left" size="mini" src={props.img} />
          <Card.Header>{props.title}</Card.Header>
          <Card.Meta>{props.duration} minutes</Card.Meta>
          <Card.Description>{props.equipment}</Card.Description>
          <Button color='teal'>
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
  title: PropTypes.string,
  duration: PropTypes.number,
  equipment: PropTypes.string,
  tags: PropTypes.string,
}