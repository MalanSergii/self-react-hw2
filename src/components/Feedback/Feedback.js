// import PropTypes from 'prop-types';

import ButtonsArea from 'components/ButtonsArea/ButtonsArea';

export default function Feedback({ normalize, onButtonClick, dataArray }) {
  return (
    <div className="feedback">
      <ButtonsArea
        onButtonClick={onButtonClick}
        normalize={normalize}
        dataArray={dataArray}
      />
    </div>
  );
}

// Feedback.propTypes = {
//   normalize: PropTypes.func,
//   onButtonClick: PropTypes.func,
//   dataArray: PropTypes.array,
// };
