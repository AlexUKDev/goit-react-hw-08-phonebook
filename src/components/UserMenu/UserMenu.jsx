import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Wrapper, GreetingText } from 'components/UserMenu/UserMenu.Styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const logOutHandler = () => {
    dispatch(logOut());
  };

  return (
    <Wrapper>
      <GreetingText>Welcome, {user.email}</GreetingText>
      <button type="button" onClick={logOutHandler}>
        Logout
      </button>
    </Wrapper>
  );
};
