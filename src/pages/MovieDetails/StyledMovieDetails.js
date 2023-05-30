import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledDetailsList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 60px;
  top: 0;
  margin: 0 0 20px 0;
  background: -webkit-linear-gradient(90deg, #282f45, #040c25);
  background: linear-gradient(90deg, #282f45, #040c25);
  border-radius: 4px;
`;

export const StyledDetailsLink = styled(NavLink)`
  display: block;
  height: 100%;
  color: #fff;
  font-size: 20px;
  font-weight: bold;

  &.active {
    color: orange;
  }
`;

export const StyledBackLinkWrapper = styled.div`
  width: fit-content;
  margin-bottom: 20px;
  background: -webkit-linear-gradient(90deg, #282f45, #040c25);
  background: linear-gradient(90deg, #282f45, #040c25);
  border-radius: 4px;
`;

export const StyledBackLink = styled(NavLink)`
  color: white;
  border: none;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  padding: 10px;

  &:focus,
  &:hover {
    color: orange;
  }
`;
