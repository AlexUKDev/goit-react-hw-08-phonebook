import { Link, Wrapper } from 'components/AuthNav/AuthNav.Styled';

export const AuthNav = () => {
  return (
    <Wrapper>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </Wrapper>
  );
};
