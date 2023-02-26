import React from 'react';
import PropTypes from 'prop-types';

export const Filter = ({ filter, searchContact }) => (
  <div>
    <h3>Find contacts by name</h3>
    <input type="text" name="filter" value={filter} onChange={searchContact} />
  </div>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  searchContact: PropTypes.func.isRequired,
};
