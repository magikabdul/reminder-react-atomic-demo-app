import React from 'react';
import EventList from './EventList';

export default {
  title: 'Organisms/EventList',
  component: EventList,
  argTypes: {
    eventDataList: {
      control: 'none',
    },
  },
};

const Template = (args) => <EventList {...args} />;

export const Example = Template.bind({});
Example.args = {
  title: 'Upcoming Events',
  eventDataList: [
    {
      date: '12/12/4412',
      title: 'Storybook Event',
      time: '21:00',
      type: 'Reminder',
    },
    {
      date: '12/12/6012',
      title: 'Storybook Event',
      time: '06:00',
      type: 'Reminder',
    },
    {
      date: '12/12/2342',
      title: 'Storybook Event',
      time: '11:00',
      type: 'Reminder',
    },
    {
      date: '12/12/2012',
      title: 'Storybook Event',
      time: '07:30',
      type: 'Reminder',
    },
    {
      date: '12/12/2012',
      title: 'Storybook Event',
      time: '08:00',
      type: 'Reminder',
    },
    {
      date: '12/12/2012',
      title: 'Storybook Event',
      time: '09:00',
      type: 'Reminder',
    },
    {
      date: '12/12/2012',
      title: 'Storybook Event',
      time: '11:00',
      type: 'Reminder',
    },
    {
      date: '12/12/12',
      title: 'Storybook Event',
      time: '14:00',
      type: 'Reminder',
    },
    {
      date: '11/12/2012',
      title: 'Storybook Event',
      time: '17:00',
      type: 'Reminder',
    },
    {
      date: '12/12/2012',
      title: 'Storybook Event',
      time: '13:00',
      type: 'Reminder',
    },
  ],
};
