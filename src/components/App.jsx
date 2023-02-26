import React from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

export default class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    // name: '',
    // number: '',
  };

  onSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    // console.log(name);
    // console.log(number);
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
    // console.log(event.currentTarget.value);
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

        <ul>
          {contacts.length > 0 ? (
            contacts
              .filter(({ name }) =>
                name.toLowerCase().includes(filter.toLowerCase())
              )
              .map(contact => (
                <li key={contact.id}>
                  <p>{contact.name}</p>
                  <p>{contact.number}</p>
                  <button
                    type="button"
                    onClick={this.deleteContact}
                    value={contact.id}
                  >
                    Delete contact
                  </button>
                </li>
              ))
          ) : (
            <p>No contacts added yet...</p>
          )}
        </ul>
      </div>
    );
  }
}
