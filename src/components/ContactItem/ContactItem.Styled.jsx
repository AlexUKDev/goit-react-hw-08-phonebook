import styled from 'styled-components';

export const TextWrap = styled.span`
  margin: 0px 20px 0px 0px;
`;

export const Item = styled.li`
  /* display: flex; */
  /* justify-content: baseline; */
  width: 100%;
  font-size: 25px;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const DelateBtn = styled.button`
  display: inline-block;
  padding: 5px;
  vertical-align: middle;
  border-color: transparent;
  color: rgba(0, 0, 0, 0.6);

  border-radius: 8px;
  font-weight: 700;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    cursor: pointer;
    color: rgba(0, 0, 0, 1);
    scale: 0.95;
    background-color: tomato;
  }
`;
