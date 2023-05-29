import React from 'react';
import { StyledHeader, StyledLink } from './StyledHeader';

const Header = () => {
  return (
    <StyledHeader>
      <nav className="nav">
        <span className="nav__title">
          <StyledLink className="logo" to="/">
            All time HD
          </StyledLink>
        </span>
        <ul className="nav__list">
          <li className="nav__item">
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li className="nav__item">
            <StyledLink to="/movies">Movies</StyledLink>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;
