import { Title, Wrapper, Message } from 'pages/Home/Home.Styled';
// import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Wrapper>
      <Title>Welcome to Phonebook App!</Title>
      <Message>
        Please register or login to be able to manage your contacts
      </Message>
    </Wrapper>
  );
}
