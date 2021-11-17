import { FiArrowRight, FiEye, FiEyeOff } from "react-icons/fi";
import styled, { css } from "styled-components";

export const Container = styled.main`
  // full window - header - footer
  min-height: calc(100vh - 8rem - 8.2rem);
  width: 100%;
  max-width: 104rem;
  padding: 4.8rem 0.8rem 4.15rem;
  margin: 0 auto;
`;

export const Subtitle = styled.h2`
  flex-shrink: 0;

  font-size: 2.4rem;
  font-weight: 700;
  text-transform: uppercase;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 48rem;
  margin-top: 3.8rem;

  display: flex;
  flex-direction: column;
`;

export const Field = styled.label`
  margin-bottom: 2.4rem;
`;

export const Label = styled.strong`
  display: block;
  margin-bottom: 0.8rem;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text[600]};
`;

export const InputWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  width: 100%;
  padding: 0 1.6rem;
  border-radius: 0.4rem;
  box-shadow: 0 0.3rem 2.5rem rgba(0, 0, 0, 0.08);

  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const Input = styled.input`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    width: 100%;
    height: 4.2rem;
    border: none;

    font-size: 1.7rem;
    font-weight: 700;
    color: ${theme.colors.text[500]};
  `};
`;

export const ErrorMessage = styled.span`
  display: block;
  margin-top: 0.8rem;

  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.error};
`;

export const PasswordVisibilityButton = styled.button`
  background: transparent;
  border: none;
`;

const eyeIconCss = css`
  width: 2rem;
  height: 2rem;
`;

export const OpenEyeIcon = styled(FiEye)`
  ${eyeIconCss}
  stroke: ${({ theme }) => theme.colors.primary};
`;

export const ClosedEyeIcon = styled(FiEyeOff)`
  ${eyeIconCss}
  stroke: ${({ theme }) => theme.colors.text[500]};
`;

export const SaveButton = styled.button`
  background: none;
  width: min-content;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 3.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

export const ArrowRightIcon = styled(FiArrowRight)`
  width: 2.4rem;
  height: 2.4rem;
  margin-left: 1rem;
  stroke: ${({ theme }) => theme.colors.primary};
`;
