import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYelp
} from '@fortawesome/free-brands-svg-icons';

const FooterStyles = styled.footer`
  min-width: 100%;
  background-color: #302939;
  padding: 16px;
  color: #fff;
  bottom: 0;
  z-index: 100;
  text-align: center;
  a {
    color: #fff;
    /* text-decoration: none; */
  }
  .social-media {
    margin-bottom: 8px;

    ul {
      margin: auto;
      list-style: none;
      li {
        display: inline-block;
        padding: 5px;
        margin: 0px 4px;
      }
    }
  }
`;
const Footer = () => (
  <FooterStyles>
    <div className="social-media">
      <ul>
        <li>
          <FontAwesomeIcon size="2x" icon={faFacebook} />
        </li>
        <li>
          <FontAwesomeIcon size="2x" icon={faInstagram} />
        </li>
        <li>
          <FontAwesomeIcon size="2x" icon={faTwitter} />
        </li>
      </ul>
    </div>
  </FooterStyles>
);

export default Footer;
