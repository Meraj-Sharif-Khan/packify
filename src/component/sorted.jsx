import React, { Fragment, useState } from "react";
import PackingList from "./packingList";
import BlurredOverlay from "./blur";
const Sort = ({ items, handleDelete, handlePacked, onClearList }) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItem;
  if (sortBy === "input") sortedItem = items;
  if (sortBy === "description")
    sortedItem = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItem = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  //   console.log(sortedItem);

  return (
    <>
      {items.length > 0 ? (
        <Fragment>
          <BlurredOverlay />

          <div className="sort-container">
            <div className="sort-clear">
              <select
                className="select"
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option hidden>Sort By</option>
                <option value="input">input</option>
                <option value="description">Description</option>
                <option value="packed">Packed</option>
              </select>
              <button onClick={() => onClearList()} className="btn btn--clear">
                Clear List
              </button>
            </div>
          </div>

          <PackingList
            onSortedItems={sortedItem}
            onDelete={handleDelete}
            onPacked={handlePacked}
          />
        </Fragment>
      ) : null}
    </>
  );
};

export default Sort;
