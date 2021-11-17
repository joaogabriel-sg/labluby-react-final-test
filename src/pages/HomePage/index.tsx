import { useCallback, useMemo, useState } from "react";

import { Footer, GamesTypeFilter, Header, RecentGames } from "../../components";

import { useAppSelector } from "../../hooks";

import { Bet } from "../../types";

import * as S from "./styles";

type TypeOfGameAndColor = Pick<Bet, "type" | "color">;

export function HomePage() {
  const { authenticatedUser } = useAppSelector((state) => state.auth);
  const [selectedTypeOfGames, setSelectedTypeOfGames] = useState<string[]>([]);

  const filteredGamesByTypes = useMemo<Bet[]>(() => {
    if (!authenticatedUser) return [];
    if (authenticatedUser && !selectedTypeOfGames.length)
      return authenticatedUser.bets;

    return authenticatedUser.bets.filter((game) =>
      selectedTypeOfGames.includes(game.type)
    );
  }, [authenticatedUser, selectedTypeOfGames]);

  const typeOfGames = useMemo<TypeOfGameAndColor[]>(() => {
    if (!authenticatedUser?.bets.length) return [];

    return authenticatedUser.bets.reduce<TypeOfGameAndColor[]>((acc, bet) => {
      const typeOfGame = { type: bet.type, color: bet.color };
      const isTypeExistent = acc.find(({ type }) => type === typeOfGame.type);

      return isTypeExistent ? acc : [...acc, typeOfGame];
    }, []);
  }, [authenticatedUser]);

  const handleChangeGameType = useCallback((type: string) => {
    setSelectedTypeOfGames((prevSelectedTypeOfGames) =>
      prevSelectedTypeOfGames.includes(type)
        ? prevSelectedTypeOfGames
        : [...prevSelectedTypeOfGames, type]
    );
  }, []);

  const handleClearGameType = useCallback((type: string) => {
    setSelectedTypeOfGames((prevSelectedTypeOfGames) =>
      prevSelectedTypeOfGames.filter(
        (prevSelectedTypeOfGame) => prevSelectedTypeOfGame !== type
      )
    );
  }, []);

  return (
    <>
      <Header />
      <S.Container>
        <S.Top>
          <S.Subtitle>Recent Games</S.Subtitle>
          <GamesTypeFilter
            typeOfGames={typeOfGames}
            currentTypeOfGames={selectedTypeOfGames}
            handleClearGameType={handleClearGameType}
            handleChangeGameType={handleChangeGameType}
          />
          <S.NewBetLink to="/new-bet">
            New Bet
            <S.ArrowRightIcon />
          </S.NewBetLink>
        </S.Top>
        <RecentGames games={filteredGamesByTypes} />
      </S.Container>
      <Footer />
    </>
  );
}
