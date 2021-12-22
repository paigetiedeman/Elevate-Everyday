import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Segment, Button } from 'semantic-ui-react';
import { useFirestore } from 'react-redux-firebase';

const NewWorkoutForm = () => {
  const [tags, setTags] = useState('');

  const firestore = useFirestore();

  function addWorkoutToFirestore(e) {
    e.preventDefault();
    // props.onNewWorkoutCreation();
    let type = { tags }
    return firestore.collection('workouts').add({
      name: e.target.name.value,
      duration: e.target.duration.value,
      intensity: e.target.intensity.value,
      equipment: e.target.equipment.value,
      details: e.target.details.value,
      img: e.target.img.value,
      type
    });
  }

  // const options = [
  //   { key: "1", text: 'Pilates', value: 'Pilates' },
  //   { key: "2", text: 'Cardio', value: 'Cardio' },
  //   { key: "3", text: 'Upper Body', value: 'UpperBody' },
  //   { key: "4", text: 'Lower Body', value: 'LowerBody' },
  //   { key: "5", text: 'HIIT', value: 'HIIT' },
  //   { key: "6", text: 'Yoga', value: 'Yoga' },
  //   { key: "7", text: 'Stretch', value: 'Stretch' },
  //   { key: "8", text: 'Meditation', value: 'Meditation' },
  //   { key: "9", text: 'Quick', value: 'Quick' },
  //   { key: "10", text: 'Barre', value: 'Barre' },
  //   { key: "11", text: 'Toning', value: 'Toning' },
  //   { key: "12", text: 'Kickboxing', value: 'Kickboxing' },
  //   { key: "13", text: 'Dance', value: 'Dance' },
  //   { key: "14", text: 'Abs', value: 'Abs' },
  //   { key: "15", text: 'Arms', value: 'Arms' },
  // ];

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

        <Form.Field>
          <label>Workout Tags</label>
          <select
            placeholder="Tags"
            width={12}
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          >
            <option value="pilates">Pilates</option>
            <option value="cardio">Yoga</option>
            </select>

        </Form.Field>
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
}

NewWorkoutForm.propTypes = {
  onNewWorkoutCreation: PropTypes.func,
};

export default NewWorkoutForm;