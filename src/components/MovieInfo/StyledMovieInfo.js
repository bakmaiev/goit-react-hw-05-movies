import styled from 'styled-components';

export const StyledInfoWrapper = styled.div`
  display: flex;
  gap: 30px;

  & .img {
    width: 250px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }

  & .info {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  & .title {
    font-size: 30px;
  }
  & .subtitle {
    display: block;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;
