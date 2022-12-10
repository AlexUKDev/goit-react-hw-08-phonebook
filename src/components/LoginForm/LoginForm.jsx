import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { HeadTitle } from 'components/UI/HeadTitle/HeadTitle';
import { Wrapper } from 'components/LoginForm/LoginForm.Styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleFormSubmit = e => {
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
    <Wrapper>
      <HeadTitle title={'Log In page'} mb={500} size={30} />

      <Box component="form" onSubmit={handleFormSubmit}>
        <FormControl sx={{ width: '25ch', mt: 1 }}>
          <TextField
            type="email"
            name="email"
            label="Email"
            variant="outlined"
            color="success"
            sx={{ mb: 1, width: '25ch' }}
          />
          <TextField
            type="password"
            name="password"
            label="Password"
            variant="outlined"
            color="success"
            sx={{ mb: 1, width: '25ch' }}
          />
        </FormControl>
        <Stack>
          <Button
            type="submit"
            variant="outlined"
            color="success"
            size="large"
            sx={{ mb: 1 }}
          >
            Log In
          </Button>
        </Stack>
      </Box>
    </Wrapper>
  );
};
