import styled from '@emotion/styled';

const ButtonsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
const Item = styled.li`
  :not(:last-child) {
    margin-right: 10px;
  }
`;

function setColor(props) {
  switch (props.value) {
    case 'bad':
      return 'var(--bad)';
    case 'good':
      return 'var(--good)';
    case 'neutral':
      return `var(--neutral)`;
    default:
      return 'var(--default)';
  }
}

const Button = styled.button`
  cursor: pointer;
  min-width: 80px;
  padding: 5px 10px;
  margin-bottom: 10px;
  font-size: 15px;
  font-weight: bold;
  :hover,
  :focus {
    background-color: greenyellow;
    border-radius: 5px;
  }
  color: ${setColor};
`;

export { ButtonsList, Item, Button };
