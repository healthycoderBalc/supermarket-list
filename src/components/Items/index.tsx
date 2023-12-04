// Item.tsx
import React, { useState } from "react";
import {
  Card,
  CardContainer,
  ItemNumber,
  RemoveButton,
  RemoveCard,
} from "./styles";
import { RiCloseCircleFill } from "react-icons/ri";

interface ItemProps {
  name: string;
  ready: boolean;
  onToggle: () => void;
  onRemove: (id: string) => void;
  onEdit: (newName: string) => void;
  index: number;
  id: string;
}

const Item: React.FC<ItemProps> = ({
  name,
  ready,
  onToggle,
  onRemove,
  onEdit,
  index,
  id,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [itemName, setItemName] = useState(name);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    setEditMode(false);
    onEdit(itemName);
  };
  return (
    <CardContainer>
      <ItemNumber>{index + 1}</ItemNumber>
      {editMode ? (
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          onBlur={handleSave}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSave();
            }
          }}
          autoFocus
        />
      ) : (
        <>
          <Card ready={ready} onClick={onToggle}>
            <span onClick={handleEdit}>{itemName}</span>
          </Card>
          <RemoveCard>
            <RemoveButton
              onClick={(e) => {
                e.stopPropagation();
                onRemove(id);
              }}
            >
              <RiCloseCircleFill size={20} />
            </RemoveButton>
          </RemoveCard>
        </>
      )}
    </CardContainer>
  );
};

export default Item;
