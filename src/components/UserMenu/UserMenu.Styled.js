import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 15px;
`;

export const GreetingText = styled.p`
  width: 120px;
  font-weight: 700;
  color: wheat;
`;

export const BtnOut = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  padding: 10px;
  border-radius: 8px;
  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1),
    scale 500ms cubic-bezier(0.4, 0, 0.2, 1);

  color: wheat;

  &:hover {
    transform: translate(2px);
    scale: 0.99;
    color: #54b95f;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

export const AccentText = styled.span`
  font-weight: 700;
  color: white;
`;

export const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: wheat;
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;
