import React from 'react';
import EventList from 'components/organisms/EventList/EventList';
import NextEventBanner from 'components/organisms/NextEventBanner/NextEventBanner';
import AddEvent from 'components/organisms/AddEvent/AddEvent';
import HomeTemplate from './HomeTemplate';

export default {
  title: 'Templates/Home',
  component: HomeTemplate,
  argTypes: {
    sideNav: {
      control: 'none',
    },
    banner: {
      control: 'none',
    },
    content: {
      control: 'none',
    },
    rightPanel: {
      control: 'none',
    },
  },
};

const eventDataList = [
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
    date: '12/12/2012',
    title: 'Storybook Event',
    time: '13:00',
    type: 'Reminder',
  },
];

const Template = (args) => <HomeTemplate {...args} />;

export const EmptyHomeTemplate = Template.bind({});
EmptyHomeTemplate.args = {
  sideNav: <div style={{ backgroundColor: '#600', height: '100vh' }} />,
  banner: <div style={{ backgroundColor: '#060', height: '30vh' }} />,
  content: <div style={{ backgroundColor: '#006', height: '60vh' }} />,
  rightPanel: <div style={{ backgroundColor: '#606', height: '100vh' }} />,
};

export const FilledHomeTemplate = Template.bind({});
FilledHomeTemplate.args = {
  sideNav: <div style={{ backgroundColor: '#600', height: '100vh' }} />,
  banner: (
    <NextEventBanner
      title='Next Event Title'
      date='08-11-2015'
      time='22:00'
      type='Reminder'
      description='Sample description of event'
    />
  ),
  content: <AddEvent onSubmit={() => null} />,
  rightPanel: <EventList eventDataList={eventDataList} title='Upcoming events' />,
};
