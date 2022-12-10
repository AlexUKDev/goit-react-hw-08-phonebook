import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const InfoText = styled.p`
  max-width: 500px;
  margin-top: 30px;
  font-size: 20px;
  text-align: center;
  color: rgba(0, 0, 0, 0.75);
`;

export const ListWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-top: 15px;
  min-width: 500px;

  border-radius: 8px;
`;

export const LoadingWrap = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

export const Table = styled.table`
  background-color: rgba(245, 222, 179, 0.75);
  border-radius: 8px;

  padding: 10px;
`;

export const TableHead = styled.th`
  text-align: center;
  padding: 5px;

  &.start {
    text-align: start;
  }
`;
