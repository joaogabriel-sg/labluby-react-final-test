import styled, { css } from "styled-components";
import { FiTrash2 } from "react-icons/fi";

import { EmptyGames } from "../../shared/assets";

export const EmptyContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    font-size: 1.4rem;
    font-weight: 700;
    color: ${theme.colors.primary};

    @media (max-width: ${theme.mediaQueries.mq906}) {
      flex-direction: column;
      font-size: 2rem;
    }
  `}
`;

export const EmptyImage = styled(EmptyGames)`
  width: auto;
  height: 5rem;
  margin-right: 0.8rem;

  @media (max-width: ${({ theme }) => theme.mediaQueries.mq906}) {
    height: 10rem;
    margin: 0 0 2.4rem;
  }
`;

export const Container = styled.ul`
  ${({ theme }) => css`
    list-style: none;
    max-height: 30.4rem;
    padding-right: 3.8rem;
    overflow-y: auto;

    &::-webkit-scrollbar {
      background: transparent;
      width: 0.4rem;
      overflow: hidden;
    }

    &::-webkit-scrollbar-thumb {
      background: ${theme.colors.text[600]};
      border-radius: 0.4rem;
    }

    @media (max-width: ${theme.mediaQueries.mq906}) {
      max-height: min(40rem, 45vh);
    }
  `}
`;

export const Game = styled.li`
  display: flex;
  align-items: center;

  & + & {
    margin-top: 3.2rem;
  }
`;

export const DeleteGameButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const TrashIcon = styled(FiTrash2)`
  width: 2.4rem;
  height: 2.4rem;
  stroke: ${({ theme }) => theme.colors.text[600]};
`;

export const Numbers = styled.h3`
  margin-bottom: 0.6rem;

  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2rem;
  color: ${({ theme }) => theme.colors.text[600]};
`;

export const Info = styled.p``;

export const Type = styled.strong`
  font-size: 1.6rem;
  font-weight: 700;
`;

export const Price = styled.span`
  margin-left: 1.4rem;

  font-size: 1.6rem;
  font-style: normal;
  color: ${({ theme }) => theme.colors.text[600]};
`;

type DataProps = {
  color?: string;
};

export const Data = styled.div<DataProps>`
  ${({ theme, color }) => css`
    padding: 0.8rem 0 0.8rem 1.2rem;
    border-left: 0.4rem solid ${color || theme.colors.primary};
    border-radius: 0.4rem 0 0 0.4rem;
    margin-left: 1.2rem;

    ${Type} {
      color: ${color || theme.colors.primary};
    }
  `}
`;
