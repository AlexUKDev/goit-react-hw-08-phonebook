import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectAllContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';

import { Notify } from 'notiflix';
import { Form, Label, SubmitBtn, Input } from './ContactForm.Styled';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);

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
    <Form onSubmit={handleFormSubmit}>
      <Label>
        Name
        <Input
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces."
          value={name}
          required
        />
      </Label>
      <Label>
        Number
        <Input
          onChange={handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          required
        />
      </Label>
      <SubmitBtn type="submit">Add contact</SubmitBtn>
    </Form>
  );
};
