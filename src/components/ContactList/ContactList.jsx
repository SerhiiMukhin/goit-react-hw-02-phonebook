import { ContactListItem } from "components/ContactListItem/ContactListItem";
import React from "react";

export const ContactList = ({contacts, filter, deleteContact}) => (
    <ul>
    {contacts.length > 0 ? (
      contacts
        .filter(({ name }) =>
          name.toLowerCase().includes(filter.toLowerCase())
        )
        .map(contact => (
            <ContactListItem contact={contact} deleteContact={deleteContact}></ContactListItem>
        ))
    ) : (
      <p>No contacts added yet...</p>
    )}
  </ul>
)