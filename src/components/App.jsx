// import { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactList/ContactList';
import { SectionTitle } from './SectionTitle/SectionTitle';
// import { defaultContacts } from '../Contacts/Contacts';
// import { getFromLocalStorage, saveToLocalStorage } from '../utils/localStorage';
import { Filter } from './Filter/Filter';

import { WrapContainer } from './App.Styled';

export const App = () => {
  return (
    <WrapContainer>
      <SectionTitle title={'Phonebook'} />
      <ContactForm />

      <SectionTitle title={'Contacts'} />
      <Filter labelText={'Find contacts by name'} />

      <ContactsList />
    </WrapContainer>
  );
};
