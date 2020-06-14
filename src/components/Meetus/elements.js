import styled from '@emotion/styled';
import { space, width, maxWidth } from 'styled-system';

export const MembersContainer = styled.div`
  ${space};
  display:flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  flex-direction: column;
  @media (min-width: 900px) {
    flex-direction: row;
  }
`;

export const Section = styled.section`
  ${space};
`;

export const MemberWrapper = styled.div`
  ${space};
  ${width};
  ${maxWidth};
  margin-bottom: 30px;
  text-align: center;
  padding: 20px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
`;

export const ImgWrapper = styled.div`
  ${space};
  max-height: 460px;
`;
