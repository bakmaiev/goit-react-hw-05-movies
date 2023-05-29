import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & .title {
    text-align: center;
  }
`;

export const StyledMoviesList = styled.ul`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export const StyledMoviesItem = styled.li`
  width: calc((100% - 60px) / 4);
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
    transform: scale(1.03);
  }
`;
