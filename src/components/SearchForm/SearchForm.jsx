import React from 'react';

const SearchForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="query" autoFocus placeholder="Search movie" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;