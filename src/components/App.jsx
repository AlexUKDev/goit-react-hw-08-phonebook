import { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { SectionTitle } from './SectionTitle/SectionTitle';
import { Filter } from './Filter/Filter';
import { Notify } from 'notiflix';

import { ContactsList } from './ContactList/ContactList';

const LS_KEY = 'saved_contacts';
export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LS_KEY)) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );
  const [filter, setFilter] = useState('');

  useEffect(
    prevContacts => {
      if (prevContacts !== contacts) {
        const prepareContacts = JSON.stringify(contacts);
        localStorage.setItem(LS_KEY, prepareContacts);
      }
    },
    [contacts]
  );

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

  const visibleContacts = getFiltredContacts();
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 30,
        color: '#010101',
      }}
    >
      <SectionTitle title={'Phonebook'} />
      <ContactForm sendNewContact={addNewContact} />

      <SectionTitle title={'Contacts'} />
      <Filter
        lableText={'Find contacts by name'}
        value={filter}
        onChange={changeFilterValue}
      />

      <ContactsList contacts={visibleContacts} contactDelete={contactDelete} />
    </div>
  );
};
