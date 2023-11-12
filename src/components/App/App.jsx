import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container } from '@mui/material';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { MainHeading, SecondHeading } from './App.styled';
const id = nanoid();
const id2 = nanoid();

console.log('ids: ', id, id2);

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = ({ name, number }) => {
    console.log(name, number);
  };

  render() {
    return (
      <Container>
        <MainHeading>Phonebook</MainHeading>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <SecondHeading>Contacts</SecondHeading>
        <Filter />
        <ContactList />
      </Container>
    );
  }
}

export default App;
