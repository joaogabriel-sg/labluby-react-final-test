import { FormEvent } from "react";

import { useAppDispatch, useInput } from "../../hooks";

import { login } from "../../store/auth";

import { isEmailValid } from "../../utils";

import * as S from "./styles";

export function LoginForm() {
  const dispatch = useAppDispatch();

  const {
    value: emailValue,
    isValueValid: isEmailValueValid,
    hasInputError: hasEmailInputError,
    errorMessage: emailErrorMessage,
    handleChangeInput: handleChangeEmailInput,
    handleBlurInput: handleBlurEmailInput,
  } = useInput("Please enter a valid e-mail.", isEmailValid);

  const {
    value: passwordValue,
    isValueValid: isPasswordValueValid,
    hasInputError: hasPasswordInputError,
    errorMessage: passwordErrorMessage,
    handleChangeInput: handleChangePasswordInput,
    handleBlurInput: handleBlurPasswordInput,
  } = useInput(
    "Password must be greater than or equal to 8 characters.",
    (password) => password.trim().length >= 8
  );

  const isFormValid = isEmailValueValid && isPasswordValueValid;

  function handleLoginUser(event: FormEvent) {
    event.preventDefault();

    if (!isFormValid) {
      handleBlurEmailInput();
      handleBlurPasswordInput();
      return;
    }

    const useLoginData = {
      email: emailValue,
      password: passwordValue,
    };

    dispatch(login(useLoginData));
  }

  return (
    <S.Container onSubmit={handleLoginUser}>
      <S.Title>Authentication</S.Title>
      <S.Form>
        <S.Field htmlFor="email">
          <S.Input
            type="text"
            id="email"
            placeholder="Email"
            value={emailValue}
            onChange={handleChangeEmailInput}
            onBlur={handleBlurEmailInput}
          />
          {hasEmailInputError && (
            <S.ErrorMessage>{emailErrorMessage}</S.ErrorMessage>
          )}
        </S.Field>

        <S.Field htmlFor="password">
          <S.Input
            type="password"
            id="password"
            placeholder="Password"
            value={passwordValue}
            onChange={handleChangePasswordInput}
            onBlur={handleBlurPasswordInput}
          />
          {hasPasswordInputError && (
            <S.ErrorMessage>{passwordErrorMessage}</S.ErrorMessage>
          )}
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
