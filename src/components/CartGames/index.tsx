import { formatCurrencyToBRL } from "../../utils";

import * as S from "./styles";

type Game = {
  type: string;
  price: number;
  numbers: string[];
  color?: string;
};

type CartGamesProps = {
  games: Game[];
};

export function CartGames({ games }: CartGamesProps) {
  if (games.length === 0)
    return (
      <S.EmptyContainer>
        <S.EmptyImage />
        Your cart is empty...
      </S.EmptyContainer>
    );

  return (
    <S.Container>
      {games.map(({ type, price, numbers, color }) => (
        <S.Game>
          <S.DeleteGameButton type="button">
            <S.TrashIcon />
          </S.DeleteGameButton>

          <S.Data color={color}>
            <S.Numbers>{numbers.join(", ")}</S.Numbers>
            <S.Info>
              <S.Type>{type}</S.Type>
              <S.Price>{formatCurrencyToBRL(price)}</S.Price>
            </S.Info>
          </S.Data>
        </S.Game>
      ))}
    </S.Container>
  );
}
