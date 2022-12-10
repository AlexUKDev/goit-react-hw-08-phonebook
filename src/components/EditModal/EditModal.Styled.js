import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

export const Modal = styled.div`
  width: 300px;
  padding: 40px;
  position: relative;
  background-color: wheat;

  border-radius: 8px;
`;

export const CloseBtn = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;

  margin: 5px 5px 0 0;

  width: 30px;
  height: 30px;

  padding: 3px;
  background-color: transparent;

  border: none;
  border-radius: 50%;

  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.445, 0.05, 0.55, 0.95),
    transform 250ms cubic-bezier(0.445, 0.05, 0.55, 0.95);

  & svg {
    width: 20px;
    height: 20px;
  }

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.2);
    transform: scale(0.9);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const Label = styled.label`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  display: block;
  height: 30px;
  border-radius: 5px;

  margin-left: 10px;
  padding-left: 15px;
  height: 50px;

  border: none;

  &:first-child {
    margin-bottom: 10px;
  }

  font-size: 18px;
  font-family: inherit;
  background-color: rgba(0, 0, 0, 0.1);

  transition: border-color 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275),
    background-color 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const SubmitBtn = styled.button`
  align-self: center;

  width: 50px;
  height: 50px;

  margin-top: 10px;

  cursor: pointer;
  border-radius: 50%;
  border: none;

  background-color: transparent;

  transition: background-color 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275),
    scale 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);

  & svg {
    height: 30px;
    width: 30px;
  }
  &:hover svg {
    fill: black;
  }

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.2);
    scale: 0.9;
  }
`;
