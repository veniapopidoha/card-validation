import styled from 'styled-components';

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