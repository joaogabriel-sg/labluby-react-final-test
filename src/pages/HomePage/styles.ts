import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { FiArrowRight } from "react-icons/fi";

export const Container = styled.main`
  // full window - header - footer
  min-height: calc(100vh - 8rem - 8.2rem);
  width: 100%;
  max-width: 104rem;
  padding: 4.8rem 0.8rem 4.15rem;
  margin: 0 auto;
`;

export const Top = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.background};
    padding: 1.6rem 0 1.6rem;

    display: flex;
    align-items: center;
    column-gap: 4.8rem;

    position: sticky;
    top: 0;
    z-index: 10;

    @media (max-width: ${theme.mediaQueries.mq906}) {
      flex-direction: column;
      row-gap: 3rem;
      column-gap: 0;
    }
  `}
`;

export const Subtitle = styled.h2`
  flex-shrink: 0;

  font-size: 2.4rem;
  font-weight: 700;
  text-transform: uppercase;
`;

export const NewBetLink = styled(Link)`
  ${({ theme }) => css`
    flex-shrink: 0;
    margin-left: auto;
    border: none;

    display: flex;
    align-items: center;

    font-weight: 700;
    font-size: 2.4rem;
    color: ${theme.colors.primary};

    @media (max-width: ${theme.mediaQueries.mq906}) {
      position: fixed;
      bottom: 1.2rem;
      right: 1.2rem;
      z-index: 20;

      background: ${theme.colors.primary};
      padding: 0.4rem 1.2rem;
      border-radius: 10rem;

      font-size: 2rem;
      color: ${theme.colors.white};
    }
  `}
`;

export const ArrowRightIcon = styled(FiArrowRight)`
  ${({ theme }) => css`
    width: 2.4rem;
    height: 2.4rem;
    margin-left: 1.6rem;
    stroke: ${theme.colors.primary};

    @media (max-width: ${theme.mediaQueries.mq906}) {
      margin-left: 0.8rem;
      stroke: ${theme.colors.white};
    }
  `}
`;
