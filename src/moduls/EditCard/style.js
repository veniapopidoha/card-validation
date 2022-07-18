import styled  from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 85%;
  position: fixed;
  bottom: 0;
  padding: 40px 30px;
  border-radius: 24px 24px 0 0;
  animation-iteration-count: 1;
  animation-duration: 1s;
  animation-name: slidegdz;
  animation-fill-mode: forwards;
  @keyframes slidegdz {
    0% { height: 10%; }
    100% { height: 90%; }
  }
`;

export const Close = styled.button`
  color: #444E5D;
  border: none;
  background-color: #fff;
  position: absolute;
  right: 30px;
  top: 30px;
  font-size: 24px;
  font-weight: 900;
`;

export const Confirm = styled.button`
  color: #fff;
  padding: 15px;
  font-size: 20px;
  font-weight: 700;
  background-color: ${({ disabled }) => (disabled ? '#D3D8E1' : '#4C00C2')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  border: none;
  border-radius: 24px;
  margin-top: 40px;
  width: 100%;
`;

export const Delete = styled.button`
  padding: 15px;
  font-size: 20px;
  font-weight: 700;
  background-color: #fff;
  border: none;
  color:  #798291;
`;