import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Header = styled.div`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: normal;
`;

const Title = styled.div`
  font-size: 20px;
`;

const Subtitle = styled.div`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
`;

const Body = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: lighter;
`;

const Typography = ({ variant, children }) => (
  <>
    {variant === 'header' && <Header>{children}</Header>}
    {variant === 'title' && <Title>{children}</Title>}
    {variant === 'subtitle' && <Subtitle>{children}</Subtitle>}
    {variant === 'body' && <Body>{children}</Body>}
  </>
);

Typography.propTypes = {
  variant: PropTypes.oneOf(['header', 'title', 'subtitle', 'body']),
  children: PropTypes.string.isRequired,
};

Typography.defaultProps = {
  variant: 'body',
};

export default Typography;
