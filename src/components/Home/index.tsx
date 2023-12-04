// App.tsx
import React, { useState, useEffect } from "react";
import ItemList from "../ItemLists";
import { ClearButton, Container, Input } from "./styles";
import { v4 as uuidv4 } from "uuid";

const Home: React.FC = () => {
  const [items, setItems] = useState<
    { id: string; name: string; ready: boolean }[]
  >(JSON.parse(localStorage.getItem("shoppingList") ?? "[]"));

  // useEffect(() => {
  //   const storedItems = JSON.parse(
  //     localStorage.getItem("shoppingList") ?? "[]"
  //   );
  //   setItems(storedItems);
  // }, []);

  useEffect(() => {
    localStorage.setItem("shoppingList", JSON.stringify(items));
  }, [items]);

  const addItem = (itemName: string) => {
    const newItems = [...items, { id: uuidv4(), name: itemName, ready: false }];
    setItems(newItems);
  };

  const removeItem = (id: string) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const toggleItem = (id: any) => {
    const newItems = [...items];
    const itemIndex = newItems.findIndex((item) => item.id === id);
    if (itemIndex !== -1) {
      const updatedItems = [...newItems];
      updatedItems[itemIndex].ready = !newItems[itemIndex].ready;
      setItems(updatedItems);
    }
  };

  const editItem = (id: any, newName: string) => {
    const newItems = [...items];
    const itemIndex = newItems.findIndex((item) => item.id === id);

    if (itemIndex !== -1) {
      const updatedItems = [...newItems];
      updatedItems[itemIndex].name = newName;
      setItems(updatedItems);
    }
  };

  const clearList = () => {
    setItems([]);
    localStorage.removeItem("shoppingList");
  };

  return (
    <Container>
      <h1 className="bg-success">Supermarket List</h1>
      <Input
        type="text"
        placeholder="Add Item"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addItem(e.currentTarget.value);
            e.currentTarget.value = "";
          }
        }}
      />
      <ClearButton onClick={clearList}>Clear List</ClearButton>
      <ItemList
        items={items}
        onToggle={toggleItem}
        onRemove={removeItem}
        onEdit={(id, newName) => editItem(id, newName)}
      />
    </Container>
  );
};

export default Home;
