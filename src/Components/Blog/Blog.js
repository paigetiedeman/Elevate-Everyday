import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Button, Icon } from 'semantic-ui-react';

export default function Blog(props) {

  const photoStyle = {
    height: 'auto',
    width: 'auto'
  }

  return (
    <Card fluid color="pink">
        <Image src={props.photo} style={photoStyle}/>
      <Card.Content>
        <Card.Header>{props.title}</Card.Header>
        <Card.Meta>By: {props.author}</Card.Meta>
        <Card.Description >{props.snippet}</Card.Description>
        <br />
        <Button color="purple" floated="right">See More</Button>
      </Card.Content>
      <Card.Content extra>
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
  date: PropTypes.string,
  content: PropTypes.string,
};
