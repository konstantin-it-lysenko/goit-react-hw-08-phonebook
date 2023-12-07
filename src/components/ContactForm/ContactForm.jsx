import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { StyledFormBox } from './ContactForm.styled';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleContactSubmit = e => {
    e.preventDefault();

    onSubmit({ name, number });

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <StyledFormBox
      onSubmit={handleContactSubmit}
      component="form"
      autoComplete="off"
    >
      <TextField
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        label="Name"
        inputProps={{
          pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
          type: 'text',
          minLength: 2,
          maxLength: 32,
        }}
        required
        InputProps={{
          style: { color: 'white' },
        }}
        InputLabelProps={{
          style: { color: 'white' },
        }}
      />

      <TextField
        name="number"
        value={number}
        onChange={handleChange}
        label="Phone number"
        required
        inputProps={{
          pattern:
            '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}',
          type: 'tel',
          minLength: 10,
        }}
        InputProps={{
          style: { color: 'white' },
        }}
        InputLabelProps={{
          style: { color: 'white' },
        }}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{
          width: 300,
          height: 50,
        }}
      >
        Add contact
      </Button>
    </StyledFormBox>
  );
};

export default ContactForm;
