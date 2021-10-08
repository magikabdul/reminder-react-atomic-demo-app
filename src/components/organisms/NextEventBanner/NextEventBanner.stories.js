import React from 'react';
import NextEventBanner from './NextEventBanner';

export default {
  title: 'Organisms/NextEventBanner',
  component: NextEventBanner,
};

const Template = (args) => <NextEventBanner {...args} />;

export const Banner = Template.bind({});
Banner.args = {
  title: 'Next Event Title',
  date: '08-11-2015',
  time: '22:00',
  type: 'Remainder',
  description: 'Sample description of event',
};
