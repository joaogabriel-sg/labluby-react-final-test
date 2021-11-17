import { FormEvent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Footer, Header } from "@components";

import { updateAccountSettings } from "@store/auth/thunks";

import { useAppDispatch, useAppSelector, useInput } from "@shared/hooks";
import { User } from "@shared/types";
import { isEmailValid } from "@shared/utils";

import * as S from "./styles";

export function AccountPage() {
  const { authenticatedUser } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const {
    value: nameValue,
    isValueValid: isNameValueValid,
    hasInputError: hasNameInputError,
    errorMessage: nameErrorMessage,
    handleChangeInput: handleChangeNameInput,
    handleBlurInput: handleBlurNameInput,
  } = useInput(
    "Name is required.",
    (name) => name.trim().length !== 0,
    authenticatedUser?.name
  );

  const {
    value: emailValue,
    isValueValid: isEmailValueValid,
    hasInputError: hasEmailInputError,
    errorMessage: emailErrorMessage,
    handleChangeInput: handleChangeEmailInput,
    handleBlurInput: handleBlurEmailInput,
  } = useInput(
    "Please enter a valid e-mail.",
    isEmailValid,
    authenticatedUser?.email
  );

  const {
    value: passwordValue,
    isValueValid: isPasswordValueValid,
    hasInputError: hasPasswordInputError,
    errorMessage: passwordErrorMessage,
    handleChangeInput: handleChangePasswordInput,
    handleBlurInput: handleBlurPasswordInput,
  } = useInput(
    "Password must be greater than or equal to 8 characters.",
    (password) => password.trim().length >= 8,
    authenticatedUser?.password
  );

  const isFormValid =
    isNameValueValid && isEmailValueValid && isPasswordValueValid;

  const togglePasswordVisibility = useCallback(() => {
    setIsPasswordVisible((prevIsPasswordVisible) => !prevIsPasswordVisible);
  }, []);

  function handleSubmitUpdatedData(event: FormEvent) {
    event.preventDefault();

    if (!authenticatedUser) return;

    if (!isFormValid) {
      handleBlurNameInput();
      handleBlurEmailInput();
      handleBlurPasswordInput();
      return;
    }

    const updatedUser: User = {
      ...authenticatedUser,
      name: nameValue,
      email: emailValue,
      password: passwordValue,
    };

    dispatch(updateAccountSettings(updatedUser));
    navigate("/");
  }

  return (
    <>
      <Header hasHomeLink />
      <S.Container>
        <S.Subtitle>Account Settings</S.Subtitle>
        <S.Form onSubmit={handleSubmitUpdatedData}>
          <S.Field>
            <S.Label>Name</S.Label>
            <S.InputWrapper>
              <S.Input
                type="text"
                value={nameValue}
                onChange={handleChangeNameInput}
                onBlur={handleBlurNameInput}
              />
            </S.InputWrapper>
            {hasNameInputError && (
              <S.ErrorMessage>{nameErrorMessage}</S.ErrorMessage>
            )}
          </S.Field>

          <S.Field>
            <S.Label>E-mail</S.Label>
            <S.InputWrapper>
              <S.Input
                type="text"
                value={emailValue}
                onChange={handleChangeEmailInput}
                onBlur={handleBlurEmailInput}
              />
            </S.InputWrapper>
            {hasEmailInputError && (
              <S.ErrorMessage>{emailErrorMessage}</S.ErrorMessage>
            )}
          </S.Field>

          <S.Field>
            <S.Label>Password</S.Label>
            <S.InputWrapper>
              <S.Input
                type={isPasswordVisible ? "text" : "password"}
                value={passwordValue}
                onChange={handleChangePasswordInput}
                onBlur={handleBlurPasswordInput}
              />
              <S.PasswordVisibilityButton
                type="button"
                onClick={togglePasswordVisibility}
              >
                {isPasswordVisible ? <S.OpenEyeIcon /> : <S.ClosedEyeIcon />}
              </S.PasswordVisibilityButton>
            </S.InputWrapper>
            {hasPasswordInputError && (
              <S.ErrorMessage>{passwordErrorMessage}</S.ErrorMessage>
            )}
          </S.Field>

          <S.SaveButton>
            Save
            <S.ArrowRightIcon />
          </S.SaveButton>
        </S.Form>
      </S.Container>
      <Footer />
    </>
  );
}
