import { TypeOfGame } from "@shared/types";

import * as S from "./styles";

type ChooseGameProps = {
  typeOfGames: Pick<TypeOfGame, "type" | "color">[];
  selectedType: string;
  handleChangeSelectedTypeOfGame: (type: string) => void;
};

export function ChooseGame({
  typeOfGames,
  selectedType,
  handleChangeSelectedTypeOfGame,
}: ChooseGameProps) {
  return (
    <S.Container>
      <S.Title>Choose a game</S.Title>
      <S.TypeOfGames>
        {typeOfGames.map(({ type, color }) => (
          <S.TypeOfGame key={type}>
            <S.TypeOfGameButton
              color={color}
              isActive={type === selectedType}
              onClick={handleChangeSelectedTypeOfGame.bind(null, type)}
            >
              {type}
            </S.TypeOfGameButton>
          </S.TypeOfGame>
        ))}
      </S.TypeOfGames>
    </S.Container>
  );
}
