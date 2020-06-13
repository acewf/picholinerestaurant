import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Paragraph, Flex } from '../Shared/Tags';
import { Heading } from '../Shared/Heading';

export const StyledFlex = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  flex: 1 1 auto;
`;

export const Section = styled.section`
  padding: 60px 15px;
  max-width: 800px;
  margin: auto;
  margin-top: 44px;
  margin-bottom: 44px;
`;

export const ActionButton = styled.button`
  background: #ff6107;
  font-style: normal;
  line-height: 17px;
  color: #fff;
  border: 2px solid #ff6107;
  border-radius: 30px;
  font-weight: 400;
  font-family: "Lora", Georgia, serif;
  text-transform: uppercase;
  padding: 18px 36px;
`;

export const Container = styled(Flex)`
  position:relative;
  text-align: center;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #333;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  color: #fff;

  &::after,
  &::before{
    content:'';
    position:absolute;
    z-index:1;
    width:100%;
    height:100%;
    background-position: top center;
    background-size: cover;
    background-repeat: no-repeat;
    filter:brightness(0.5);
  }

  &::before{
    background-image:url(${({ previousBkg }) => previousBkg});
  }

  &::after{
    background-image:url(${({ bkg }) => bkg});
    animation: 1s ease forwards;
    animation-name: ${({ animationName }) => animationName};
  }
`;

export const Link = styled.a`
  text-decoration:none;
  color:inherit;
`;

export const InfoContainer = styled(Box)`
  padding: 10px 10px;
  color: #fff;
  background-color: #302939;
  text-align: center;
  @media (min-width: 1025px) {
    display: flex;
    justify-content: space-around;
    padding: 40px 16px;
  }
  z-index:2;
`;

const FontAwesome = styled(FontAwesomeIcon)`
  max-height:50px;
`;

export const InfoItem = ({ icon, title, children }) => (
  <Box my={1}>
    <FontAwesome icon={icon} />
    <Heading as="h3" m={2}>{title}</Heading>
    <Paragraph>{children}</Paragraph>
  </Box>
);

InfoItem.propTypes = {
  icon: PropTypes.any.isRequired,
  children: PropTypes.node,
  title: PropTypes.string
};

InfoItem.defaultProps = {
  children: null,
  title: ''
};
