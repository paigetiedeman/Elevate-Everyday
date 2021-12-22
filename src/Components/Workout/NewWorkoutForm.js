import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Segment, Button } from 'semantic-ui-react';
import { useFirestore } from 'react-redux-firebase';


const NewWorkoutForm = (props) => {
  const [tags, setTags] = useState('');
  const [tagsTwo, setTagsTwo] = useState('');

  const firestore = useFirestore();

  function addWorkoutToFirestore(e) {
    e.preventDefault();
    props.onNewWorkoutCreation();
    let type = { tags, tagsTwo };
    return firestore.collection('workouts').add({
      name: e.target.name.value,
      duration: e.target.duration.value,
      intensity: e.target.intensity.value,
      equipment: e.target.equipment.value,
      details: e.target.details.value,
      img: e.target.img.value,
      type,
    });
  }

  return (
      <Segment inverted textAlign={'center'}>
        <Form inverted size="large" onSubmit={addWorkoutToFirestore}>
          <Form.Group widths="equal">
            <Form.Field required>
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Cardio Pilates"
                required
              />
            </Form.Field>
            <Form.Field required>
              <label>Duration</label>
              <input
                type="number"
                name="duration"
                placeholder="20"
                min="0"
                required
              />
            </Form.Field>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field>
              <label>Intensity</label>
              <input
                type="number"
                name="intensity"
                placeholder="Enter a number 1-5"
                min="1"
                max="5"
              />
            </Form.Field>
            <Form.Field>
              <label>Equipment Needed</label>
              <input type="text" name="equipment" placeholder="Mat" />
            </Form.Field>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field>
              <label>Workout Tags</label>
              <select
                name="tags"
                placeholder="Tags"
                width={12}
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              >
                <option value="#Pilates">Pilates</option>
                <option value="#Yoga">Yoga</option>
                <option value="#Cardio">Cardio</option>
                <option value="#HIIT">HIIT</option>
                <option value="#Stretch">Stretch</option>
                <option value="#Barre">Barre</option>
                <option value="#Kickboxing">Kickboxing</option>
                <option value="#LowerBody">Lower Body</option>
                <option value="#UpperBody">Upper Body</option>
                <option value="#Abs">Abs</option>
                <option value="#Arms">Arms</option>
                <option value="#Quick">Quick</option>
              </select>
            </Form.Field>
            <Form.Field>
              <label>Workout Tags</label>
              <select
                name="tagsTwo"
                placeholder="Tags"
                width={12}
                value={tagsTwo}
                onChange={(e) => setTagsTwo(e.target.value)}
              >
                <option value="#Pilates">Pilates</option>
                <option value="#Yoga">Yoga</option>
                <option value="#Cardio">Cardio</option>
                <option value="#HIIT">HIIT</option>
                <option value="#Stretch">Stretch</option>
                <option value="#Barre">Barre</option>
                <option value="#Kickboxing">Kickboxing</option>
                <option value="#LowerBody">Lower Body</option>
                <option value="#UpperBody">Upper Body</option>
                <option value="#Abs">Abs</option>
                <option value="#Arms">Arms</option>
                <option value="#Quick">Quick</option>
              </select>
            </Form.Field>
          </Form.Group>
          <Form.Input
            label="Image"
            type="text"
            placeholder="https://"
            name="img"
          />
          <Form.TextArea
            label="Details"
            name="details"
            placeholder="4X20 plyo lunges, 4x20 elevated plié squats..."
          />
          <Button type="submit" color="teal">
            Add
          </Button>
        </Form>
      </Segment>
  );
};

NewWorkoutForm.propTypes = {
  onNewWorkoutCreation: PropTypes.func,
};

export default NewWorkoutForm;
