import { useDispatch, useSelector } from 'react-redux';

import { getContacts } from '../../redux/selectors';
import { addContact } from '../../redux/contacts.Slice';

import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import { FormWrap, Label, SubmitBtn, Input } from './ContactForm.Styled';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleFormSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const { name, number } = form.elements;

    for (const contactItem of contacts) {
      const normalizeStateName = contactItem.name.toLowerCase();
      const normalizeFormName = name.value.toLowerCase();

      if (normalizeStateName === normalizeFormName) {
        return Notify.warning(`${contactItem.name}, is already in contacts!'`);
      }
    }

    dispatch(addContact(nanoid(), name.value, number.value));

    form.reset();
  };

  return (
    <FormWrap onSubmit={handleFormSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <SubmitBtn type="submit">Add contact</SubmitBtn>
    </FormWrap>
  );
};
