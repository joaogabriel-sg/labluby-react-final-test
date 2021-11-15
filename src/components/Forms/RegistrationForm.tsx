import { FormEvent } from "react";

import { useAppDispatch, useInput } from "../../hooks";

import { register } from "../../store/auth";

import { isEmailValid } from "../../utils";

import * as S from "./styles";

export function RegistrationForm() {
  const dispatch = useAppDispatch();

  const {
    value: nameValue,
    isValueValid: isNameValueValid,
    hasInputError: hasNameInputError,
    errorMessage: nameErrorMessage,
    handleChangeInput: handleChangeNameInput,
    handleBlurInput: handleBlurNameInput,
  } = useInput("Name is required.", (name) => name.trim().length !== 0);

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

  const isFormValid =
    isNameValueValid && isEmailValueValid && isPasswordValueValid;

  function handleRegisterNewUser(event: FormEvent) {
    event.preventDefault();

    if (!isFormValid) {
      handleBlurNameInput();
      handleBlurEmailInput();
      handleBlurPasswordInput();
      return;
    }

    const newUser = {
      name: nameValue,
      email: emailValue,
      password: passwordValue,
    };

    dispatch(register(newUser));
  }

  return (
    <S.Container>
      <S.Title>Registration</S.Title>
      <S.Form onSubmit={handleRegisterNewUser}>
        <S.Field htmlFor="name">
          <S.Input
            type="text"
            id="name"
            placeholder="Name"
            value={nameValue}
            onChange={handleChangeNameInput}
            onBlur={handleBlurNameInput}
          />
          {hasNameInputError && (
            <S.ErrorMessage>{nameErrorMessage}</S.ErrorMessage>
          )}
        </S.Field>

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
