// ItemList.tsx
import React from "react";
import Item from "../Items";
import { ListContainer, Container } from "./styles";

interface ItemListProps {
  items: { id: string; name: string; ready: boolean }[];
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
  onEdit: (id: string, newName: string) => void;
}

const ItemList: React.FC<ItemListProps> = ({
  items,
  onToggle,
  onRemove,
  onEdit,
}) => {
  return (
    <Container>
      <ListContainer>
        {items?.map((item, index) => (
          <Item
            key={item.id}
            onEdit={(newName) => onEdit(item.id, newName)}
            index={index}
            id={item.id}
            name={item.name}
            ready={item.ready}
            onToggle={() => onToggle(item.id)}
            onRemove={() => onRemove(item.id)}
          />
        ))}
      </ListContainer>
    </Container>
  );
};

export default ItemList;
