import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { ListWrap, InfoText } from './ContactList.Styled';
import { getContacts, getFilterValue } from '../../redux/selectors';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilterValue);

  const getFilteredContacts = () => {
    const normalizeFilterValue = filterValue.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilterValue)
    );
  };

  const visibleContacts = getFilteredContacts();

  return (
    <ListWrap>
      {contacts.length === 0 && (
        <InfoText>
          Your contact list is empty. Please add a new contact to see it in the
          saved list.
        </InfoText>
      )}
      {visibleContacts.map(contact => (
        <ContactItem
          key={contact.id}
          name={contact.name}
          number={contact.number}
          id={contact.id}
        />
      ))}
    </ListWrap>
  );
};
