import styled, { css } from "styled-components";

export const Container = styled.footer`
  ${({ theme }) => css`
    height: 8.2rem;
    padding: 3rem 0.8rem;
    border-top: 0.2rem solid ${theme.colors.border.dark};

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: ${theme.mediaQueries.mq906}) {
      margin-top: auto;
    }
  `}
`;

export const Copyright = styled.p`
  font-size: 1.6rem;
  font-style: normal;
`;
