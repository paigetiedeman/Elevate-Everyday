import React from 'react';
import Blog from './Blog';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';
import { blogList } from './BlogList';

export default function DisplayList() {
  return (
      <>
        <Card.Group >
        {blogList.map((blog) => {
          return <Blog
            title={blog.title}
            author={blog.author}
            date={blog.date}
            snippet={blog.snippet}
            content={blog.content}
            photo={blog.photo}
            id={blog.id}
            key={blog.id}/>
        })}
        </Card.Group>
        <br />
      </>
  )
}
