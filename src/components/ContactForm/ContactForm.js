import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { FormWrap, Lable, SubmitBtn, Input } from './ContactForm.Styled';

export const ContactForm = ({ sendNewContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;

    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newContactId = nanoid();
    const createNewContact = {
      id: newContactId,
      name: name,
      number: number,
    };

    sendNewContact(createNewContact);

    setName('');
    setNumber('');
  };

  return (
    <FormWrap onSubmit={handleSubmit}>
      <Lable>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleInputChange}
        />
      </Lable>
      <Lable>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleInputChange}
        />
      </Lable>
      <SubmitBtn type="submit">Add contact</SubmitBtn>
    </FormWrap>
  );
};

ContactForm.propTypes = {
  sendNewContact: PropTypes.func.isRequired,
};
