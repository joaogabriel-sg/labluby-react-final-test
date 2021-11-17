import { useCallback } from "react";

import { removeFromCart } from "@store/cart";

import { useAppDispatch } from "@shared/hooks";
import { formatCurrencyToBRL } from "@shared/utils";
import { Bet } from "@shared/types";

import * as S from "./styles";

type CartGamesProps = {
  games: Bet[];
};

export function CartGames({ games }: CartGamesProps) {
  const dispatch = useAppDispatch();

  const handleDeleteGame = useCallback(
    (id: string) => {
      dispatch(removeFromCart(id));
    },
    [dispatch]
  );

  if (games.length === 0)
    return (
      <S.EmptyContainer>
        <S.EmptyImage />
        Your cart is empty...
      </S.EmptyContainer>
    );

  return (
    <S.Container>
      {games.map(({ id, type, price, numbers, color }) => (
        <S.Game key={id}>
          <S.DeleteGameButton
            type="button"
            onClick={handleDeleteGame.bind(null, id)}
          >
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
