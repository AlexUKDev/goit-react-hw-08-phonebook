import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userRegister } from 'redux/auth/operations';
import { Form, Label, Input, Btn } from './RegisterForm.Styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    // const form = e.currentTarget;

    // const credentials = {
    //   name,
    //   email,
    //   password,
    // };

    const credentials = {
      name,
      email,
      password,
    };

    dispatch(userRegister(credentials));

    resetForm();
    // form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        User name
        <Input type="text" name="name" value={name} onChange={handleChange} />
      </Label>
      <Label>
        Email
        <Input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </Label>
      <Label>
        Password
        <Input
          name="password"
          type="password"
          onChange={handleChange}
          value={password}
          defaultCountry="UA"
          region="Europe"
          international
          maxLength="16"
        />
      </Label>
      <Btn type="submit">Register</Btn>
    </Form>
  );
};

//  const form = e.currentTarget;
// const credentials = {
//   name: form.elements.name.value,
//   email: form.elements.email.value,
//   password: form.elements.password.value,
// };
