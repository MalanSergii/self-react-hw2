import PropTypes from 'prop-types';
import { ButtonsList, Item, Button } from './ButtonsArea.styled';
export default function ButtonsArea({ dataArray, normalize, onButtonClick }) {
  return (
    <ButtonsList>
      {dataArray.map(item => (
        <Item key={item[0]}>
          <Button value={item[0]} onClick={onButtonClick}>
            {normalize(item[0])}
          </Button>
        </Item>
      ))}
    </ButtonsList>
  );
}

ButtonsArea.propTypes = {
  dataArray: PropTypes.arrayOf(PropTypes.array),
};
