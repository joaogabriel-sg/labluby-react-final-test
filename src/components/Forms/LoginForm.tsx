import * as S from "./styles";

export function LoginForm() {
  return (
    <S.Container>
      <S.Title>Authentication</S.Title>
      <S.Form>
        <S.Field htmlFor="email">
          <S.Input type="text" id="email" placeholder="Email" />
        </S.Field>

        <S.Field htmlFor="password">
          <S.Input type="password" id="password" placeholder="Password" />
        </S.Field>

        <S.ForgotPassword to="reset-password">
          I forget my password
        </S.ForgotPassword>

        <S.Button type="submit" isPrimary>
          Log In
          <S.ArrowRightIcon />
        </S.Button>
      </S.Form>
      <S.HelperLink to="registration">
        Sign Up
        <S.ArrowRightIcon />
      </S.HelperLink>
    </S.Container>
  );
}
