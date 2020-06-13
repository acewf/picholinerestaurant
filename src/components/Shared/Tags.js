import styled from '@emotion/styled';
import {
  space, color, maxWidth, minWidth,
  width, height, maxHeight, minHeight,
  textAlign, position, zIndex, flexDirection,
  justifyContent, alignItems
} from 'styled-system';
import { css } from '@emotion/core';

export const baseStyle = css`
  box-sizing: border-box;
  margin: 0px;
`;

export const Paragraph = styled.p`
  ${baseStyle};
  ${space};
  ${color};
`;

export const Box = styled.div`
  ${baseStyle};
  ${space};
  ${color};
  ${maxWidth};
  ${maxHeight};
  ${minWidth};
  ${minHeight};
  ${width};
  ${height};
  ${textAlign};
  ${position};
  ${zIndex};
`;

export const Flex = styled(Box)`
  display:flex;
  ${flexDirection};
  ${justifyContent};
  ${alignItems};
`;

export const Ul = styled.ul`
  ${baseStyle};
  ${space};
`;

export const Li = styled.li`
  ${baseStyle};
  ${space};
`;

export const Link = styled.a`
  text-decoration:none;
  color:inherit;
`;
