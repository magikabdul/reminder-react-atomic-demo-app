import React from 'react';
import theme from 'theme/MainTheme';
import Button from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    onClick: {
      controls: false,
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: theme.color.primary,
  title: 'primary',
  fullWidth: false,
  // eslint-disable-next-line no-console
  onClick: () => console.info('clicked - primary'),
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: theme.color.secondary,
  title: 'secondary',
  fullWidth: false,
  // eslint-disable-next-line no-console
  onClick: () => console.info('clicked - secondary'),
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  color: theme.color.tertiary,
  title: 'tertiary',
  fullWidth: false,
  // eslint-disable-next-line no-console
  onClick: () => console.info('clicked - tertiary'),
};

export const Quaternary = Template.bind({});
Quaternary.args = {
  color: theme.color.quaternary,
  title: 'quaternary',
  fullWidth: false,
  // eslint-disable-next-line no-console
  onClick: () => console.info('clicked - quaternary'),
};
