import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  font-family: Arial, sans-serif;
`;

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none; /* Removes the default focus border */
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff; /* Change the border color on focus */
  }
`;

export const ClearButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #ff6347;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e74c3c;
  }
`;
