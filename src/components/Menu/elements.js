import styled from '@emotion/styled';
import { Li } from '../Shared/Tags';

export const MenuStyles = styled.div`
  padding-top: 40px;
  color: #404044;
`;

export const StyledLi = styled(Li)`
  list-style: none;
  display: inline-block;
  margin: 20px;
  position: relative;
`;

export const Tab = styled.a`
  text-decoration: none;
  color: inherit;
  :visited {
    color: #404044;
  }

  &:after {
    position: absolute;
    bottom: -5px;
    left: 0;
    right: 0;
    content: "";
    width: 100%;
    height: 2px;
    background: #ff6107;
    margin: 0 auto;
    display: ${({ active }) => (active ? '' : 'none')};
  }
`;

export const ItemsContainer = styled.div`
  max-width: 800px;
  margin: 15px auto;
  .menu-item {
    width: 100%;
    max-width: 300px;
    margin: auto;
  }
  @media (min-width: 1025px) {
    display: grid;
    grid-template-columns: 50% 50%;
  }
`;

export const Price = styled.span`
  color: #404044;
  font-family: "Lora", Georgia, serif;
  & ::before{
    content:'£';
    width:10px;
    height:100%;
  }
`;

export const Name = styled.p`
  margin: 10px 0 10px 0;
  font-size: 16px;
  font-weight: 700;
`;

export const Description = styled.p`
  color: #7d7d7d;
  font-size: 14px;
  margin-bottom: 1.5em;
  font-weight: 400;
  font-family: "Poppins", Arial, sans-serif;
`;
