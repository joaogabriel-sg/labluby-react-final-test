import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export const Container = styled.div`
  width: 35.2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.mediaQueries.mq906}) {
    width: 100%;
    max-width: 35.2rem;
  }
`;

export const Title = styled.h2`
  margin-bottom: 3rem;
  font-size: 3.6rem;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.mediaQueries.mq906}) {
    font-size: 2.8rem;
  }
`;

export const Form = styled.form`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    width: 100%;
    max-width: 35.2rem;
    overflow: hidden;

    border: 0.1rem solid ${theme.colors.border.dark};
    border-radius: 1.4rem;
    box-shadow: 0 0.3rem 2.5rem rgba(0, 0, 0, 0.08);

    display: flex;
    flex-direction: column;
  `}
`;

export const Field = styled.label`
  width: 100%;
  padding: 3.2rem 3rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.border.light};
`;

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    border: none;

    font-weight: 700;
    font-size: 1.7rem;
    color: ${theme.colors.text[500]};

    &::placeholder {
      color: ${theme.colors.text[500]};
    }
  `}
`;

export const ForgotPassword = styled(Link)`
  align-self: flex-end;
  margin: 2.4rem 3rem 1.6rem;

  font-size: 1.6rem;
  text-align: right;
  color: ${({ theme }) => theme.colors.text[100]};
`;

const cssArrowIcon = css`
  width: 2.4rem;
  height: 2.4rem;
  stroke: ${({ theme }) => theme.colors.text[700]};
`;

export const ArrowRightIcon = styled(FiArrowRight)`
  ${cssArrowIcon}
  margin-left: 1.6rem;
`;

export const ArrowLeftIcon = styled(FiArrowLeft)`
  ${cssArrowIcon}
  margin-right: 1.6rem;
`;

type ButtonType = {
  isPrimary?: boolean;
};

export const Button = styled.button<ButtonType>`
  ${({ theme, isPrimary }) => css`
    background: none;
    align-self: center;

    margin: 3.2rem 3rem;
    border: none;

    font-weight: 700;
    font-size: 3.6rem;
    color: ${theme.colors.primary};

    ${isPrimary &&
    css`
      ${ArrowRightIcon} {
        stroke: ${theme.colors.primary};
      }
    `}

    @media (max-width: ${theme.mediaQueries.mq906}) {
      font-size: 2.8rem;
    }
  `}
`;

export const HelperLink = styled(Link)`
  margin-top: 3rem;

  font-weight: 700;
  font-size: 3.6rem;

  @media (max-width: ${({ theme }) => theme.mediaQueries.mq906}) {
    font-size: 2.8rem;
  }
`;

export const ErrorMessage = styled.span`
  display: block;
  margin-top: 2rem;

  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.error};
`;
