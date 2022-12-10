import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';

import PersonIcon from '@mui/icons-material/Person';
import {
  Wrapper,
  GreetingTextLarge,
  GreetingTextSmall,
  BtnOut,
  AccentTextLarge,
  AccentTextSmall,
  IconWrap,
} from 'components/UserMenu/UserMenu.Styled';

import LogoutIcon from '@mui/icons-material/Logout';

export const UserMenu = ({ isBarOpen }) => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const logOutHandler = () => {
    dispatch(logOut());
  };

  return (
    <Wrapper>
      <IconWrap>
        <PersonIcon sx={{ fontSize: 30 }} />
      </IconWrap>

      {isBarOpen ? (
        <GreetingTextLarge>
          Welcome, <AccentTextLarge>{user.name} </AccentTextLarge>
        </GreetingTextLarge>
      ) : (
        <GreetingTextSmall>
          Welcome, <AccentTextSmall>{user.name} </AccentTextSmall>
        </GreetingTextSmall>
      )}

      <BtnOut type="button" onClick={logOutHandler}>
        <LogoutIcon sx={{ fontSize: 30 }} />
      </BtnOut>
    </Wrapper>
  );
};
