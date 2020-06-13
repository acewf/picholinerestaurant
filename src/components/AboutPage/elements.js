import styled from '@emotion/styled';
import { Box } from '../Shared/Tags';

export const PageContainer = styled(Box)`

`;


export const AboutSection = styled.section`
  padding: 60px 15px;
  max-width: 800px;
  margin: auto;
  @media (min-width: 1025px) {
    display: grid;
    grid-template-columns: 50% 50%;
  }
`;
