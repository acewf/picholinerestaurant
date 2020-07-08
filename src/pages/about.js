import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import { Heading } from '../components/Shared/Heading';
import HtmlContent from '../components/Shared/HtmlContent';
import Meetus from '../components/Meetus';
import { PageCover } from '../components/shared-styles';
import Image from '../components/Image';
import { PageContainer, AboutSection } from '../components/AboutPage/elements';
import { Box } from '../components/Shared/Tags';

export const CustomBox = styled(Box)`
  overflow:hidden;
`;

const About = ({ data }) => {
  const { gcms: { abouts }, dataJson: { about } } = data;
  const { title, description, imageDescription, staffList } = abouts[0];
  return (
    <Layout>
      <PageContainer>
        <PageCover>
          <Box height="100%">
            <Image
              width="100%"
              height="100%"
              objectFit="cover"
              objectPosition="50% 50%"
              alt="table with food"
              data={about}
            />
          </Box>
        </PageCover>
        <AboutSection>
          <Box>
            <Heading as="h3" mb={30}>{title}</Heading>
            <HtmlContent dangerouslySetInnerHTML={{ __html: description.html }} />
          </Box>
          <CustomBox>
            <Image alt="" src={imageDescription.url} />
          </CustomBox>
        </AboutSection>
        <Meetus images={staffList} />
      </PageContainer>
    </Layout>
  );
};

About.propTypes = {
  data: PropTypes.object
};

About.defaultProps = {
  data: {
    gcms: {
      abouts: []
    }
  }
};

export default About;

export const query = graphql`
  query{
    dataJson {
      about {
        childImageSharp {
          fluid(maxWidth: 1000,maxHeight:500, quality: 100, cropFocus: CENTER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    gcms {
      abouts(first: 1) {
        title
        description {
          html
        }
        imageDescription {
          url
        }
        id
        staffList {
          id
          image {
            url(transformation: {image: {resize: {fit: crop, height: 300, width: 360}}})
          }
        }
      }
    }
  }
`;
