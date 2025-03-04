import React, { useEffect, useState } from "react";
import Form from "./form";
import Stats from "./stats";
import Sort from "./sorted";
const Packify = () => {
  const [items, setItems] = useState([]);

  const totalItems = items.length;
  const packed = countPacked(items);

  useEffect(() => {
    const getstoredItems = localStorage.getItem("item");
    const storedItems = JSON.parse(getstoredItems);

    if (storedItems) setItems(storedItems);
  }, []);

  function countPacked(items) {
    const ispacked = items.filter((e) => e.packed === true);
    return ispacked.length;
    // console.log(packed);
  }

  function handleItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDelete(e) {
    const del = items.filter((item) => item !== e);
    setItems(del);

    const delStoredItem = JSON.stringify(del);
    localStorage.setItem("item", delStoredItem);
  }

  function handlePacked(item) {
    const allItems = [...items];
    const index = allItems.indexOf(item);
    // allItems[index] = { ...allItems[index] };
    allItems[index].packed = !allItems[index].packed;
    setItems(allItems);
    // console.log(index);
    // console.log(allItems);
    const storePacked = JSON.stringify(allItems);
    localStorage.setItem("item", storePacked);
  }

  function handleClearList() {
    const confirm = window.confirm("All item's will be removed!");
    if (confirm) {
      setItems([]);
      localStorage.removeItem("item");
    }
  }

  return (
    <React.Fragment>
      <Stats onTotalItems={totalItems} onPacked={packed} />
      <Form
        items={items}
        onItems={handleItems}
        onTotalItems={totalItems}
        onPacked={packed}
      />
      <Sort
        items={items}
        handleDelete={handleDelete}
        handlePacked={handlePacked}
        onClearList={handleClearList}
      />
    </React.Fragment>
  );
};

export default Packify;
