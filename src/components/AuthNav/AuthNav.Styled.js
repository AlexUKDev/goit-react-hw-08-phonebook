import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  font-size: 15px;
  text-decoration: none;
`;

export const Wrapper = styled.div`
  min-width: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
