import styled from '@emotion/styled';

export const PageCover = styled.div`
  height: 500px;
  max-height: 100%;
  overflow: hidden;
  position: relative;
  ::before {
    content: "";
    z-index: 100;
    position: absolute;
    top: 0;
    background-color: rgba(0, 0, 0, 0.3);
    height: 100%;
    width: 100%;
  }
`;

export default PageCover;
