const Stats = ({ onTotalItems, onPacked }) => {
  const packedPercent = Math.round((onPacked / onTotalItems) * 100);

  return (
    <div className="stats">
      <div className="stats-text">
        {onTotalItems === 0 ? (
          "Never Forget a Thing: Your Travel Packing Solution"
        ) : (
          <div>
            <span>
              <span
                className={
                  onTotalItems - onPacked === 0
                    ? "current-stats bg--success"
                    : "current-stats bg--danger"
                }
              >
                Packing Pending {onTotalItems - onPacked}
              </span>
              <span>
                <span> out of </span> {onTotalItems} item
                {onTotalItems > 1 ? `'s` : null}
              </span>
            </span>
            <span>
              <span> You are </span>
              <span> {packedPercent}%</span> Packed
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stats;
