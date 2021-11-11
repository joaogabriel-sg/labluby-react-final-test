import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const Content = styled.main`
  width: 100%;
  min-height: calc(100vh - 8.2rem);
  padding: 0 0.8rem;

  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: ${({ theme }) => theme.mediaQueries.mq906}) {
    padding: 1.6rem 0.8rem 3rem;
    min-height: auto;

    display: flex;
    flex-direction: column;
    gap: 4.2rem;
  }
`;

export const TextSide = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  padding-right: min(16rem, 8vw);

  @media (max-width: ${({ theme }) => theme.mediaQueries.mq906}) {
    padding: 0;
    align-items: flex-start;
    justify-content: center;
  }
`;

export const Title = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopTitle = styled.span`
  width: 100%;
  max-width: 24.4rem;

  font-size: 6.4rem;
  font-weight: 700;
  line-height: 7rem;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.mediaQueries.mq906}) {
    max-width: 36rem;

    font-size: 4.2rem;
    line-height: 5.8rem;
    text-align: center;
  }
`;

export const MidTitle = styled.span`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    width: 100%;
    max-width: 14.4rem;
    height: 4rem;

    border-radius: 10rem;
    margin: 3rem 0;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 2.2rem;
    text-align: center;
    color: ${theme.colors.white};

    @media (max-width: ${theme.mediaQueries.mq906}) {
      margin: 1.6rem 0;
      font-size: 2rem;
    }
  `}
`;

export const BottomTitle = styled.span`
  font-size: 8.4rem;
  text-align: center;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.mediaQueries.mq906}) {
    font-size: 4.8rem;
  }
`;

export const FormSide = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-left: min(16rem, 8vw);

  @media (max-width: ${({ theme }) => theme.mediaQueries.mq906}) {
    padding: 0;
  }
`;

export const FormContainer = styled.div`
  align-self: flex-start;

  @media (max-width: ${({ theme }) => theme.mediaQueries.mq906}) {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
