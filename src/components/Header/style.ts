import styled from 'styled-components';

export const Container = styled.header`
  background: #D73035;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 198px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .page-details {
    h1 {
      color: #fff;
      font-size: 32px;
    }

    h2{
      color: #fff;
      font-size: 16px;
      font-weight: 400px;
      opacity: 0.8;
      margin-top: 6px;
    }
  }
`;
