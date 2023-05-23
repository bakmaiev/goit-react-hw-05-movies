import { Home } from 'pages/Home';
import { MovieDetails } from 'pages/MovieDetails';
import { Movies } from 'pages/Movies';
import { NotFound } from 'pages/NotFound';
import { NavLink, Route, Routes } from 'react-router-dom';
import { styled } from 'styled-components';

export const App = () => {
  const StyledLink = styled(NavLink)`
    color: black;

    &.active {
      color: orange;
    }
  `;

  return (
    <>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
