import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Ripples from 'react-ripples';
import { getContrastColor } from 'utils/colors';

const RipplesStyles = styled(Ripples)`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'undefined')};

  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 20%) 0 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
`;

const Container = styled.button`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'undefined')};

  padding: 8px 24px;
  overflow: hidden;

  border: none;
  border-radius: 5px;

  text-transform: uppercase;

  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: bold;
  letter-spacing: 1px;

  color: ${({ color }) => getContrastColor(color)};
  background-color: ${({ color }) => color};

  transition: all 0.2s ease;

  &:hover {
    filter: brightness(0.8);
  }
`;

const Button = ({ color, title, fullWidth, onClick }) => (
  <RipplesStyles fullWidth={fullWidth}>
    <Container color={color} fullWidth={fullWidth} onClick={onClick}>
      {title}
    </Container>
  </RipplesStyles>
);

Button.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: '#000',
  fullWidth: false,
};

export default Button;
