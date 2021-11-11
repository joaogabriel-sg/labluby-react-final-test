import * as S from "./styles";

export function RegistrationForm() {
  return (
    <S.Container>
      <S.Title>Registration</S.Title>
      <S.Form>
        <S.Field htmlFor="name">
          <S.Input type="text" id="name" placeholder="Name" />
        </S.Field>

        <S.Field htmlFor="email">
          <S.Input type="text" id="email" placeholder="Email" />
        </S.Field>

        <S.Field htmlFor="password">
          <S.Input type="password" id="password" placeholder="Password" />
        </S.Field>

        <S.Button type="submit" isPrimary>
          Register
          <S.ArrowRightIcon />
        </S.Button>
      </S.Form>
      <S.HelperLink to="/login">
        <S.ArrowLeftIcon />
        Back
      </S.HelperLink>
    </S.Container>
  );
}
