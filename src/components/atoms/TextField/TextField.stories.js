import React from 'react';
import TextField from './TextField';

export default {
  title: 'Atoms/TextField',
  component: TextField,
};

const Template = (args) => <TextField {...args} />;

export const EmptyTextField = Template.bind({});
EmptyTextField.args = {
  value: '',
  label: 'EmptyTextField',
  required: false,
  error: false,
  errorMessage: '',
};

export const FilledTextField = Template.bind({});
FilledTextField.args = {
  value: 'Hello',
  label: 'FilledTextField',
  required: false,
  error: false,
  errorMessage: '',
};

export const RequiredTextField = Template.bind({});
RequiredTextField.args = {
  value: '',
  label: 'RequiredTextField',
  required: true,
  error: false,
  errorMessage: '',
};

export const EmptyErrorTextField = Template.bind({});
EmptyErrorTextField.args = {
  value: ' ',
  label: 'EmptyErrorTextField',
  required: false,
  error: true,
  errorMessage: '',
};

export const ErrorMessageTextField = Template.bind({});
ErrorMessageTextField.args = {
  value: '',
  label: 'ErrorMessageTextField',
  required: false,
  error: true,
  errorMessage: 'This is an error message',
};
