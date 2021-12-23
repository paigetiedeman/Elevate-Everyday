import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Button, Icon } from 'semantic-ui-react';

export default function Blog() {
  return (
    <Card color="pink">
      <Card.Content>
        <Image floated="right" src={props.photo} />
        <Card.Header>{props.title}</Card.Header>
        <Card.Meta>By: {props.author}</Card.Meta>
        <Card.Description>{props.snippet}</Card.Description>
        <Button color="purple">See More</Button>
      </Card.Content>
      <Card.Content>
        <Icon name="calendar alternate outline" /> Posted: {props.date}
      </Card.Content>
    </Card>
  );
}

Blog.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  photo: PropTypes.any,
  snippet: PropTypes.string,
  date: PropTypes.date,
  content: PropTypes.string,
};
