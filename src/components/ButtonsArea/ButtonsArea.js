import PropTypes from 'prop-types';
export default function ButtonsArea({ dataArray, normalize, onButtonClick }) {
  return (
    <ul>
      {dataArray.map(item => (
        <li key={item[0]}>
          <button value={item[0]} onClick={onButtonClick}>
            {normalize(item[0])}
          </button>
        </li>
      ))}
    </ul>
  );
}

ButtonsArea.propTypes = {
  dataArray: PropTypes.arrayOf(PropTypes.array),
};
