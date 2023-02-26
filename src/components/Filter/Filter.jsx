import React from 'react';

export const Filter = ({ filter, searchContact }) => (
  <div>
    <h3>Find contacts by name</h3>
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={searchContact}
    />
  </div>
);
