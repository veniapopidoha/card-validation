import styled  from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 500px;
  position: fixed;
  bottom: 0;
  padding: 20px 30px;
  border-radius: 24px 24px 0 0;
  animation-iteration-count: 1;
  animation-duration: 1s;
  animation-name: slide;
  animation-fill-mode: forwards;
  @keyframes slide {
    0% { height: 10%; }
    100% { height: 90vh; }
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
  margin-top: 50px;
  width: 100%;
`;

export const Shadow = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
`;

export const Delete = styled.button`
  padding: 15px;
  font-size: 20px;
  font-weight: 700;
  background-color: #fff;
  border: none;
  color:  #798291;
`;

export const Error = styled.div`
  color: #FC484C;
  margin-top: 3px;
  font-weight: 500;
`;

export const Input = styled.input`
  border: none;
  padding: 5px 0;
  font-size: 18px;
  font-weight: 700;
  outline: none;
  width: 100%;
  color: ${({ error, empty }) => (empty ? (error ? '#FC484C' : '#19AC51') : 'black' )};
  border-bottom: 1px solid ${({ error, empty }) => (empty ? (error ? '#FC484C' : '#19AC51') : 'black')};
`;

export const Title = styled.h2`
  color: #000;
  font-weight: 900;
`;

export const InputTitle = styled.h3`
  font-weight: 800;
  margin: 10px 0 0;
`;