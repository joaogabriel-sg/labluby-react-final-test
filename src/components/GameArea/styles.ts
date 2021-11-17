import styled from "styled-components";

export const Container = styled.section`
  section + section {
    margin-top: 3.6rem;
  }
`;

export const Subtitle = styled.h2`
  margin-bottom: 3.2rem;
  flex-shrink: 0;

  font-size: 2.4rem;
  font-weight: 700;
  text-transform: uppercase;
`;

export const CurrentGame = styled.span`
  font-size: inherit;
  font-weight: 400;
`;
