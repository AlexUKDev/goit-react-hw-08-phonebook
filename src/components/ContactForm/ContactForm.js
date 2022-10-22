import { Component } from 'react';
import { FormWrap, Lable, SubmitBtn, Input } from './ContactForm.Styled';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newContactId = nanoid();
    const createNewContact = {
      id: newContactId,
      name: this.state.name,
      number: this.state.number,
    };

    this.props.sendNewContact(createNewContact);

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <FormWrap onSubmit={this.handleSubmit}>
        <Lable>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </Lable>
        <Lable>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleInputChange}
          />
        </Lable>
        <SubmitBtn type="submit">Add contact</SubmitBtn>
      </FormWrap>
    );
  }
}

ContactForm.propTypes = {
  sendNewContact: PropTypes.func.isRequired,
};
