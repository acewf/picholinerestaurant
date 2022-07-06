import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Heading } from '../Shared/Heading';
import { Paragraph, Box, Ul, Flex, iFrame } from '../Shared/Tags';
import {
  MenuStyles, ItemsContainer, Tab,
  Price, Name, Description, StyledLi
} from './elements';

let lastRoute;

const MenuComponent = ({ title, description, dishByType, route }) => {
  const isDiff = lastRoute !== route;
  const [categoryIndex, setCategoryIndex] = useState(0);
  const currentCategory = dishByType[categoryIndex];


  return (
    <Flex flexDirection={['column', null, 'row']} justifyContent="center" alignItems={['center', null, 'unset']}>
      <MenuStyles>
        <Box textAlign="center">
          <Heading as="h2" fontSize="1.3em">{title}</Heading>
          <Paragraph color="#7d7d7d">
            {description}
          </Paragraph>
        </Box>
        <Box m="auto" maxWidth={800} textAlign="center">
          <Ul m="auto">
            {dishByType.map(({ name, id }, index) => (
              <StyledLi key={id}>
                <Tab href={`#${name.replace(/\s+/g, '')}`} onClick={() => setCategoryIndex(index)} active={categoryIndex === index}>
                  {name}
                </Tab>
              </StyledLi>
            ))}
          </Ul>
        </Box>
        <ItemsContainer id={currentCategory.name.replace(/\s+/g, '')}>
          {currentCategory.foodInfo.map(({ price, id, dishName, description }) => (
            <Box key={id}>
              <Name>{dishName}</Name>
              <Price>{price.toFixed(2)}</Price>
              <Description>{description}</Description>
            </Box>
          ))}
        </ItemsContainer>
      </MenuStyles>
      <iFrame
        src="https://booking.favouritetable.com/?SiteCode=1726"
        id="booking-widget"
        style={{ border: 'none', minHeight: '760px' }}
      />
    </Flex>
  );
};


MenuComponent.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  dishByType: PropTypes.array,
  route: PropTypes.string
};

MenuComponent.defaultProps = {
  title: '',
  description: '',
  dishByType: [],
  route: ''
};

export default MenuComponent;
