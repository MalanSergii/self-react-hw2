export default function ButtonsArea({ state, normalize, onButtonClick }) {
  const buttonsArray = Object.entries(state);

  return (
    <ul>
      {buttonsArray.map(item => (
        <li key={item[0]}>
          <button value={item[0]} onClick={onButtonClick}>
            {normalize(item[0])}
          </button>
        </li>
      ))}
    </ul>
  );
}
