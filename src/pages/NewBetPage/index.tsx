import { Cart, Footer, GameArea, Header } from "@components";

import * as S from "./styles";

export function NewBetPage() {
  return (
    <>
      <Header hasHomeLink />
      <S.Container>
        <GameArea />
        <Cart />
      </S.Container>
      <Footer />
    </>
  );
}
