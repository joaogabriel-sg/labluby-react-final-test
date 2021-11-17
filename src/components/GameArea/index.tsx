import { useCallback, useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";

import { ChooseGame, FillYourBet, GameControls, Loading } from "..";

import { useAppDispatch, useAppSelector } from "../../hooks";

import { addToCart } from "../../store/cart";
import { fetchGamesData } from "../../store/games/thunks";

import { TypeOfGame } from "../../types";
import { formatNumberToTwoDigits, sortArray } from "../../utils";

import * as S from "./styles";

export function GameArea() {
  const dispatch = useAppDispatch();
  const typeOfGames = useAppSelector((state) => state.games.typeOfGames);
  const isLoading = useAppSelector((state) => state.loading.isLoading);

  const [selectedTypeOfGame, setSelectedTypeOfGame] =
    useState<TypeOfGame | null>(null);
  const [selectedNumbers, setSelectedNumbers] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    dispatch(fetchGamesData());
  }, [dispatch]);

  useEffect(() => {
    setSelectedTypeOfGame(typeOfGames[0]);
  }, [typeOfGames]);

  useEffect(() => {
    if (errorMessage) toast.error(errorMessage);
  }, [errorMessage]);

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

        const currentSelectedNumbersLength = prevSelectedNumbers.length;
        if (currentSelectedNumbersLength >= selectedTypeOfGame["max-number"]) {
          const numbersWord =
            currentSelectedNumbersLength === 1 ? "number" : "number";
          setErrorMessage(
            `Oops... you have already selected ${currentSelectedNumbersLength} ${numbersWord}.`
          );
          return prevSelectedNumbers;
        }

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

  const handleAddToCart = useCallback(() => {
    if (!selectedTypeOfGame) return;

    const remainingQuantity =
      selectedTypeOfGame["max-number"] - selectedNumbers.length;
    if (remainingQuantity) {
      const numbersWord = remainingQuantity === 1 ? "number" : "numbers";
      setErrorMessage(
        `Incomplete bet!\n Please select ${remainingQuantity} ${numbersWord}.`
      );
      return;
    }

    const bet = {
      type: selectedTypeOfGame.type,
      price: selectedTypeOfGame.price,
      numbers: selectedNumbers,
      color: selectedTypeOfGame.color,
    };

    dispatch(addToCart(bet));
    handleClearGame();
  }, [dispatch, handleClearGame, selectedNumbers, selectedTypeOfGame]);

  return (
    <S.Container>
      <Loading isLoading={isLoading} />

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
        handleAddToCart={handleAddToCart}
      />
    </S.Container>
  );
}
