import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getContrastColor } from '../../../utils/colors';

const Container = styled.button`
  padding: 8px 16px;

  border: none;
  border-radius: 5px;

  text-transform: uppercase;

  font-weight: bold;

  color: ${({ color }) => getContrastColor(color, false)};
  background-color: ${({ color }) => color};
`;

const Button = ({ color }) => <Container color={color}>test</Container>;

Button.propTypes = {
  color: PropTypes.string,
};

Button.defaultProps = {
  color: '#ccad8f',
};

export default Button;
