import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from '../Shared/Heading';
import { MembersContainer, Section, MemberWrapper, ImgWrapper } from './elements';
import Image from '../Image';


const Meetus = ({ images }) => (
  <Section my={60}>
    <Heading as="h1" my={30}>Meet our space</Heading>
    <MembersContainer mb={30}>
      {images.map(({ image, id }) => (
        <MemberWrapper maxWidth={400} key={id}>
          <ImgWrapper>
            <Image alt="chef" src={image.url} />
          </ImgWrapper>
        </MemberWrapper>
      ))}
    </MembersContainer>
  </Section>
);

Meetus.propTypes = {
  images: PropTypes.array
};

Meetus.defaultProps = {
  images: []
};

export default Meetus;
