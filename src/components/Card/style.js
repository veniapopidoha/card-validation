import styled from 'styled-components';

const purpleGradient =
  'background: linear-gradient( 120deg , #4C00C2 60%, #3B058E 40%)';
const greenGradient =
  'background: linear-gradient( 120deg , #00cdc9 60%, #02b7b3 40%)';

export const Wrap = styled.div`
  ${({ $index }) => ($index % 2 === 0 ? purpleGradient : greenGradient)};
  border-radius: 16px;
  padding: 15px;
  width: 95%;
  margin-bottom: 10px;
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 15px;
  align-items: center;
`;

export const Text = styled.h2`
  color: ${({ $index }) => ($index % 2 === 0 ? '#d3d8e1' : '#444E5D')};
  margin: 0;
  font-size: 14px;
`;

export const Code = styled.h1`
  color: #ffffff;
  margin: 0;
  font-size: 20px;
`;

export const RowEnd = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const RowStart = styled(RowEnd)`
  justify-content: flex-start;
  margin-top: 50px;
`;

export const CardInfo = styled(InfoBlock)`
  align-items: flex-start;
`;

export const Number = styled.h2`
  color: ${({ $index }) => ($index % 2 === 0 ? '#d3d8e1' : '#444E5D')};
  margin: 10px 0;
  font-size: 18px;
`;

export const Edit = styled.img`
  display: flex;
  position: relative;
  left: 90%;
  top: 53%;
  width: 24px;
`;
