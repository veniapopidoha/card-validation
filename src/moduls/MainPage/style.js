import styled from 'styled-components';

export const Wrap = styled.div`
  padding: 20px;
  height: 96vh;
  display: flex;
  background-color:  #E5E5E5;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  color: #4C00C2;
  margin: 15px 0;
`;

export const SubTitle = styled.h3`
  color: #798291;
  margin: 15px 0 100px;
`;

export const Button = styled.button`
  color: #fff;
  padding: 15px;
  width: 90%;
  font-size: 20px;
  font-weight: 700;
  background-color: #4C00C2;
  border: none;
  border-radius: 24px;
  position: absolute;
  bottom: 50px;
`;

export const CardWrap = styled.div`
  overflow: scroll;
  width: 95%;
  max-width: 450px;
  height: 450px;
`;