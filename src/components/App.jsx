import { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactList/ContactList';
import { SectionTitle } from './SectionTitle/SectionTitle';
import { defaultContacts } from '../Contacts/Contacts';
import { getFromLocalStorage, saveToLocalStorage } from '../utils/localStorage';
import { Filter } from './Filter/Filter';
import { Notify } from 'notiflix';
import { WrapContainer } from './App.Styled';

export const App = () => {
  const [contacts, setContacts] = useState(
    getFromLocalStorage ?? defaultContacts
  );
  const [filter, setFilter] = useState('');

  const addNewContact = newContact => {
    // Сhecking if there is a contact with that name in the state
    for (const contactItem of contacts) {
      if (newContact.name === contactItem.name) {
        return Notify.warning(`${newContact.name}, is alredy in contacts!'`);
      }
    }
    //Adding a new contact to the state
    setContacts(prevContacts => [...prevContacts, newContact]);
    Notify.success(`Contact ${newContact.name}, successfully added`);
  };

  const changeFilterValue = e => {
    setFilter(e.currentTarget.value);
  };

  const getFiltredContacts = () => {
    // const { filter, contacts } = this.state;
    const normalizeFilterValue = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilterValue)
    );
  };

  const contactDelete = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  useEffect(
    prevContacts => {
      if (prevContacts !== contacts) {
        saveToLocalStorage(contacts);
      }
    },
    [contacts]
  );

  const visibleContacts = getFiltredContacts();
  return (
    <WrapContainer>
      <SectionTitle title={'Phonebook'} />
      <ContactForm sendNewContact={addNewContact} />

      <SectionTitle title={'Contacts'} />
      <Filter
        lableText={'Find contacts by name'}
        value={filter}
        onChange={changeFilterValue}
      />

      <ContactsList contacts={visibleContacts} contactDelete={contactDelete} />
    </WrapContainer>
  );
};
