import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    top: 0;
    margin: 0px;
    background: -webkit-linear-gradient(90deg, #282f45, #040c25);
    background: linear-gradient(90deg, #282f45, #040c25);
    color: #fff;

    &__title {
      margin: 0px 30px;
    }

    &__item {
      display: inline-block;
      margin: 0px 30px;
    }
  }
`;

export const StyledLink = styled(NavLink)`
  color: white;

  &.active {
    color: orange;
  }

  &.logo.active {
    color: white;
  }
`;
