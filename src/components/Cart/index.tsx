import { useCallback, useState } from "react";

import { CartGames } from "..";

import { formatCurrencyToBRL } from "../../utils";

import * as S from "./styles";

export function Cart() {
  const [isMobileCartVisible, setIsMobileCartVisible] = useState(false);

  const handleToggleMobileCartVisibility = useCallback(() => {
    setIsMobileCartVisible(
      (prevIsMobileCartVisible) => !prevIsMobileCartVisible
    );
  }, []);

  return (
    <>
      <S.Container isMobileCartVisible={isMobileCartVisible}>
        <S.Content>
          <S.Section>
            <S.Subtitle>Cart</S.Subtitle>
            <CartGames games={[]} />
          </S.Section>

          <S.Section>
            <S.Subtitle>
              Cart <S.TotalPrice>total: {formatCurrencyToBRL(0)}</S.TotalPrice>
            </S.Subtitle>
          </S.Section>
        </S.Content>

        <S.Footer>
          <S.SaveButton type="button">
            Save
            <S.ArrowRightIcon />
          </S.SaveButton>
        </S.Footer>
      </S.Container>

      <S.ToggleCartButton onClick={handleToggleMobileCartVisibility}>
        {isMobileCartVisible && <S.CloseIcon />}
        {!isMobileCartVisible && <S.ShoppingCartIcon />}
      </S.ToggleCartButton>
    </>
  );
}
