import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: fit-content;
  margin-top: 30px;
  padding: 20px;
  font-size: 16px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.01);
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  margin-top: 10px;
`;

export const Input = styled.input`
  width: 350px;
  height: 35px;
  box-sizing: border-box;
  border: solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;

export const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  margin-top: 15px;
  width: fit-content;
  padding: 10px 50px;
  height: 40px;

  background-color: #479e50;
  color: white;
  border-radius: 8px;
  font-weight: 600;
  border-color: transparent;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    cursor: pointer;
    background-color: #54b95f;
    scale: 0.994;
  }
`;
