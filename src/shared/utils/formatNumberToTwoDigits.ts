export function formatNumberToTwoDigits(number: number) {
  return `${number}`.padStart(2, "0");
}
