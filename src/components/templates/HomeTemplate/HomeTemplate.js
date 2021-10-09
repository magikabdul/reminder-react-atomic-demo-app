import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 2fr;
  grid-gap: 20px;
`;

const Column = styled.div`
  max-height: 100vh;
  overflow: hidden;
`;

const HomeTemplate = ({ sideNav, rightPanel, banner, content }) => (
  <Container>
    <Column>{sideNav}</Column>
    <Column>
      {banner}
      {content}
    </Column>
    <Column>{rightPanel}</Column>
  </Container>
);

HomeTemplate.propTypes = {
  sideNav: PropTypes.element.isRequired,
  rightPanel: PropTypes.element.isRequired,
  banner: PropTypes.element.isRequired,
  content: PropTypes.element.isRequired,
};

export default HomeTemplate;
