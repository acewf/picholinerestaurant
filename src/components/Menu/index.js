import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Heading } from '../Shared/Heading';
import { Paragraph, Box, Ul } from '../Shared/Tags';
import {
  MenuStyles, ItemsContainer, Tab,
  Price, Name, Description, StyledLi
} from './elements';

const MenuComponent = ({ title, description, dishByType }) => {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const currentCategory = dishByType[categoryIndex];

  return (
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
              <Tab href={`#${name}`} onClick={() => setCategoryIndex(index)} active={categoryIndex === index}>
                {name}
              </Tab>
            </StyledLi>
          ))}
        </Ul>
      </Box>
      <ItemsContainer id={currentCategory.name}>
        {currentCategory.foodInfo.map(({ price, id, dishName, description }) => (
          <Box key={id}>
            <Name>{dishName}</Name>
            <Price>{price.toFixed(2)}</Price>
            <Description>{description}</Description>
          </Box>
        ))}
      </ItemsContainer>
    </MenuStyles>
  );
};


MenuComponent.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  dishByType: PropTypes.array
};

MenuComponent.defaultProps = {
  title: '',
  description: '',
  dishByType: []
};

export default MenuComponent;
