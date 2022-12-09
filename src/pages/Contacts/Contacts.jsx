import { Helmet } from 'react-helmet';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactList/ContactList';

import { Wrapper } from 'pages/Contacts/Contacts.Styled';

export default function Contacts() {
  return (
    <Wrapper>
      <Helmet>
        <title>Contacts</title>
      </Helmet>

      <ContactsList />
      <ContactForm />
    </Wrapper>
  );
}
