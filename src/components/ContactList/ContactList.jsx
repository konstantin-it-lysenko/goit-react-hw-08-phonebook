import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/contactsSelectors';
import { selectFilterValue } from '../../redux/filter/filterSelectors';
import ContactItem from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilterValue);

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = filterContacts();

  return (
    <List>
      {!filteredContacts.length ? (
        <p>There are no contacts</p>
      ) : (
        filteredContacts.map(({ id, name, number }) => {
          return (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={number}
            ></ContactItem>
          );
        })
      )}
    </List>
  );
};

export default ContactList;
