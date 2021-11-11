type TypeOfGame = {
  type: string;
  color: string;
};

export const DUMMY_TYPE_OF_GAMES: TypeOfGame[] = [
  { type: "Lotofácil", color: "#7f3992" },
  { type: "Mega-Sena", color: "#01ac66" },
  { type: "Quina", color: "#f79c31" },
];

type Game = {
  id: string;
  type: string;
  color: string;
  date: Date;
  price: number;
  numbers: string[];
};

export const DUMMY_GAMES: Game[] = [
  {
    id: "iopashjfiopahjiopfjaopf",
    type: "Lotofácil",
    color: "#7f3992",
    date: new Date(2020, 10, 30),
    price: 2.5,
    numbers: [
      "01",
      "02",
      "04",
      "05",
      "06",
      "07",
      "09",
      "15",
      "17",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
    ],
  },
  {
    id: "aopjafopfjopajfopjafopj",
    type: "Mega-Sena",
    color: "#01ac66",
    date: new Date(2020, 10, 30),
    price: 4.5,
    numbers: [
      "01",
      "02",
      "04",
      "05",
      "06",
      "07",
      "09",
      "15",
      "17",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
    ],
  },
  {
    id: "afjq9ofjopqjqmqomqdrq1",
    type: "Quina",
    color: "#f79c31",
    date: new Date(2020, 10, 30),
    price: 2,
    numbers: [
      "01",
      "02",
      "04",
      "05",
      "06",
      "07",
      "09",
      "15",
      "17",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
    ],
  },
];
