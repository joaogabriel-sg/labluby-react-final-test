import { FiArrowRight, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 8rem;
  border-bottom: 0.2rem solid ${({ theme }) => theme.colors.border.light};

  display: flex;
  align-items: center;
`;

export const Content = styled.nav`
  width: 100%;
  max-width: 104rem;
  height: 100%;

  padding: 1.5rem 0.8rem 0;
  margin: 0 auto;

  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.mediaQueries.mq906}) {
    justify-content: space-between;
  }
`;

export const Logo = styled.h1`
  position: relative;
  height: 100%;

  padding-left: 1.2rem;
  margin-right: 6.4rem;

  font-size: 4.4rem;
  font-weight: 700;
  letter-spacing: -0.2rem;
  line-height: 6.4rem;

  user-select: none;

  &::after {
    content: "";
    background: ${({ theme }) => theme.colors.primary};
    width: calc(100% + 1.2rem);
    height: 0.7rem;
    border-radius: 4rem;

    position: absolute;
    bottom: calc(-0.7rem / 2);
    left: -50%;
    transform: translateX(calc(50% - 0.8rem));
  }
`;

type MenuProps = {
  isMobileMenuOpen: boolean;
};

export const Menu = styled.ul<MenuProps>`
  ${({ theme, isMobileMenuOpen }) => css`
    width: 100%;
    list-style: none;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    column-gap: 4rem;

    @media (max-width: ${theme.mediaQueries.mq906}) {
      background: ${theme.colors.primary};

      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      transition: transform 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);

      ${isMobileMenuOpen
        ? css`
            transform: translateX(0%);
          `
        : css`
            transform: translateX(-100%);
          `}
    }
  `}
`;

type MenuItemProps = {
  homeLink?: boolean;
};

export const MenuItem = styled.li<MenuItemProps>`
  ${({ theme, homeLink }) => css`
    ${homeLink &&
    css`
      flex: 1;
    `}

    @media (max-width: ${theme.mediaQueries.mq906}) {
      flex: 0;
    }
  `}
`;

const cssLink = css`
  ${({ theme }) => css`
    background: none;
    width: fit-content;
    border: none;

    display: flex;
    align-items: center;

    font-size: 2rem;
    font-weight: 700;
    line-height: 6.4rem;
    text-decoration: none;

    @media (max-width: ${theme.mediaQueries.mq906}) {
      color: ${theme.colors.white};
    }
  `}
`;

export const MenuLink = styled(Link)`
  ${cssLink}
`;

export const MenuLogoutButton = styled.button`
  ${cssLink}
`;

export const ArrowRightIcon = styled(FiArrowRight)`
  ${({ theme }) => css`
    width: 2rem;
    height: 2rem;
    margin-left: 1rem;
    stroke: ${theme.colors.text[700]};

    @media (max-width: ${theme.mediaQueries.mq906}) {
      stroke: ${theme.colors.white};
    }
  `}
`;

export const CloseMenuButton = styled.button`
  ${({ theme }) => css`
    display: none;

    background: none;
    padding: 1.6rem;
    border: none;

    position: fixed;
    left: 50%;
    bottom: 3.2rem;
    transform: translateX(-50%);

    @media (max-width: ${theme.mediaQueries.mq906}) {
      display: block;
    }
  `}
`;

export const CloseMenuIcon = styled(FiX)`
  width: 3.2rem;
  height: 3.2rem;
  stroke: ${({ theme }) => theme.colors.white};
`;

export const BurgerMenuButton = styled.button`
  display: none;

  background: none;
  border: none;

  @media (max-width: ${({ theme }) => theme.mediaQueries.mq906}) {
    display: block;
  }
`;

export const BurgerMenuIcon = styled(FiMenu)`
  width: 3.2rem;
  height: 3.2rem;
  stroke: ${({ theme }) => theme.colors.text[700]};
`;
