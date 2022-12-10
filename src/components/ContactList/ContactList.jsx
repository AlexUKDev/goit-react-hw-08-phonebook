import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  selectAllContacts,
  selectFilteredContacts,
  selectIsLoading,
  selectError,
} from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';

import { Filter } from 'components/Filter/Filter';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import CircularProgress from '@mui/material/CircularProgress';

import {
  ListWrap,
  InfoText,
  Wrapper,
  Table,
  TableHead,
  LoadingWrap,
} from './ContactList.Styled';
import { HeadTitle } from 'components/UI/HeadTitle/HeadTitle';

export const ContactsList = ({ getContactInfo, toggleEditModal }) => {
  const contacts = useSelector(selectAllContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  const visibleContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrapper>
      <HeadTitle title={'Contacts list'} />
      <Filter />

      {!contacts.length && !isLoading && (
        <InfoText>
          Your contact list is empty. Please add a new contact to see it in the
          saved list.
        </InfoText>
      )}

      {!!(contacts.length && !isLoading) &&
        (!visibleContacts.length ? (
          <InfoText>Sorry. No results!</InfoText>
        ) : (
          <ListWrap>
            <Table>
              <thead>
                <tr>
                  <TableHead></TableHead>
                  <TableHead className="start">Name</TableHead>
                  <TableHead>Number</TableHead>
                  <TableHead>Edit</TableHead>
                  <TableHead>Delate</TableHead>
                </tr>
              </thead>
              <tbody>
                {visibleContacts.map(({ id, name, number }) => (
                  <ContactListItem
                    key={id}
                    name={name}
                    number={number}
                    id={id}
                    getContactInfo={getContactInfo}
                    toggleEditModal={toggleEditModal}
                  />
                ))}
              </tbody>
            </Table>
          </ListWrap>
        ))}

      {isLoading && !error && (
        <LoadingWrap>
          <CircularProgress color="success" />
        </LoadingWrap>
      )}
    </Wrapper>
  );
};
