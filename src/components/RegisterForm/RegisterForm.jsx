import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userRegister } from 'redux/auth/operations';

import { Wrapper } from './RegisterForm.Styled';

import { HeadTitle } from 'components/UI/HeadTitle/HeadTitle';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';

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

  const handleFormSubmit = e => {
    e.preventDefault();

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
    <Wrapper>
      <HeadTitle title={'Register page'} size={30} />
      <Box component="form" onSubmit={handleFormSubmit}>
        <FormControl sx={{ width: '25ch', mt: 1 }}>
          <TextField
            onChange={handleChange}
            value={name}
            name="name"
            label=" User name"
            variant="outlined"
            color="success"
            id="outlined-basic"
            sx={{ mb: 2 }}
            type="text"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces."
            autoComplete="off"
            required
          />
          <TextField
            name="email"
            type="email"
            onChange={handleChange}
            value={email}
            label="Email"
            variant="outlined"
            color="success"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            id="outlined-basic"
            sx={{ mb: 1 }}
            maxLength="16"
            autoComplete="off"
            required
          />
          <TextField
            name="password"
            type="password"
            onChange={handleChange}
            value={password}
            label="Password"
            variant="outlined"
            color="success"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            id="outlined-basic"
            sx={{ mb: 1 }}
            maxLength="16"
            autoComplete="off"
            required
          />
        </FormControl>
        <Stack>
          <Button
            type="submit"
            variant="outlined"
            color="success"
            size="medium"
          >
            Register
          </Button>
        </Stack>
      </Box>
    </Wrapper>
  );
};
