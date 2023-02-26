import React from 'react';
import { nanoid } from 'nanoid';

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

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <h3>Find contacts by name</h3>
        <input
          type="text"
          name="filter"
          value={this.state.filter}
          onChange={this.searchContact}
        />
        <ul>
          {this.state.contacts.length > 0 ? (
            this.state.contacts
              .filter(({ name }) =>
                name.toLowerCase().includes(this.state.filter.toLowerCase())
              )
              .map(contact => (
                <li key={contact.id}>
                  <p>{contact.name}</p>
                  <p>{contact.number}</p>
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
