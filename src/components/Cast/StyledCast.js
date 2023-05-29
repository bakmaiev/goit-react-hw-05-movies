import styled from 'styled-components';

export const StyledCastList = styled.ul`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export const StyledCastItem = styled.li`
  width: calc((100% - 60px) / 4);
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);

  & span {
    padding: 0 10px 10px 10px;
  }
`;
