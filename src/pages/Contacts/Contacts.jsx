import { Helmet } from 'react-helmet';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Wrapper } from 'pages/Contacts/Contacts.Styled';
import { ContactsList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export default function Contacts() {
  return (
    <Wrapper>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <ContactForm />
      <Filter labelText={'Find contacts by name'} />
      <ContactsList />
    </Wrapper>
  );
}
