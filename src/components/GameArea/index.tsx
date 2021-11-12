import { useCallback, useEffect, useMemo, useState } from "react";

import { ChooseGame, FillYourBet, GameControls } from "..";

import { api } from "../../services";

import { formatNumberToTwoDigits, sortArray } from "../../utils";

import * as S from "./styles";

type TypeOfGame = {
  type: string;
  description: string;
  range: number;
  price: number;
  "max-number": number;
  color: string;
};

type GamesData = {
  "min-cart-value": number;
  types: TypeOfGame[];
};

export function GameArea() {
  const [typeOfGames, setTypeOfGames] = useState<TypeOfGame[]>([]);
  const [selectedTypeOfGame, setSelectedTypeOfGame] =
    useState<TypeOfGame | null>(null);
  const [selectedNumbers, setSelectedNumbers] = useState<string[]>([]);

  useEffect(() => {
    async function getGamesData() {
      const { data } = await api.get<GamesData>("games.json");
      const { types } = data;
      setTypeOfGames(types);
      setSelectedTypeOfGame(types[0]);
    }

    getGamesData();
  }, []);

  const numbers = useMemo(() => {
    if (!selectedTypeOfGame) return [];

    const rangeArray = Array.from({ length: selectedTypeOfGame.range });
    return rangeArray.map((_, index) => formatNumberToTwoDigits(index + 1));
  }, [selectedTypeOfGame]);

  const handleChangeSelectedTypeOfGame = useCallback(
    (newType: string) => {
      const newSelectedTypeOfGame = typeOfGames.find(
        (typeOfGame) => typeOfGame.type === newType
      );

      if (!newSelectedTypeOfGame) return;

      setSelectedTypeOfGame(newSelectedTypeOfGame);
      setSelectedNumbers([]);
    },
    [typeOfGames]
  );

  const handleSelectNumber = useCallback(
    (number: string) => {
      setSelectedNumbers((prevSelectedNumbers) => {
        if (!selectedTypeOfGame) return prevSelectedNumbers;

        if (prevSelectedNumbers.length >= selectedTypeOfGame["max-number"])
          return prevSelectedNumbers;

        return sortArray([...prevSelectedNumbers, number]);
      });
    },
    [selectedTypeOfGame]
  );

  const handleDeselectNumber = useCallback((number: string) => {
    setSelectedNumbers((prevSelectedNumbers) =>
      prevSelectedNumbers.filter((selectedNumber) => selectedNumber !== number)
    );
  }, []);

  const handleClearGame = useCallback(() => {
    setSelectedNumbers([]);
  }, []);

  const handleCompleteGame = useCallback(() => {
    setSelectedNumbers((prevSelectedNumbers) => {
      if (!selectedTypeOfGame) return prevSelectedNumbers;

      const newSelectedNumbers = [...prevSelectedNumbers];

      while (newSelectedNumbers.length < selectedTypeOfGame["max-number"]) {
        const number = Math.floor(Math.random() * selectedTypeOfGame.range) + 1;
        const stringifiedNumber = `${number}`.padStart(2, "0");

        if (!newSelectedNumbers.includes(stringifiedNumber))
          newSelectedNumbers.push(stringifiedNumber);
      }

      return sortArray(newSelectedNumbers);
    });
  }, [selectedTypeOfGame]);

  return (
    <S.Container>
      <S.Subtitle>
        New bet <S.CurrentGame>for {selectedTypeOfGame?.type}</S.CurrentGame>
      </S.Subtitle>

      <ChooseGame
        typeOfGames={typeOfGames}
        selectedType={selectedTypeOfGame?.type || ""}
        handleChangeSelectedTypeOfGame={handleChangeSelectedTypeOfGame}
      />

      <FillYourBet
        description={selectedTypeOfGame?.description || ""}
        color={selectedTypeOfGame?.color || ""}
        numbers={numbers}
        selectedNumbers={selectedNumbers}
        handleSelectNumber={handleSelectNumber}
        handleDeselectNumber={handleDeselectNumber}
      />

      <GameControls
        handleCompleteGame={handleCompleteGame}
        handleClearGame={handleClearGame}
      />
    </S.Container>
  );
}
