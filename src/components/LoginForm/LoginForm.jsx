import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
// import { Form, Label, Input, Btn } from 'components/LoginForm/LoginForm.Styled';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Stack direction="row" spacing={2}>
      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
      >
        <TextField
          type="email"
          name="email"
          label="Email"
          variant="filled"
          color="success"
        />
        <TextField
          type="password"
          name="password"
          label="Password"
          variant="filled"
          color="success"
        />

        <Button type="submit" variant="outlined" color="success">
          Log In
        </Button>
      </Box>
    </Stack>
  );
};
