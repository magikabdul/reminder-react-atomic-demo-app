import React from 'react';
import styled from 'styled-components';
import Typography from 'components/atoms/Typography/Typography';
import PropTypes from 'prop-types';
import EventListItem from 'components/molecules/EventListItem/EventListItem';

const Container = styled.div`
  margin: 20px 0;
`;

const Box = styled.div`
  margin-bottom: 20px;
`;

const ListItem = styled.div``;

const EventList = ({ title, eventDataList }) => (
  <Container>
    <Box>
      <Typography variant='header'>{title}</Typography>
    </Box>
    {eventDataList.map((eventData, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <Box key={i}>
        <ListItem>
          <EventListItem eventData={eventData} />
        </ListItem>
      </Box>
    ))}
  </Container>
);

EventList.propTypes = {
  title: PropTypes.string.isRequired,
  eventDataList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default EventList;
