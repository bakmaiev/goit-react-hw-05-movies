import React from 'react';
import { StyledForm } from './StyledSearchForm';

const SearchForm = ({ onSubmit }) => {
  return (
    <StyledForm onSubmit={onSubmit}>
      <input
        type="text"
        name="query"
        className="input"
        autoFocus
        placeholder="Search movie"
      />
      <button type="submit">Search</button>
    </StyledForm>
  );
};

export default SearchForm;
