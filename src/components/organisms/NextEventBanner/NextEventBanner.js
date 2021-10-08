import React from 'react';
import styled from 'styled-components';
import Typography from 'components/atoms/Typography/Typography';
import PropTypes from 'prop-types';

const Container = styled.div`
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.tertiary};
  color: ${({ theme }) => theme.text.color.primary};
  box-shadow: rgb(0 0 0 / 20%) 0 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
`;

const NextEventBanner = ({ date, time, title, description, type }) => (
  <>
    <Container>
      <Typography variant='header'>{`Next event: ${date}, ${time}`}</Typography>
      <Typography variant='title'>{title}</Typography>
      <Typography variant='body'>{description}</Typography>
      <Typography variant='subtitle'>{type}</Typography>
    </Container>
  </>
);

NextEventBanner.propTypes = {
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default NextEventBanner;
