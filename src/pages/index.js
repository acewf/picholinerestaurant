import React, { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import {
  faMapMarkerAlt,
  faClock,
  faPhone,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import Layout from '../components/layout';
import SEO from '../components/seo';
import MenuComponent from '../components/Menu';
import { fadeIn } from '../components/HomePage/animations';
import {
  ActionButton, Container,
  InfoContainer, InfoItem, Link as ExternalLink, StyledFlex
} from '../components/HomePage/elements';
import HtmlContent from '../components/Shared/HtmlContent';
import { Heading } from '../components/Shared/Heading';
import { Paragraph, Box } from '../components/Shared/Tags';
import { AboutSection } from '../components/AboutPage/elements';
import Image from '../components/Image';

const imageSlideInterval = 10;
const initialState = { count: 0, lastCount: 0, animation: null };

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        count: state.count + 1,
        lastCount: state.count,
        animation: fadeIn
      };
    case 'clearAnimation':
      return { ...state, animation: '' };
    default:
      return state;
  }
};


const IndexPage = ({ data: { gcms, site } }) => {
  const { menus, homepages, abouts } = gcms;
  const { title, description, typesList } = menus[0];
  const { email, address, phone,
    title: aboutTitle,
    description: aboutDescription,
    imageDescription, openHours
  } = abouts[0];
  const { title: landingTitle, description: landingDescription, background } = homepages[0];
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, lastCount, animation } = state;

  let interval = null;
  const clearAnimation = () => {
    dispatch({ type: 'clearAnimation' });
    // eslint-disable-next-line no-use-before-define
    interval = setTimeout(nextImg, imageSlideInterval * 1000);
  };

  const nextImg = () => {
    dispatch({ type: 'increment' });
    setTimeout(() => clearAnimation(), 1500);
  };


  useEffect(() => {
    clearInterval(interval);
    interval = setTimeout(nextImg, imageSlideInterval * 1000);
    return () => clearInterval(interval);
  }, []);
  const currentImg = background[count % (background.length)].url;
  const previousImg = background[lastCount % (background.length)].url;

  return (
    <Layout>
      <SEO />
      <Box minHeight="100vh">
        <Container bkg={currentImg} previousBkg={previousImg} animationName={animation}>
          <StyledFlex
            position="relative"
            zIndex="2"
            maxWidth="550px"
            py="50px"
          >
            <Heading as="h2">{landingTitle}</Heading>
            <Paragraph m={2}>{landingDescription}</Paragraph>
            <Link to="/menu">
              <ActionButton>View our menu</ActionButton>
            </Link>
            <Box my={20}>
              <ExternalLink href="#quandoo-booking-widget">
                <ActionButton>Book Now</ActionButton>
              </ExternalLink>
            </Box>

          </StyledFlex>
          <InfoContainer width={1}>
            <InfoItem icon={faMapMarkerAlt} title="Address">
              <ExternalLink
                target="_blank"
                href={site.siteMetadata.location}
              >
                {address}
              </ExternalLink>
            </InfoItem>
            <InfoItem icon={faClock} title="Opening Time">
              {openHours}
            </InfoItem>
            <InfoItem icon={faPhone} title="Phone">
              {phone}
            </InfoItem>
            <InfoItem icon={faEnvelope} title="Email">
              <ExternalLink href={`mailto:${email}`}>{email}</ExternalLink>
            </InfoItem>
          </InfoContainer>
        </Container>

        <AboutSection>
          <Box>
            <Heading as="h3" mb={30}>{aboutTitle}</Heading>
            <HtmlContent dangerouslySetInnerHTML={{ __html: aboutDescription.html }} />
          </Box>
          <Box>
            <Image alt="" src={imageDescription.url} />
          </Box>
        </AboutSection>
        <MenuComponent
          title={title}
          description={description}
          dishByType={typesList}
          route="homepage"
        />
      </Box>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object
};

IndexPage.defaultProps = {
  data: {
    gcms: {
      menus: []
    }
  }
};

export const query = graphql`
  query{
    site {
      siteMetadata {
        location
      }
    }
    gcms {
      homepages(first: 1) {
        title
        description
        background {
          url
        }
      }
      menus(first: 1) {
        title
        description
        typesList {
          name
          id
          foodInfo {
            dishName
            dishView {
              url
              id
            }
            price
            id
            description
          }
        }
      }
      abouts(first: 1) {
        title
        description {
          html
        }
        imageDescription {
          url
        }
        phone
        email
        mobile
        address
        openHours
      }
    }
  }
`;
export default IndexPage;
