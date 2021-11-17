import styled, { css } from "styled-components";

export const EmptyMessage = styled.span`
  font-size: 1.4rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Container = styled.section`
  display: flex;
  align-items: center;
  overflow-x: hidden;

  @media (max-width: ${({ theme }) => theme.mediaQueries.mq906}) {
    width: 100%;
    flex-direction: column;
    row-gap: 1.2rem;
  }
`;

export const Title = styled.span`
  ${({ theme }) => css`
    margin-right: 1.6rem;
    font-size: 1.7rem;
    color: ${theme.colors.text[600]};

    @media (max-width: ${theme.mediaQueries.mq906}) {
      margin: 0;
    }
  `}
`;

export const TypeOfGames = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 0.4rem;

  max-width: 40rem;
  overflow-x: auto;

  &::-webkit-scrollbar {
    background: transparent;
    height: 0.4rem;
    overflow: hidden;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.text[600]};
    border-radius: 0.4rem;
  }

  @media (max-width: ${({ theme }) => theme.mediaQueries.mq906}) {
    width: 100%;
    max-width: 100%;
    margin: 0;
  }
`;

type TypeOfGameButtonProps = {
  gameColor?: string;
  isActive: boolean;
};

export const TypeOfGameButton = styled.button<TypeOfGameButtonProps>`
  ${({ theme, gameColor, isActive }) => css`
    background: none;
    min-width: 12rem;
    height: 3.4rem;

    border: 2px solid ${gameColor || theme.colors.primary};
    border-radius: 100px;

    font-size: 1.4rem;
    font-weight: 700;
    color: ${gameColor || theme.colors.primary};

    transition: background 0.2s ease-in-out, color 0.2s ease-in-out;

    & + & {
      margin-left: 1.6rem;
    }

    &:hover {
      background: ${gameColor || theme.colors.primary};
      color: ${theme.colors.white};
    }

    ${isActive &&
    css`
      background: ${gameColor || theme.colors.primary};
      color: ${theme.colors.white};
    `}
  `}
`;
