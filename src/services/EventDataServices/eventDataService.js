const eventDataList = [
  {
    date: '12/12/4412',
    title: 'Real application event :)',
    time: '21:00',
    description: 'A short description of this amazing event',
    type: 'Test Event for nice main page',
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
];

export const fetchEventData = () => Promise.resolve(eventDataList);

export const addEvent = (eventData) => {
  eventDataList.push(eventData);
  return Promise.resolve();
};
