import styled from 'styled-components';

export const ListOptions = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 20px;
`;
export const ButtonOption = styled.button`
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  display: inline-block;
  padding: 10px 32px;

  color: black;
  background-color: white;
  border-radius: 4px;
  border: #696969;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  font-weight: 700;

  &:hover,
  &:focus {
    background-color: blue;
  }
`;
