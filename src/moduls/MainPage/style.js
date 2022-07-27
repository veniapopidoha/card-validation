import styled from 'styled-components';

export const Wrap = styled.div`
  height: 96vh;
  display: flex;
  background-color: #e5e5e5;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  color: #4c00c2;
  margin: 15px 0;
`;

export const SubTitle = styled.h3`
  color: #798291;
  margin: 15px 0 100px;
`;

export const Button = styled.button`
  color: #fff;
  padding: 15px;
  width: 500px;
  font-size: 20px;
  font-weight: 700;
  background-color: #4c00c2;
  border: none;
  border-radius: 24px;
  position: absolute;
  ${({ allCards }) => (allCards.length > 2 ? 'top: 120px' : 'bottom: 50px')};
`;

export const CardWrap = styled.div`
  overflow: scroll;
  width: 95%;
  max-width: 450px;
  height: 450px;
`;
