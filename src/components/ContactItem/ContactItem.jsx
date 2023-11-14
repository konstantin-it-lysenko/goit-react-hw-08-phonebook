import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Contact, ContactName, Number } from './ContactItem.styled';

const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <Contact>
      <ContactName>
        {name}: <Number>{number}</Number>
      </ContactName>
      <IconButton
        onClick={() => {
          onDelete(id);
        }}
        size="large"
      >
        <DeleteIcon fontSize="inherit" style={{ fill: '#fff' }} />
      </IconButton>
    </Contact>
  );
};

export default ContactItem;
