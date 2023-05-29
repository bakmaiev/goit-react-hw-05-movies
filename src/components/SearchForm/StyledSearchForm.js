import styled from 'styled-components';

export const StyledForm = styled.form`
  & .input {
    margin: 0;
    padding: 10px;
    color: inherit;
    width: 300px;
    height: 50px;
    font-family: inherit;
    font-size: 20px;
    font-weight: inherit;
    border-radius: 0.4rem;
  }

  & .input::placeholder {
    color: #b0bec5;
  }

  & .input:focus {
    outline: none;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
`;
