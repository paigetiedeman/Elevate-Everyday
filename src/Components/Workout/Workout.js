import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Button } from 'semantic-ui-react';

export default function Workout(props) {
  const imgStyle = {
    height: '220px',
    width: 'auto',
  };

  return (
    <>
      <Card color="purple">
        <Card.Content>
          <Image floated="left" src={props.img} style={imgStyle} />
          <Card.Header style={{ fontSize: '24px' }}>{props.name}</Card.Header>
          <Card.Meta>{props.duration} minutes</Card.Meta>
          <Card.Meta>{props.intensity}i</Card.Meta>
          <Card.Description>
            Equipment Needed: {props.equipment}
          </Card.Description>

          <Button
            color="teal"
            floated="right"
            onClick={() => props.whenWorkoutClicked(props.id)}
          >
            Details
          </Button>
        </Card.Content>
        <Card.Content extra>
          {props.type.tags}, {props.type.tagsTwo}
        </Card.Content>
      </Card>
      <br />
    </>
  );
}

Workout.propTypes = {
  img: PropTypes.any,
  name: PropTypes.string,
  duration: PropTypes.string,
  equipment: PropTypes.string,
  type: PropTypes.any,
  tags: PropTypes.string,
  tagsTwo: PropTypes.string,
  intensity: PropTypes.string,
  id: PropTypes.string,
  whenWorkoutClicked: PropTypes.func,
};
