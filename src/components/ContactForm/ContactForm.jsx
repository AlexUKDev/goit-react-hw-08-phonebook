import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectAllContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';

import { Notify } from 'notiflix';
import { HeadTitle } from 'components/UI/HeadTitle/HeadTitle';
import { Wrapper } from './ContactForm.Styled';

export const ContactForm = () => {
  const contacts = useSelector(selectAllContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        return setNumber(value);
      default:
        break;
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    for (const contactItem of contacts) {
      const normalizeStateName = contactItem.name.toLowerCase();
      const normalizeFormName = name.toLowerCase();

      if (normalizeStateName === normalizeFormName) {
        return Notify.warning(`${contactItem.name}, is already in contacts!'`);
      }
    }

    dispatch(addContact({ name, number }));

    resetForm();
  };

  return (
    <Wrapper>
      <HeadTitle title={'Create new contact'} />

      <Box component="form" onSubmit={handleFormSubmit}>
        <FormControl sx={{ width: '25ch', mt: 1 }}>
          <TextField
            onChange={handleChange}
            label="Name"
            variant="outlined"
            color="success"
            id="outlined-basic"
            sx={{ mb: 2 }}
            type="text"
            name="name"
            pattern="^[a-zA-Z??-????-??]+(([' -][a-zA-Z??-????-?? ])?[a-zA-Z??-????-??]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces."
            value={name}
            autoComplete="off"
            required
          />

          <TextField
            name="number"
            type="tel"
            onChange={handleChange}
            value={number}
            label="Number"
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
            size="large"
            endIcon={<PersonAddAlt1OutlinedIcon size="medium" />}
          >
            Add contact
          </Button>
        </Stack>
      </Box>
    </Wrapper>
  );
};
