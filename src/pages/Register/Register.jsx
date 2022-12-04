import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Wrapper } from './Register.Styled';

export default function Register() {
  return (
    <Wrapper>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </Wrapper>
  );
}
