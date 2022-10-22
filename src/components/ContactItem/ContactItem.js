import { TextWrap, Item, DelateBtn } from './ContactItem.Styled';
import PropTypes from 'prop-types';
export const ContactItem = ({ name, number, contactDelete, id }) => {
  return (
    <Item>
      <TextWrap>{name}</TextWrap>
      <TextWrap>{number}</TextWrap>
      <DelateBtn id={id} type="button" onClick={() => contactDelete(id)}>
        Delate
      </DelateBtn>
    </Item>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  contactDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
