import { useDispatch } from 'react-redux';
import { deleteContact } from './../../redux/contactsSlice/contactsSlice';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Contact, ContactName, Number } from './ContactItem.styled';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const deleteContactHandler = filterId => {
    dispatch(deleteContact(filterId));
  };

  return (
    <Contact>
      <ContactName>
        {name}: <Number>{number}</Number>
      </ContactName>
      <IconButton
        onClick={() => {
          deleteContactHandler(id);
        }}
        size="large"
      >
        <DeleteIcon fontSize="inherit" style={{ fill: '#fff' }} />
      </IconButton>
    </Contact>
  );
};

export default ContactItem;
