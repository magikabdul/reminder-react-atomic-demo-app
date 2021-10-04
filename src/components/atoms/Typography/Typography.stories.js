import React from 'react';
import Typography from './Typography';

export default {
  title: 'Atoms/Typography',
  component: Typography,
  argTypes: {
    variant: {
      control: 'inline-radio',
    },
  },
};

// eslint-disable-next-line react/prop-types
const Template = ({ children, ...args }) => <Typography {...args}>{children}</Typography>;

export const Header = Template.bind({});
Header.args = {
  variant: 'header',
  children: 'Header',
};

export const Title = Template.bind({});
Title.args = {
  variant: 'title',
  children: 'Title',
};

export const Subtitle = Template.bind({});
Subtitle.args = {
  variant: 'subtitle',
  children: 'Subtitle',
};

export const Body = Template.bind({});
Body.args = {
  variant: 'body',
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
};
