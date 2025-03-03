import React, { useState } from "react";
import Joi from "joi";

const Form = ({ onItems, items }) => {
  const [description, setDescription] = useState("");
  const [quantity, setquantity] = useState(1);
  const [error, setError] = useState("");

  const schema = Joi.object({
    description: Joi.string().min(2).max(15).label("Packing Item"),
    quantity: Joi.required(),
    packed: Joi.required(),
    id: Joi.required(),
  });

  function validate(packingItem) {
    const result = schema.validate(packingItem, { abortEarly: false });
    if (!result.error) return null;

    const error = [];
    for (let item of result.error.details) {
      error[item.path[0]] = item.message;
    }
    return error;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const packingItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };
    const error = validate(packingItem);
    setError(error);

    if (error) return;

    const storeItems = JSON.stringify(items.concat(packingItem));
    localStorage.setItem("item", storeItems);
    setDescription("");
    setquantity(1);
    onItems(packingItem);
  }

  return (
    <React.Fragment>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__group">
          <div>
            <input
              type="text"
              className="form-control form__input width--1080"
              placeholder="e.g. T-shirts, Ticket"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required={true}
              autoFocus
            />
          </div>
          <div className="form__select">
            <select
              className="form-control form__input"
              value={quantity}
              onChange={(e) => setquantity(Number(e.target.value))}
            >
              {Array.from({ length: 20 }, (_, i) => i + 1).map((number) => (
                <option value={number} key={number}>
                  {number}
                </option>
              ))}
            </select>
          </div>
          <button className="btn btn--add">Add</button>
        </div>

        {error && (
          <div
            className="error"
            style={{
              color: "red",
              fontSize: "1.5rem",
              paddingTop: "3rem",
              fontWeight: "700",
            }}
          >
            {error.description}
          </div>
        )}
      </form>
    </React.Fragment>
  );
};

export default Form;
