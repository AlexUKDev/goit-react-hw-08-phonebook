import styled from 'styled-components';

export const Title = styled.h2`
  display: flex;

  font-size: ${({ size }) => {
    if (!size) {
      return '20px';
    }

    return `${size}px`;
  }};

  margin-bottom: ${({ mb }) => {
    if (!!mb || mb === undefined) {
      return '15px';
    }
    return `${mb}px`;
  }};

  margin-top: ${({ mt }) => {
    if (!!mt || mt === undefined) {
      return '15px';
    }
    return `${mt}px`;
  }};

  justify-content: center;
`;
