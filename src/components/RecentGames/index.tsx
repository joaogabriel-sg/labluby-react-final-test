import { formatCurrencyToBRL, formatDate } from "@shared/utils";
import { Bet } from "@shared/types";

import * as S from "./styles";

type RecentGamesProps = {
  games: Bet[];
};

export function RecentGames({ games }: RecentGamesProps) {
  if (games.length === 0)
    return (
      <S.EmptyContainer>
        <S.EmptyImage />
        You still don't have registered games...
      </S.EmptyContainer>
    );

  return (
    <S.Container>
      {games.map((game) => {
        const formattedDate = formatDate(game.date);
        const formattedPrice = formatCurrencyToBRL(game.price);
        const formattedNumbers = game.numbers.join(", ");

        return (
          <S.Game key={game.id} gameColor={game.color}>
            <S.GameNumbers>{formattedNumbers}</S.GameNumbers>
            <S.GameInfo>
              {formattedDate} - ({formattedPrice})
            </S.GameInfo>
            <S.GameType gameColor={game.color}>{game.type}</S.GameType>
          </S.Game>
        );
      })}
    </S.Container>
  );
}
