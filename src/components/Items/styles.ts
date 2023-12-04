import styled from "styled-components";

export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: red;
  cursor: pointer;
`;
export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border: 1px solid #ddd;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const Card = styled.span<{ ready: boolean }>`
  flex: 1;
  background-color: ${(props) => (props.ready ? "#cceeff" : "#ffffff")};
  border-radius: 5px;
  padding: 15px;
  transition: background-color 0.3s ease;
`;

export const RemoveCard = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-left: 1px solid #ddd;

  &:hover {
    background-color: #ff6347;
  }
`;

export const ItemNumber = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-right: 1px solid #ddd;

  &:hover {
    background-color: #f0f0f0;
  }
`;
