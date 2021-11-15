import * as S from "./styles";

export function ResetPasswordForm() {
  return (
    <S.Container>
      <S.Title>Reset Password</S.Title>
      <S.Form>
        <S.Field htmlFor="email">
          <S.Input type="text" id="email" placeholder="Email" />
        </S.Field>

        <S.Button type="submit" isPrimary>
          Send link
          <S.ArrowRightIcon />
        </S.Button>
      </S.Form>
      <S.HelperLink to="/auth">
        <S.ArrowLeftIcon />
        Back
      </S.HelperLink>
    </S.Container>
  );
}
