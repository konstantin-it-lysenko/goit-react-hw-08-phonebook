import { Component } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleContactSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <Box
        onSubmit={this.handleContactSubmit}
        component="form"
        sx={{
          width: 300,
          borderRadius: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
        // noValidate
        autoComplete="off"
      >
        <TextField
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          label="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          variant="outlined"
          required
        />

        <TextField
          type="tel"
          name="number"
          value={this.state.number}
          onChange={this.handleChange}
          label="Phone number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
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
      </Box>
    );
  }
}
export default ContactForm;
