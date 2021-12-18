import React from 'react';
import PropTypes from 'prop-types';
import { Form, Segment, Button, Dropdown } from 'semantic-ui-react';

export default function ReusableForm() {
  const options = [
    { key: 'pilates', text: 'Pilates', value: '#Pilates' },
    { key: 'cardio', text: 'Cardio', value: '#Cardio' },
    { key: 'upperBody', text: 'Upper Body', value: '#UpperBody' },
    { key: 'lowerBody', text: 'Lower Body', value: '#LowerBody' },
    { key: 'hiit', text: 'HIIT', value: '#HIIT' },
    { key: 'yoga', text: 'Yoga', value: '#Yoga' },
    { key: 'stretch', text: 'Stretch', value: '#Stretch' },
    { key: 'meditation', text: 'Meditation', value: '#Meditation' },
    { key: 'quick', text: 'Quick', value: '#Quick' },
    { key: 'barre', text: 'Barre', value: '#Barre' },
    { key: 'toning', text: 'Toning', value: '#Toning' },
    { key: 'kickboxing', text: 'Kickboxing', value: '#Kickboxing' },
    { key: 'Dance', text: 'Dance', value: '#Dance' },
    { key: 'abs', text: 'Abs', value: '#Abs' },
    { key: 'arms', text: 'Arms', value: '#Arms' },
  ];

  return (
    <Segment inverted textAlign={'center'}>
      <Form inverted size="large">
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
          <Dropdown
            placeholder="Tags"
            multiple
            selection
            options={options}
            width={12}
          />
        </Form.Field>

        <Form.Field>
          <label>Equipment Needed</label>
          <input type="text" name="equipment" placeholder="Mat" />
        </Form.Field>
        <Form.Input label="Image" type="text" placeholder="https://" name="img"/>
        <Form.TextArea
          label="Description"
          name="description"
          placeholder="4X20 plyo lunges, 4x20 elevated plié squats..."
        />
        <Button type="submit" color="teal">
          Submit
        </Button>
      </Form>
    </Segment>
  );
}
