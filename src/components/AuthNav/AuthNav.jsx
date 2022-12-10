import { Link, Wrapper } from 'components/AuthNav/AuthNav.Styled';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import AppRegistrationRoundedIcon from '@mui/icons-material/AppRegistrationRounded';

export const AuthNav = ({ isBarOpen }) => {
  return (
    <Wrapper>
      {!isBarOpen ? (
        <Link to="/register">
          <AppRegistrationRoundedIcon sx={{ fontSize: 30, ml: 1 }} />
        </Link>
      ) : (
        <Link to="/register">
          Register
          <AppRegistrationRoundedIcon sx={{ fontSize: 30, ml: 1 }} />
        </Link>
      )}

      {!isBarOpen ? (
        <Link to="/login">
          <LoginRoundedIcon sx={{ fontSize: 30, ml: 1 }} />
        </Link>
      ) : (
        <Link to="/login">
          Log In
          <LoginRoundedIcon sx={{ fontSize: 30, ml: 1 }} />
        </Link>
      )}
    </Wrapper>
  );
};
