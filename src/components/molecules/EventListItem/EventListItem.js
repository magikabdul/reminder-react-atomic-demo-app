import React from 'react';
import styled from 'styled-components';
import Typography from 'components/atoms/Typography/Typography';
import PropTypes from 'prop-types';

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.quaternary};
  border-radius: 5px;
  padding: 8px;

  box-shadow: rgb(0 0 0 / 20%) 0 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
`;

const DataBox = styled.div`
  display: flex;
`;

const Box = styled.div`
  margin-left: 20px;
`;

const EventListItem = ({ eventData }) => (
  <Container>
    <DataBox>
      <Typography variant='header'>{eventData.date}</Typography>
      <Box>
        <Typography variant='header'>{eventData.time}</Typography>
      </Box>
    </DataBox>
    <Typography variant='title'>{eventData.title}</Typography>
    <Typography variant='subtitle'>{eventData.type}</Typography>
  </Container>
);

EventListItem.propTypes = {
  eventData: PropTypes.shape({
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default EventListItem;
