import styled from '@emotion/styled';
import { color, fontSize, fontFamily, space } from 'styled-system';
import { h1Style, h2Style, h3Style, h4Style, baseStyle } from './Heading';

const HtmlContent = styled.div`
  ${space};
  ${fontFamily};
  ${fontSize};
  ${color};
  & h1 {
    ${baseStyle};
    ${h1Style};
  }
  & h2 {
    ${baseStyle};
    ${h2Style};
  }
  h3 {
    ${baseStyle};
    ${h3Style};
  }
  h4 {
    ${baseStyle};
    ${h4Style};
  }

  p {
    font-family: Poppins, Arial, sans-serif;
    color: #7d7d7d;
    font-size: 15px;
    line-height: 27px;
  }
`;

export default HtmlContent;
