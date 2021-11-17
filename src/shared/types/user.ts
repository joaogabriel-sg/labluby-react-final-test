import { Bet } from ".";

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  bets: Bet[];
};
