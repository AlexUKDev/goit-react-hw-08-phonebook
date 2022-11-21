import { useDispatch } from 'react-redux';

import { removeContact } from '../../redux/contacts/contactsSlice';
import { TextWrap, Item, DelateBtn } from './ContactItem.Styled';

import PropTypes from 'prop-types';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <TextWrap>{name}</TextWrap>
      <TextWrap>{number}</TextWrap>
      <DelateBtn
        id={id}
        type="button"
        onClick={() => dispatch(removeContact(id))}
      >
        Delate
      </DelateBtn>
    </Item>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
