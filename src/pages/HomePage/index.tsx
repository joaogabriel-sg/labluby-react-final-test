import { useCallback, useState } from "react";

import { Footer, GamesTypeFilter, Header, RecentGames } from "../../components";

import { DUMMY_TYPE_OF_GAMES, DUMMY_GAMES } from "../../data";

import * as S from "./styles";

export function HomePage() {
  const [gameType, setGameType] = useState("");

  const filteredGamesByType = gameType
    ? DUMMY_GAMES.filter((game) => game.type === gameType)
    : DUMMY_GAMES;

  const handleChangeGameType = useCallback((type: string) => {
    setGameType(type);
  }, []);

  const handleClearGameType = useCallback(() => {
    setGameType("");
  }, []);

  return (
    <>
      <Header hasHomeLink />
      <S.Container>
        <S.Top>
          <S.Subtitle>Recent Games</S.Subtitle>
          <GamesTypeFilter
            typeOfGames={DUMMY_TYPE_OF_GAMES}
            currentGameType={gameType}
            handleClearGameType={handleClearGameType}
            handleChangeGameType={handleChangeGameType}
          />
          <S.NewBetLink to="/">
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
