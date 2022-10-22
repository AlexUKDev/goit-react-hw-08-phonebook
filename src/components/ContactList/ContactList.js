import { ContactItem } from 'components/ContactItem/ContactItem';
import { ListWrap } from './ContactList.Styled';
import PropTypes from 'prop-types';
export const ContactsList = ({ contacts, contactDelete }) => {
  return (
    <ListWrap>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          name={contact.name}
          number={contact.number}
          contactDelete={contactDelete}
          id={contact.id}
        />
      ))}
    </ListWrap>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  contactDelete: PropTypes.func.isRequired,
};
