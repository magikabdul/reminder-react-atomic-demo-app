import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Ripples from 'react-ripples';

const StyledRipple = styled(Ripples)`
  width: 40px;
  height: 40px;

  padding: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: center;

  width: 20px;
  height: 20px;

  border-radius: 50%;

  color: ${({ color }) => color};
`;

const IconButton = ({ icon, color, onClick }) => (
  <StyledRipple onClick={onClick}>
    <Box color={color}>{icon}</Box>
  </StyledRipple>
);

IconButton.propTypes = {
  icon: PropTypes.element.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

IconButton.defaultProps = {
  color: '#f00',
};

export default IconButton;
