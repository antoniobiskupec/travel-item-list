export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Add items and quantity to list</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const numPercentage = Math.round((numPacked / numItems) * 100) || 0;
  return (
    <footer className="stats">
      <em>
        {numPercentage === 100
          ? "You got everything! Ready to go 🛩️"
          : `You have ${numItems} items on your list, and you already packed
          ${numPacked} (${numPercentage}%).`}
      </em>
    </footer>
  );
}
