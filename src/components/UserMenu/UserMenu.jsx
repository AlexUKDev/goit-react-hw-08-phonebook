import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';

import PersonIcon from '@mui/icons-material/Person';
import {
  Wrapper,
  GreetingText,
  BtnOut,
  AccentText,
  IconWrap,
} from 'components/UserMenu/UserMenu.Styled';

import LogoutIcon from '@mui/icons-material/Logout';

export const UserMenu = () => {
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
      <GreetingText>
        Welcome, <AccentText>{user.name} </AccentText>
      </GreetingText>

      <BtnOut type="button" onClick={logOutHandler}>
        <LogoutIcon sx={{ fontSize: 30 }} />
      </BtnOut>
    </Wrapper>
  );
};
