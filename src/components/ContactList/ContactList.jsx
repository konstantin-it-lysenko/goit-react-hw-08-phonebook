import ContactItem from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';

const ContactList = ({ contacts, filtered, onDelete }) => {
  return (
    <List>
      {contacts.length > 0 &&
        filtered.map(({ id, name, number }) => {
          return (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={number}
              onDelete={onDelete}
            ></ContactItem>
          );
        })}
    </List>
  );
};

export default ContactList;
