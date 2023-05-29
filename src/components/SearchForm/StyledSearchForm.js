import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  & .input {
    background: -webkit-linear-gradient(90deg, #282f45, #040c25);
    background: linear-gradient(90deg, #282f45, #040c25);
    margin: 0;
    padding: 10px;
    color: white;
    border: none;
    width: 100%;
    height: 50px;
    font-family: inherit;
    font-size: 16px;
    border-radius: 0.4rem;
  }

  & .input::placeholder {
    color: #b0bec5;
  }

  & .input:focus {
    outline: none;
  }

  & .btn {
    background: -webkit-linear-gradient(90deg, #282f45, #040c25);
    background: linear-gradient(90deg, #282f45, #040c25);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    max-width: 100%;
    height: 50px;
    padding-left: 15px;
    padding-right: 15px;
    text-align: center;
    text-decoration: none;
    font-size: inherit;
  }

  & .btn:focus,
  .btn:hover {
    color: orange;
  }
`;
