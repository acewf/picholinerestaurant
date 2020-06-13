import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { space, fontFamily, fontSize, color } from 'styled-system';
import { css } from '@emotion/core';

export const baseStyle = css`
  font-family: Lora, Georgia, serif;
  font-style: normal;
  line-height: 1em;
  margin: 0px;
`;

export const h1Style = css`
  text-align: center;
  color: rgb(64, 64, 68);
  font-size: 44px;
  font-weight: 400;
`;

export const h2Style = css`
  line-height: 62px;
  font-size: 40px;
`;

export const h3Style = css`
  color: rgb(150, 150, 150);
  font-weight: 500;
  font-size: 20px;
`;

export const h4Style = css`
  font-family: Poppins, Arial, sans-serif;
  font-weight: 400;
  color: #7d7d7d;
`;

export const BaseHeading = styled.h2`
  ${baseStyle};
  ${space};
`;

const styleMap = {
  h1: h1Style,
  h2: h2Style,
  h3: h3Style,
  h4: h4Style
};

export const Heading = styled(BaseHeading)`
  ${({ as }) => styleMap[as]};
  ${fontFamily};
  ${fontSize};
  ${color};
`;

Heading.propTypes = {
  as: PropTypes.oneOf([
    'h1', 'h2', 'h3', 'h4'
  ])
};

Heading.defaultProps = {
  as: 'h2'
};
