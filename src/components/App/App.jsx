import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { Container } from '@mui/material';
import { MainHeading, SecondHeading } from './App.styled';

const App = () => {
  return (
    <Container>
      <MainHeading>Phonebook</MainHeading>
      <ContactForm />

      <SecondHeading>Contacts</SecondHeading>
      <Filter />
      <ContactList />
    </Container>
  );
};

export default App;
