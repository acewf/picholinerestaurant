import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import MenuComponent from '../components/Menu';
import Layout from '../components/layout';
import { PageCover } from '../components/shared-styles';
import { Box } from '../components/Shared/Tags';
import Image from '../components/Image';

const MenuPage = styled.div`
  .menu-cover {
    height: 400px;
    max-height: 100%;
    ::before {
      content: "";
      z-index: 100;
      position: absolute;
      top: 0;
      background-color: rgba(0, 0, 0, 0.5);
      height: 400px;
      width: 100%;
    }
    .menu-cover-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const Menu = ({ data: { gcms, dataJson: { menu } } }) => {
  const { menus } = gcms;
  const { title, description, typesList } = menus[0];
  return (
    <Layout>
      <MenuPage>
        <PageCover>
          <Box height="100%">
            <Image
              width="100%"
              height="100%"
              objectFit="cover"
              objectPosition="50% 50%"
              alt="table with food"
              data={menu}
            />
          </Box>
        </PageCover>
        <MenuComponent
          title={title}
          description={description}
          dishByType={typesList}
          route="menu"
        />
      </MenuPage>
    </Layout>
  );
};

Menu.propTypes = {
  data: PropTypes.object
};

Menu.defaultProps = {
  data: {
    gcms: {
      menus: []
    }
  }
};

export default Menu;

export const query = graphql`
  query{
    dataJson {
      menu {
        childImageSharp {
          fluid(maxWidth: 1000,maxHeight:500, quality: 100, cropFocus: CENTER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    gcms {
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
    }
  }
`;
