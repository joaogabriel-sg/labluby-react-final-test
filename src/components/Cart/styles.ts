import styled, { css } from "styled-components";
import { FiArrowRight, FiShoppingCart, FiX } from "react-icons/fi";

export const Subtitle = styled.h2`
  margin-bottom: 3.2rem;
  flex-shrink: 0;

  font-size: 2.4rem;
  font-weight: 700;
  text-transform: uppercase;

  > span {
    font-size: inherit;
    font-weight: 400;
  }
`;

type ContainerProps = {
  isMobileCartVisible: boolean;
};

export const Container = styled.aside<ContainerProps>`
  ${({ theme, isMobileCartVisible }) => css`
    background: ${theme.colors.white};
    width: 100%;
    border: 0.1rem solid ${theme.colors.border.dark};
    border-radius: 1rem;
    overflow: hidden;

    align-self: flex-start;

    @media (max-width: ${theme.mediaQueries.mq906}) {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 80;

      transform: translateY(-100%);
      transition: transform 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      ${isMobileCartVisible &&
      css`
        transform: translateY(0);
      `}
    }
  `}
`;

export const Content = styled.section`
  padding: 3.2rem 1.6rem 0;

  @media (max-width: ${({ theme }) => theme.mediaQueries.mq906}) {
    flex: 1;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const Section = styled.section`
  & + & {
    margin-top: 3.2rem;
  }
`;

export const TotalPrice = styled.span`
  font-size: inherit;
  font-style: normal;
  text-transform: inherit;
`;

export const Footer = styled.footer`
  width: 100%;
`;

export const SaveButton = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.backgroundDark};
    width: 100%;
    height: 9.6rem;

    border: none;
    border-top: 0.1rem solid ${theme.colors.border.dark};

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 3.5rem;
    font-weight: 700;
    color: ${theme.colors.green};
  `}
`;

export const ArrowRightIcon = styled(FiArrowRight)`
  width: 2.4rem;
  height: 2.4rem;
  margin-left: 1rem;
  stroke: ${({ theme }) => theme.colors.green};
`;

export const ToggleCartButton = styled.button`
  ${({ theme }) => css`
    display: none;

    background: ${theme.colors.green};
    position: fixed;
    bottom: 1.2rem;
    right: 1.2rem;
    z-index: 85;

    align-items: center;
    justify-content: center;

    padding: 1.2rem;
    border: none;
    border-radius: 50%;
    box-shadow: 0 0.3rem 2.5rem rgba(0, 0, 0, 0.18);

    @media (max-width: ${theme.mediaQueries.mq906}) {
      display: flex;
    }
  `}
`;

const cssIcon = css`
  width: 2.6rem;
  height: 2.6rem;
  stroke: ${({ theme }) => theme.colors.white};
`;

export const CloseIcon = styled(FiX)`
  ${cssIcon}
`;

export const ShoppingCartIcon = styled(FiShoppingCart)`
  ${cssIcon}
`;
