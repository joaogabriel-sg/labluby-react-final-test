import ReactDOM from "react-dom";

import * as S from "./styles";

type LoadingProps = {
  isLoading: boolean;
};

export function Loading({ isLoading }: LoadingProps) {
  if (!isLoading) return null;

  return ReactDOM.createPortal(
    <S.Container>
      <S.Loader />
    </S.Container>,
    document.getElementById("root-loading")!
  );
}
