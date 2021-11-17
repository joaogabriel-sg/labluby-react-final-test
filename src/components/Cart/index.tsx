import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { CartGames } from "..";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { saveCart } from "../../store/cart/thunks";

import { formatCurrencyToBRL } from "../../utils";

import * as S from "./styles";

export function Cart() {
  const { cart, totalPrice } = useAppSelector((state) => state.cart);
  const { minCartValue } = useAppSelector((state) => state.games);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const [isMobileCartVisible, setIsMobileCartVisible] = useState(false);

  const handleToggleMobileCartVisibility = useCallback(() => {
    setIsMobileCartVisible(
      (prevIsMobileCartVisible) => !prevIsMobileCartVisible
    );
  }, []);

  function handleSaveCart() {
    if (totalPrice <= minCartValue) {
      toast.error(
        `Your cart must have a total price greater than ${formatCurrencyToBRL(
          minCartValue
        )}.`
      );
      return;
    }

    dispatch(saveCart());
    navigate("/");
  }

  return (
    <>
      <S.Container isMobileCartVisible={isMobileCartVisible}>
        <S.Content>
          <S.Section>
            <S.Subtitle>Cart</S.Subtitle>
            <CartGames games={cart} />
          </S.Section>

          <S.Section>
            <S.Subtitle>
              Cart{" "}
              <S.TotalPrice>
                total: {formatCurrencyToBRL(totalPrice)}
              </S.TotalPrice>
            </S.Subtitle>
          </S.Section>
        </S.Content>

        <S.Footer>
          <S.SaveButton type="button" onClick={handleSaveCart}>
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
