import React, { useCallback, useEffect, useState } from 'react';
import HomeTemplate from 'components/templates/HomeTemplate/HomeTemplate';
import NextEventBanner from 'components/organisms/NextEventBanner/NextEventBanner';
import { fetchEventData } from 'services/EventDataServices/eventDataService';
import EventList from 'components/organisms/EventList/EventList';
import AddEvent from 'components/organisms/AddEvent/AddEvent';

const HomePage = () => {
  const [eventDataList, setEventDataList] = useState([]);

  const fetchEventList = useCallback(async () => fetchEventData().then((data) => setEventDataList(data)), []);

  useEffect(async () => {
    await fetchEventList();
  }, []);

  return (
    <HomeTemplate
      sideNav={<div style={{ backgroundColor: '#adadad', height: '100vh' }} />}
      banner={
        <NextEventBanner
          title={eventDataList.length > 0 && eventDataList[0].title}
          date={eventDataList.length > 0 && eventDataList[0].date}
          time={eventDataList.length > 0 && eventDataList[0].time}
          description={eventDataList.length > 0 && eventDataList[0].description}
          type={eventDataList.length > 0 && eventDataList[0].type}
        />
      }
      rightPanel={<EventList title='Upcoming Events' eventDataList={eventDataList} />}
      content={<AddEvent onSubmit={() => alert('Event Added')} />}
    />
  );
};

export default HomePage;
