import { ContactItem } from 'components/ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { ListWrap, InfoText } from './ContactList.Styled';
import {
  getContacts,
  getFilterValue,
  getIsLoading,
  getError,
} from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations/operations';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const filterValue = useSelector(getFilterValue);

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
