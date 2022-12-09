import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListWrap = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 45px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;

export const InfoText = styled.span`
  margin-top: 30px;
  font-size: 14px;
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
`;
