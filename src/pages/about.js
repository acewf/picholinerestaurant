import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { Heading } from '../components/Shared/Heading';
import HtmlContent from '../components/Shared/HtmlContent';
import Staff from '../components/Staff';
import { PageCover } from '../components/shared-styles';
import Image from '../components/Image';
import { PageContainer, AboutSection } from '../components/AboutPage/elements';
import { Box } from '../components/Shared/Tags';

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
          <Box>
            <Image alt="" src={imageDescription.url} />
          </Box>
        </AboutSection>
        <Staff teamMembers={staffList} />
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
          name
          jobTitle
          image {
            url
          }
        }
      }
    }
  }
`;
