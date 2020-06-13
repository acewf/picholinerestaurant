import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from '../Shared/Heading';
import { MembersContainer, StaffSection, MemberWrapper, ImgWrapper } from './elements';
import Image from '../Image';


const Staff = ({ teamMembers }) => (
  <StaffSection my={60}>
    <Heading as="h1" my={30}>Meet our team</Heading>
    <MembersContainer mb={30}>
      {teamMembers.map(({ name, jobTitle, image, id }) => (
        <MemberWrapper maxWidth={400} key={id}>
          <ImgWrapper>
            <Image alt="chef" src={image.url} />
          </ImgWrapper>
          <Heading as="h3" my={1}>{name}</Heading>
          <Heading as="h4" my={1}>{jobTitle}</Heading>
        </MemberWrapper>
      ))}
    </MembersContainer>
  </StaffSection>
);

Staff.propTypes = {
  teamMembers: PropTypes.array
};

Staff.defaultProps = {
  teamMembers: []
};

export default Staff;
