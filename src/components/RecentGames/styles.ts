import styled, { css } from "styled-components";

import { EmptyGames } from "../../shared/assets";

export const EmptyContainer = styled.section`
  margin-top: 2.6rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 2.4rem;
  text-align: center;
`;

export const EmptyImage = styled(EmptyGames)`
  width: auto;
  height: 20rem;
  margin-bottom: 2.4rem;
`;

export const Container = styled.ul`
  margin-top: 2.6rem;
`;

type GameProps = {
  gameColor?: string;
};

export const Game = styled.li<GameProps>`
  ${({ theme, gameColor }) => css`
    position: relative;
    padding-left: 2.2rem;

    & + & {
      margin-top: 3rem;
    }

    &::before {
      content: "";
      position: absolute;
      left: 0;

      background: ${gameColor || theme.colors.primary};
      width: 0.6rem;
      height: 100%;
      border-radius: 10rem;
    }
  `}
`;

export const GameNumbers = styled.h3`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text[600]};
`;

export const GameInfo = styled.p`
  margin: 1.6rem 0 1.2rem;
  font-size: 1.7rem;
  font-style: normal;
  color: ${({ theme }) => theme.colors.text[600]};
`;

type TypeProps = {
  gameColor?: string;
};

export const GameType = styled.strong<TypeProps>`
  ${({ theme, gameColor }) => css`
    font-size: 2rem;
    color: ${gameColor || theme.colors.primary};
  `}
`;
