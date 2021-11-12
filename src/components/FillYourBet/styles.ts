import styled, { css } from "styled-components";

export const Container = styled.section``;

export const Title = styled.h3`
  font-size: 1.7rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text[600]};
`;

export const Description = styled.p`
  width: 100%;
  max-width: 64.8rem;
  margin-top: 0.4rem;

  font-size: 1.7rem;
  font-style: italic;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.colors.text[600]};
`;

export const Numbers = styled.ul`
  ${({ theme }) => css`
    margin-top: 2.8rem;

    display: grid;
    grid-template-columns: repeat(9, 1fr);
    gap: 1.2rem;

    @media (max-width: ${theme.mediaQueries.mq1060}) {
      grid-template-columns: repeat(7, 1fr);
    }

    @media (max-width: ${theme.mediaQueries.mq906}) {
      display: flex;
      flex-wrap: wrap;
    }
  `}
`;

export const Number = styled.li``;

type GameNumberButtonProps = {
  isSelected: boolean;
  color?: string;
};

export const NumberButton = styled.button<GameNumberButtonProps>`
  ${({ theme, isSelected, color }) => css`
    background: ${theme.colors.gray};
    width: 6.4rem;
    height: 6.4rem;

    border: none;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 2rem;
    font-weight: 700;
    color: ${theme.colors.white};

    ${isSelected &&
    css`
      background: ${color || theme.colors.primary};
      color: ${theme.colors.white};
    `}
  `}
`;
