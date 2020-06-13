import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { space, height, width } from 'styled-system';

export const ImgUrl = styled.img`
  ${space};
  ${height};
  ${width};
`;

const Image = ({ data, alt, ...rest }) => {
  if (data && data.childImageSharp) {
    return <Img fluid={data.childImageSharp.fluid} {...rest} />;
  }

  return <ImgUrl src={data} {...rest} />;
};

Image.propTypes = {
  data: PropTypes.shape({
    childImageSharp: PropTypes.object
  }),
  alt: PropTypes.string,
  src: PropTypes.string
};

Image.defaultProps = {
  data: null,
  alt: '',
  src: null
};

export default Image;
