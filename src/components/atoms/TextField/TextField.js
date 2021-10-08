import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  position: absolute;
  top: 0;
  color: ${({ error, theme }) => (error ? theme.color.primary : `rgba(38, 38, 38, 0.4)`)};
  left: 5px;
  padding: 0 5px;
  transition: line-height 200ms ease-in-out, font-size 200ms ease-in-out, top 200ms ease-in-out;
  line-height: 40px;

  &::after {
    padding-left: 3px;
    content: ${({ required }) => (required ? ` '*'` : `''`)};
  }
`;

const InputField = styled.input`
  width: 100%;
  height: 40px;
  border: ${({ error, theme }) => (error ? `1px solid ${theme.color.primary}` : `1px solid rgba(0, 0, 0, 0.4)`)};
  border-radius: 4px;
  padding: 0 10px;
  transition: line-height 200ms ease-in-out, font-size 200ms, ease-in-out, top 200ms ease-in-out;
  //color: ${({ error, theme }) => (error ? theme.color.primary : 'inherit')};

  &:not(:placeholder-shown),
  &:focus {
    & + label {
      background-color: white;
      line-height: 10px;
      font-size: 10px;
      top: -5px;
    }
  }

  &:focus {
    outline: none;
    border: ${({ error, theme }) => (error ? `1px solid ${theme.color.primary}` : `1px solid ${theme.color.tertiary}`)};
    & + label {
      color: ${({ error, theme }) => (error ? theme.color.primary : theme.color.tertiary)};
    }
  }
`;

const ErrorBox = styled.div`
  height: 10px;
  padding: 3px 10px;
  font-size: 10px;
  color: ${({ theme }) => theme.color.primary};
`;

const TextField = ({ value, onChange, label, required, error, errorMessage, onBlur }) => (
  <Container>
    <InputField
      id={label}
      type='text'
      placeholder='&nbsp;'
      value={value}
      onChange={onChange}
      error={error}
      onBlur={onBlur}
    />
    <Label htmlFor={label} required={required} error={error}>
      {label}
    </Label>
    <ErrorBox>{error && errorMessage}</ErrorBox>
  </Container>
);

TextField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  onBlur: PropTypes.func,
};

TextField.defaultProps = {
  value: '',
  onChange: null,
  required: false,
  error: false,
  errorMessage: '',
  onBlur: null,
};

export default TextField;
