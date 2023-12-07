import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Container } from '@mui/material';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { MainHeading, SecondHeading } from './App.styled';

const App = () => {
  const CONTACTS_LS = 'contacts';

  const [contacts, setContacts] = useState(
    () =>
      JSON.parse(localStorage.getItem(CONTACTS_LS)) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
  );
  const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   const parsedContacts = JSON.parse(localStorage.getItem(CONTACTS_LS));

  //   if (parsedContacts) {
  //     setContacts(parsedContacts);
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem(CONTACTS_LS, JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = ({ name, number }) => {
    const isDuplicate = contacts.find(contact => contact.name === name);

    if (isDuplicate) return alert(`${name} already exists`);

    setContacts(prev => [...prev, { name, number, id: nanoid() }]);
  };

  const filterInputHandler = e => {
    const inputValue = e.target.value;

    setFilter(inputValue);
  };

  const contactFilterHandler = () => {
    console.log(contacts);
    const valueToLowerCase = filter.toLowerCase().trim();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(valueToLowerCase)
    );
    return filteredContacts;
  };

  const deleteContactHandler = filterId => {
    setContacts(prev => prev.filter(({ id }) => id !== filterId));
  };

  const filteredContacts = contactFilterHandler();

  return (
    <Container>
      <MainHeading>Phonebook</MainHeading>
      <ContactForm onSubmit={formSubmitHandler} />

      <SecondHeading>Contacts</SecondHeading>
      <Filter inputValue={filter} onFilter={filterInputHandler} />
      {filteredContacts && (
        <ContactList
          contacts={filteredContacts}
          onDelete={deleteContactHandler}
        />
      )}
    </Container>
  );
};

export default App;
