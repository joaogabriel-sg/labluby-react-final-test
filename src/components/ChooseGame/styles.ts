import styled, { css } from "styled-components";

export const Container = styled.section``;

export const Title = styled.h3`
  font-size: 1.7rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text[600]};
`;

export const TypeOfGames = styled.ul`
  margin-top: 2rem;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2.4rem;
`;

export const TypeOfGame = styled.li``;

type TypeOfGameButtonProps = {
  isActive: boolean;
  color?: string;
};

export const TypeOfGameButton = styled.button<TypeOfGameButtonProps>`
  ${({ theme, isActive, color }) => css`
    background: none;
    min-width: 12rem;
    height: 3.4rem;

    border: 2px solid ${color || theme.colors.primary};
    border-radius: 100px;

    font-size: 1.4rem;
    font-weight: 700;
    color: ${color || theme.colors.primary};

    transition: background 0.2s ease-in-out, color 0.2s ease-in-out;

    & + & {
      margin-left: 1.6rem;
    }

    &:hover {
      background: ${color || theme.colors.primary};
      color: ${theme.colors.white};
    }

    ${isActive &&
    css`
      background: ${color || theme.colors.primary};
      color: ${theme.colors.white};
    `}
  `}
`;
