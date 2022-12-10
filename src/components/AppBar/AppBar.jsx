import { useState } from 'react';

import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';

import { useAuth } from 'hooks';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

import { NavBar, ToggleBtn } from './AppBar.Styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  const [isBarOpen, setIsBarOpen] = useState(false);

  const toggleBar = () => setIsBarOpen(!isBarOpen);

  return (
    <NavBar
      animate={{
        width: isBarOpen ? '270px' : '75px',
        padding: isBarOpen ? '10px 14px' : '10px 10px',
        transition: {
          duration: 0.5,
          type: 'spring',
          damping: 15,
        },
      }}
    >
      <ToggleBtn onClick={toggleBar}>
        {isBarOpen ? (
          <KeyboardArrowRightIcon sx={{ fontSize: 35 }} />
        ) : (
          <KeyboardArrowLeftIcon sx={{ fontSize: 35 }} />
        )}
      </ToggleBtn>

      <Navigation isBarOpen={isBarOpen} />
      {isLoggedIn ? <UserMenu isBarOpen={isBarOpen} /> : <AuthNav />}
    </NavBar>
  );
};
