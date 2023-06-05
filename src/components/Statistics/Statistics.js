export default function Statistics({ state, normalize, total, positive }) {
  const statsArray = Object.entries(state);

  return (
    <div className="stats">
      <ul>
        {statsArray.map(item => (
          <li key={item[0]}>
            {normalize(item[0])}: {state[item[0]]}
          </li>
        ))}
      </ul>
      <p>Total:{total}</p>
      <p>Positive feedback: {positive}%</p>
    </div>
  );
}
