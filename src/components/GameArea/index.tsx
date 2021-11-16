import { useCallback, useEffect, useMemo, useState } from "react";

import { ChooseGame, FillYourBet, GameControls } from "..";

import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchGamesData } from "../../store/games/thunks";

import { TypeOfGame } from "../../types";
import { formatNumberToTwoDigits, sortArray } from "../../utils";

import * as S from "./styles";

export function GameArea() {
  const dispatch = useAppDispatch();
  const typeOfGames = useAppSelector((state) => state.games.typeOfGames);

  const [selectedTypeOfGame, setSelectedTypeOfGame] =
    useState<TypeOfGame | null>(null);
  const [selectedNumbers, setSelectedNumbers] = useState<string[]>([]);

  useEffect(() => {
    dispatch(fetchGamesData());
  }, [dispatch]);

  useEffect(() => {
    setSelectedTypeOfGame(typeOfGames[0]);
  }, [typeOfGames]);

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
