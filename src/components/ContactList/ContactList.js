import { ContactItem } from 'components/ContactItem/ContactItem';
import { ListWrap, InfoText } from './ContactList.Styled';
import PropTypes from 'prop-types';
export const ContactsList = ({ contacts, contactDelete }) => {
  return (
    <ListWrap>
      {contacts.length === 0 && (
        <InfoText>
          Your contact list is empty. Please add a new contact to see it in the
          saved list.
        </InfoText>
      )}
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
