import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';

import { useAuth } from 'hooks';

import { Heder } from './AppBar.Styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Heder>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Heder>
  );
};
