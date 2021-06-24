import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Heading } from '../Shared/Heading';
import { Paragraph, Box, Ul, Flex } from '../Shared/Tags';
import {
  MenuStyles, ItemsContainer, Tab,
  Price, Name, Description, StyledLi
} from './elements';

const lastRoute = 'homepage';
const scriptSrc = 'https://booking-widget.quandoo.com/index.js';

const MenuComponent = ({ title, description, dishByType, route }) => {
  const isDiff = lastRoute !== route;
  const [categoryIndex, setCategoryIndex] = useState(0);
  const currentCategory = dishByType[categoryIndex];

  const loadSrc = isDiff ? `${scriptSrc}?path=${route}` : scriptSrc;


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
      <Box
        id="quandoo-booking-widget"
        marginTop={50}
        marginX={50}
        width={300}
        maxHeight={805}
      />
      <Helmet>
        <script
          src={loadSrc}
          data-agent-id="146"
          data-merchant-id="89308"
        />
      </Helmet>
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
