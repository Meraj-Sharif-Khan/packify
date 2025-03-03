const PackingList = ({ onSortedItems, onDelete, onPacked }) => {
  return (
    <div className="items-container">
      {onSortedItems.map((e) => (
        <section
          key={e.id}
          className={`item box--shadow ${
            e.packed === true ? "packed" : "unPacked"
          }`}
        >
          <span
            className="item__title"
            style={
              e.packed === true ? { textDecoration: "line-through" } : null
            }
          >
            {e.description.toUpperCase()} - {e.quantity}
          </span>

          <div className="item__button">
            <button className="btn btn--delete" onClick={() => onDelete(e)}>
              Delete
            </button>
            <button
              className={`btn ${
                e.packed === true ? "btn--unPacked" : "btn--packed"
              }`}
              onClick={() => onPacked(e)}
            >
              {e.packed === true ? "Unpack" : "Pack"}
            </button>
          </div>
        </section>
      ))}
    </div>
  );
};

export default PackingList;
