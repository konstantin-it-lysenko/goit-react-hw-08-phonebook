import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container } from '@mui/material';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { MainHeading, SecondHeading } from './App.styled';

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

  CONTACTS_LS = 'CONTACTS';

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem(this.CONTACTS_LS));

    if (parsedContacts) {
      this.setState({
        contacts: parsedContacts,
      });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem(
        this.CONTACTS_LS,
        JSON.stringify(this.state.contacts)
      );
    }
  }

  formSubmitHandler = ({ name, number }) => {
    const isDuplicate = this.state.contacts.find(
      contact => contact.name === name
    );

    if (isDuplicate) return alert(`${name} already exists`);

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { name, number, id: nanoid() }],
    }));
  };

  filterInputHandler = e => {
    const inputValue = e.currentTarget.value;

    this.setState({ filter: inputValue });
  };

  contactFilterHandler = () => {
    const { contacts, filter } = this.state;
    const valueToLowerCase = filter.toLowerCase().trim();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(valueToLowerCase)
    );
    return filteredContacts;
  };

  deleteContactHandler = filterId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== filterId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.contactFilterHandler();

    return (
      <Container>
        <MainHeading>Phonebook</MainHeading>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <SecondHeading>Contacts</SecondHeading>
        <Filter inputValue={filter} onFilter={this.filterInputHandler} />
        {filteredContacts && (
          <ContactList
            contacts={filteredContacts || contacts}
            onDelete={this.deleteContactHandler}
          />
        )}
      </Container>
    );
  }
}

export default App;
