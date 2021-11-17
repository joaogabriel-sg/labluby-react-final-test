import { useCallback, useMemo, useState } from "react";

import { Footer, GamesTypeFilter, Header, RecentGames } from "../../components";

import { useAppSelector } from "../../hooks";

import { Bet } from "../../types";

import * as S from "./styles";

type TypeOfGameAndColor = Pick<Bet, "type" | "color">;

export function HomePage() {
  const { authenticatedUser } = useAppSelector((state) => state.auth);
  const [gameType, setGameType] = useState("");

  const filteredGamesByType = useMemo<Bet[]>(() => {
    if (!authenticatedUser) return [];

    if (authenticatedUser && !gameType) return authenticatedUser.bets;

    return authenticatedUser.bets.filter((game) => game.type === gameType);
  }, [authenticatedUser, gameType]);

  const typeOfGames = useMemo<TypeOfGameAndColor[]>(() => {
    if (!authenticatedUser?.bets.length) return [];

    return authenticatedUser.bets.reduce<TypeOfGameAndColor[]>((acc, bet) => {
      const typeOfGame = { type: bet.type, color: bet.color };
      const isTypeExistent = acc.find(({ type }) => type === typeOfGame.type);

      return isTypeExistent ? acc : [...acc, typeOfGame];
    }, []);
  }, [authenticatedUser]);

  const handleChangeGameType = useCallback((type: string) => {
    setGameType(type);
  }, []);

  const handleClearGameType = useCallback(() => {
    setGameType("");
  }, []);

  return (
    <>
      <Header />
      <S.Container>
        <S.Top>
          <S.Subtitle>Recent Games</S.Subtitle>
          <GamesTypeFilter
            typeOfGames={typeOfGames}
            currentGameType={gameType}
            handleClearGameType={handleClearGameType}
            handleChangeGameType={handleChangeGameType}
          />
          <S.NewBetLink to="/new-bet">
            New Bet
            <S.ArrowRightIcon />
          </S.NewBetLink>
        </S.Top>
        <RecentGames games={filteredGamesByType} />
      </S.Container>
      <Footer />
    </>
  );
}
