import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { SectionTitle } from './SectionTitle/SectionTitle';
import { Filter } from './Filter/Filter';
import { Notify } from 'notiflix';

import { ContactsList } from './ContactList/ContactList';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addNewContact = NewContact => {
    // Сhecking if there is a contact with that name in the state
    for (const contactItem of this.state.contacts) {
      if (NewContact.name === contactItem.name) {
        return Notify.warning(`${NewContact.name}, is alredy in contacts!'`);
      }
    }
    //Adding a new contact to the state
    this.setState(prevState => ({
      contacts: [...prevState.contacts, NewContact],
    }));
    Notify.success(`Contact ${NewContact.name}, successfully added`);
  };
  changeFilterValue = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  getFiltredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizeFilterValue = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilterValue)
    );
  };

  contactDelete = contactId => {
    // console.log(contactId);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const visibleContacts = this.getFiltredContacts();
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          // justifyContent: 'center',
          alignItems: 'center',
          fontSize: 30,
          color: '#010101',
        }}
      >
        <SectionTitle title={'Phoneboock'} />
        <ContactForm sendNewContact={this.addNewContact} />

        <SectionTitle title={'Contacts'} />
        <Filter
          lableText={'Find contacts by name'}
          value={this.state.filter}
          onChange={this.changeFilterValue}
        />
        <ContactsList
          contacts={visibleContacts}
          contactDelete={this.contactDelete}
        />
      </div>
    );
  }
}
