import React from 'react';
import { ReactComponent as CalendarIcon } from 'assets/calendar-regular.svg';
import theme from 'theme/MainTheme';
import IconButton from './IconButton';

export default {
  title: 'Atoms/IconButton',
  component: IconButton,
  argTypes: {
    icon: {
      control: false,
    },
  },
};

const Template = (args) => <IconButton {...args} />;

export const Calendar = Template.bind({});
Calendar.args = {
  icon: <CalendarIcon />,
  color: theme.color.primary,
  // eslint-disable-next-line no-console
  onClick: () => console.log('icon clicked'),
};
