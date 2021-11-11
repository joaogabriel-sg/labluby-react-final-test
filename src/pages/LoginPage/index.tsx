import { Route, Routes } from "react-router-dom";

import {
  LoginForm,
  RegistrationForm,
  ResetPasswordForm,
  Footer,
} from "../../components";

import * as S from "./styles";

export function LoginPage() {
  return (
    <S.Container>
      <S.Content>
        <S.TextSide>
          <S.Title>
            <S.TopTitle>The Greatest App</S.TopTitle>
            <S.MidTitle>for</S.MidTitle>
            <S.BottomTitle>Lottery</S.BottomTitle>
          </S.Title>
        </S.TextSide>
        <S.FormSide>
          <S.FormContainer>
            <Routes>
              <Route path="/" element={<LoginForm />} />
              <Route path="registration" element={<RegistrationForm />} />
              <Route path="reset-password" element={<ResetPasswordForm />} />
            </Routes>
          </S.FormContainer>
        </S.FormSide>
      </S.Content>
      <Footer />
    </S.Container>
  );
}
