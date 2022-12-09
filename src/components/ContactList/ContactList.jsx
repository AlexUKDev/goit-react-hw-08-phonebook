import { useDispatch, useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import {
  selectAllContacts,
  selectFilteredContacts,
  selectIsLoading,
  selectError,
} from 'redux/contacts/selectors';
import { useEffect } from 'react';

import { fetchContacts } from 'redux/contacts/operations';
import { Filter } from 'components/Filter/Filter';

import CircularProgress from '@mui/material/CircularProgress';

import { ListWrap, InfoText, Wrapper } from './ContactList.Styled';

export const ContactsList = () => {
  const contacts = useSelector(selectAllContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const visibleContacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrapper>
      <Filter />

      {!!(!isLoading && !contacts.length) && (
        <InfoText>
          Your contact list is empty. Please add a new contact to see it in the
          saved list.
        </InfoText>
      )}

      <ListWrap>
        {isLoading && !error && <CircularProgress color="success" />}

        {!isLoading &&
          visibleContacts.map(contact => (
            <ContactItem
              key={contact.id}
              name={contact.name}
              number={contact.number}
              id={contact.id}
            />
          ))}
      </ListWrap>
    </Wrapper>
  );
};
