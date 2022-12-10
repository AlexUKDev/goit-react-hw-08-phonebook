import { Helmet } from 'react-helmet';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactList/ContactList';

import { Wrapper } from 'pages/Contacts/Contacts.Styled';
import { EditModal } from 'components/EditModal/EditModal';
import { useState } from 'react';

export default function Contacts() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [contactInfo, setContactInfo] = useState(null);

  const toggleEditModal = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };

  const getContactInfo = data => {
    setContactInfo(data);
  };

  return (
    <Wrapper>
      <Helmet>
        <title>Contacts</title>
      </Helmet>

      <ContactsList
        getContactInfo={getContactInfo}
        toggleEditModal={toggleEditModal}
      />

      <ContactForm />

      {isEditModalOpen && (
        <EditModal
          contactInfo={contactInfo}
          toggleEditModal={toggleEditModal}
        />
      )}
    </Wrapper>
  );
}
