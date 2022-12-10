import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { updateContact } from 'redux/contacts/operations';

import CloseIcon from '@mui/icons-material/Close';
import BackupIcon from '@mui/icons-material/Backup';

import {
  Backdrop,
  Modal,
  CloseBtn,
  Input,
  Form,
  SubmitBtn,
} from 'components/EditModal/EditModal.Styled';

import { HeadTitle } from 'components/UI/HeadTitle/HeadTitle';
import { Notify } from 'notiflix';
import { notifySettings } from 'utils/const';

export const EditModal = ({ contactInfo, toggleEditModal }) => {
  const [name, setName] = useState(contactInfo.name);
  const [number, setNumber] = useState(contactInfo.number);

  const dispatch = useDispatch();

  const onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      toggleEditModal();
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (name === contactInfo.name && number === contactInfo.number) {
      Notify.info('Edit name or number', notifySettings);
      return;
    }

    dispatch(updateContact({ id: contactInfo.id, name, number }));

    toggleEditModal();
  };

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

  return (
    <Backdrop onClick={onBackdropClick}>
      <Modal>
        <CloseBtn type="button" onClick={toggleEditModal}>
          <CloseIcon />
        </CloseBtn>

        <HeadTitle title="Change contact" mt={0} />

        <Form onSubmit={handleSubmit}>
          <Input
            onChange={handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
          />

          <Input
            value={number}
            onChange={handleChange}
            name="number"
            type="tel"
            label="Number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            maxLength="16"
            autoComplete="off"
          />
          <SubmitBtn type="submit">
            <BackupIcon />
          </SubmitBtn>
        </Form>
      </Modal>
    </Backdrop>
  );
};
