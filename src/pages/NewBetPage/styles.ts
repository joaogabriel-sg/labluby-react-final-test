import styled from "styled-components";

export const Container = styled.main`
  // full window - header - footer
  min-height: calc(100vh - 8rem - 8.2rem);
  width: 100%;
  max-width: 104rem;
  padding: 4.8rem 0.8rem 4.15rem;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 31.7rem;
  column-gap: 3.6rem;

  @media (max-width: ${({ theme }) => theme.mediaQueries.mq906}) {
    display: flex;
    flex-direction: column;
  }
`;
