import styled from 'styled-components';
import { motion } from 'framer-motion';

export const NavBar = styled(motion.div)`
  position: fixed;
  z-index: 10;
  top: 0;

  right: 0;
  height: 100vh;
  width: 270px;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ToggleBtn = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;

  padding: 10px;
  border-radius: 8px;
  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1),
    scale 500ms cubic-bezier(0.4, 0, 0.2, 1);

  background-color: transparent;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  color: wheat;

  &:hover {
    scale: 0.99;
    color: #54b95f;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;
