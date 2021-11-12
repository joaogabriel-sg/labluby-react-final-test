import * as S from "./styles";

type GameControlsProps = {
  handleCompleteGame: () => void;
  handleClearGame: () => void;
};

export function GameControls({
  handleCompleteGame,
  handleClearGame,
}: GameControlsProps) {
  return (
    <S.Container>
      <S.LeftButtons>
        <S.ControlButton isOutlined type="button" onClick={handleCompleteGame}>
          Complete game
        </S.ControlButton>
        <S.ControlButton isOutlined type="button" onClick={handleClearGame}>
          Clear game
        </S.ControlButton>
      </S.LeftButtons>

      <S.ControlButton type="button">
        <S.ShoppingCartIcon />
        Add to cart
      </S.ControlButton>
    </S.Container>
  );
}
