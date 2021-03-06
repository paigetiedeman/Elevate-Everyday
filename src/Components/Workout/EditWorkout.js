import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useFirestore } from 'react-redux-firebase';
import { Form, Segment, Button } from 'semantic-ui-react';

export default function EditWorkout(props) {
  
  const firestore = useFirestore();

  const { workout } = props;

  const [tags, setTags] = useState('');
  const [tagsTwo, setTagsTwo] = useState('');

  function handleEditWorkoutForm(e) {
    e.preventDefault();
    props.onEditWorkout();
    let type = { tags, tagsTwo };
    const propertiesToUpdate = {
      name: e.target.name.value,
      duration: e.target.duration.value,
      intensity: e.target.intensity.value,
      equipment: e.target.equipment.value,
      details: e.target.details.value,
      img: e.target.img.value,
      type
    };
    return firestore.update(
      { collection: 'workouts', doc: workout.id },
      propertiesToUpdate
    );
  }

  return (
    <Segment inverted textAlign={'center'}>
      <Form inverted size="large" onSubmit={handleEditWorkoutForm}>
        <Form.Group widths="equal">
          <Form.Field required>
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Cardio Pilates"
              required
              defaultValue={props.workout.name}
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
              defaultValue={props.workout.duration}
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
              defaultValue={props.workout.intensity}
            />
          </Form.Field>
          <Form.Field>
            <label>Equipment Needed</label>
            <input type="text" name="equipment" placeholder="Mat" defaultValue={props.workout.equipment}/>
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
          defaultValue={props.workout.img}
        />
        <Form.TextArea
          label="Details"
          name="details"
          placeholder="4X20 plyo lunges, 4x20 elevated pli?? squats..."
          defaultValue={props.workout.details}
        />
        <Button type="submit" color="teal">
          Save
        </Button>
      </Form>
    </Segment>
  );
}
EditWorkout.propTypes = {
  workout: PropTypes.object,
  onEditWorkout: PropTypes.func,
};
