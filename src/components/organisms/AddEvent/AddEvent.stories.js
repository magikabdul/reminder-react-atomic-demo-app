import React from 'react';
import AddEvent from './AddEvent';

export default {
  title: 'Organisms/AddEvent',
  component: AddEvent,
  argTypes: {
    onSubmit: {
      action: 'submitted',
    },
  },
};

const Template = (args) => <AddEvent {...args} />;

export const Example = Template.bind({});
Example.args = {
  validate: true,
};
