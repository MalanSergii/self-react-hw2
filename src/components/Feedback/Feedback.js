import ButtonsArea from 'components/ButtonsArea/ButtonsArea';

export default function Feedback({ normalize, onButtonClick, state }) {
  return (
    <div className="feedback">
      <ButtonsArea
        onButtonClick={onButtonClick}
        normalize={normalize}
        state={state}
      />
    </div>
  );
}
