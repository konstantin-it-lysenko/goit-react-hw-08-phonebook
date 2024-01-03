import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/contacts/contactsOperations';
import { deleteContact } from '../../redux/contacts/contactsOperations';
import {
  selectContacts,
  selectLoading,
  selectError,
} from '../../redux/contacts/contactsSelectors';
import { selectFilterValue } from '../../redux/filter/filterSelectors';
import ContactItem from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';
import Loader from 'components/Loader/Loader';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const filter = useSelector(selectFilterValue);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();

    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizedFilter);
    });
  };

  const filteredContacts = filterContacts();
  const isListEmpty = !filteredContacts.length && !isLoading && !isError;

  const deleteContactHandler = filterId => {
    dispatch(deleteContact(filterId));
  };

  return (
    <>
      {isLoading && <Loader />}
      {isListEmpty && <p>There are no contacts</p>}
      {filteredContacts.length > 0 && (
        <List>
          {filteredContacts.map(({ id, name, number }) => {
            return (
              <ContactItem
                key={id}
                id={id}
                name={name}
                number={number}
                onDelete={deleteContactHandler}
              ></ContactItem>
            );
          })}
        </List>
      )}
    </>
  );
};

export default ContactList;
