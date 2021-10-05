import React from 'react';
import EventListItem from './EventListItem';

export default {
  title: 'Molecules/EventListItem',
  component: EventListItem,
};

const Template = (args) => <EventListItem {...args} />;

export const Example = Template.bind({});
Example.args = {
  eventData: {
    date: 'DD/MM/YYYY',
    time: 'HH:mm:ss',
    title: 'Title',
    type: 'Event Type',
  },
};
