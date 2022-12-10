import { motion } from 'framer-motion';

import styled from 'styled-components';

export const NavBar = styled(motion.div)`
  position: fixed;
  z-index: 10;
  top: 0;

  right: 0;
  height: 100vh;
  width: 270px;
  background-color: rgba(0, 0, 0, 0.4);
`;
