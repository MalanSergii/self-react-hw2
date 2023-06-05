import PropTypes from 'prop-types';

export default function Statistics({ dataArray, normalize, total, positive }) {
  return (
    <div className="stats">
      <ul>
        {dataArray.map(item => (
          <li key={item[0]}>
            {normalize(item[0])}: {dataArray[item[0]]}
          </li>
        ))}
      </ul>
      <p>Total:{total}</p>
      <p>Positive feedback: {positive}%</p>
    </div>
  );
}

Statistics.propTypes = {
  dataArray: PropTypes.arrayOf(PropTypes.any),
  normalize: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};
