import { useDispatch, useSelector } from 'react-redux';

import { ContactItem } from 'components/ContactItem/ContactItem';
import { ListWrap, InfoText } from './ContactList.Styled';
import {
  selectAllContacts,
  selectFilter,
  selectIsLoading,
  selectError,
} from 'redux/contacts/selectors';
import { useEffect } from 'react';
// import { fetchContacts } from 'redux/operations/operations';
import { fetchContacts } from 'redux/contacts/operations';

export const ContactsList = () => {
  const contacts = useSelector(selectAllContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filterValue = useSelector(selectFilter);

  const dispatch = useDispatch();

  const getFilteredContacts = () => {
    const normalizeFilterValue = filterValue.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilterValue)
    );
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const visibleContacts = getFilteredContacts();

  return (
    <ListWrap>
      {!!(!isLoading && !contacts.length) && (
        <InfoText>
          Your contact list is empty. Please add a new contact to see it in the
          saved list.
        </InfoText>
      )}
      {isLoading && !error && <p>Please wait. Your contact list is loading</p>}
      {!isLoading &&
        visibleContacts.map(contact => (
          <ContactItem
            key={contact.id}
            name={contact.name}
            number={contact.phone}
            id={contact.id}
          />
        ))}
    </ListWrap>
  );
};
