import * as S from "./styles";

type FillYourBetProps = {
  description: string;
  color: string;
  numbers: string[];
  selectedNumbers: string[];
  handleSelectNumber: (number: string) => void;
  handleDeselectNumber: (number: string) => void;
};

export function FillYourBet({
  description,
  color,
  numbers,
  selectedNumbers,
  handleSelectNumber,
  handleDeselectNumber,
}: FillYourBetProps) {
  return (
    <S.Container>
      <S.Title>Fill your bet</S.Title>
      <S.Description>{description}</S.Description>
      <S.Numbers>
        {numbers.map((number, index) => {
          const isSelected = selectedNumbers.includes(number);
          const handleClick = isSelected
            ? handleDeselectNumber.bind(null, number)
            : handleSelectNumber.bind(null, number);

          return (
            <S.Number key={index}>
              <S.NumberButton
                color={color}
                isSelected={isSelected}
                onClick={handleClick}
              >
                {number}
              </S.NumberButton>
            </S.Number>
          );
        })}
      </S.Numbers>
    </S.Container>
  );
}
