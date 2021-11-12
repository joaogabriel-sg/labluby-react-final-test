import styled, { css } from "styled-components";
import { FiShoppingCart } from "react-icons/fi";

export const Container = styled.section`
  display: flex;
  align-items: center;
  column-gap: 2.4rem;

  @media (max-width: ${({ theme }) => theme.mediaQueries.mq906}) {
    flex-direction: column-reverse;
    align-items: flex-start;
    row-gap: 2.4rem;
  }
`;

export const LeftButtons = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  column-gap: 2.4rem;

  @media (max-width: ${({ theme }) => theme.mediaQueries.mq906}) {
    width: 100%;
  }
`;

type ControlButtonProps = {
  isOutlined?: boolean;
};

export const ControlButton = styled.button<ControlButtonProps>`
  ${({ theme, isOutlined }) => css`
    background: ${theme.colors.green};
    min-width: 13.5rem;
    height: 5.2rem;

    padding: 0 2.8rem;
    border: 0.1rem solid transparent;
    border-radius: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 700;
    font-style: normal;
    color: ${theme.colors.white};

    transition: background 0.3s ease-in-out, color 0.3s ease-in-out;

    ${isOutlined &&
    css`
      background: none;
      border-color: ${theme.colors.green};

      font-weight: 500;
      color: ${theme.colors.green};

      &:hover {
        background: ${theme.colors.green};
        color: ${theme.colors.white};
      }
    `}

    @media (max-width: ${theme.mediaQueries.mq906}) {
      width: 100%;
    }
  `}
`;

export const ShoppingCartIcon = styled(FiShoppingCart)`
  width: 2.6rem;
  height: 2.6rem;
  margin-right: 1.6rem;
  stroke: ${({ theme }) => theme.colors.white};
`;
