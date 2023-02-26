import React from "react";

export const ContactListItem = ({contact, deleteContact}) => (
    <li key={contact.id}>
    <p>{contact.name}</p>
    <p>{contact.number}</p>
    <button
      type="button"
      onClick={deleteContact}
      value={contact.id}
    >
      Delete contact
    </button>
  </li>
)