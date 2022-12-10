import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';

import { useAuth } from 'hooks';

import { NavBar } from './AppBar.Styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavBar>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </NavBar>
  );
};
