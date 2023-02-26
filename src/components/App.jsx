import React from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export default class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    if (
      this.state.contacts.some(({ name: contactName }) => contactName === name)
    ) {
      alert(`${name} is already in contacts!`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [...contacts, { id: nanoid(), name, number }],
      }));
      form.reset();
    }
  };

  searchContact = event => {
    this.setState({ filter: event.target.value });
  };

  deleteContact = event => {
    const id = event.currentTarget.value;
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  render() {
    const { filter, contacts } = this.state;
    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.onSubmit}></ContactForm>
        <h2>Contacts</h2>
        <Filter filter={filter} searchContact={this.searchContact}></Filter>
        <ContactList
          contacts={contacts}
          filter={filter}
          deleteContact={this.deleteContact}
        ></ContactList>
      </div>
    );
  }
}