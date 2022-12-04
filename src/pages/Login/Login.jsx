import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { Wrapper } from 'pages/Login/Login.Styled';

export default function Login() {
  return (
    <Wrapper>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </Wrapper>
  );
}
