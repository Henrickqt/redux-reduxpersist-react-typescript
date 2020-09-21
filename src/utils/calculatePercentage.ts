export default function calculatePercentage(dividend: number, divider: number) {
  return divider === 0 ? 0 : (dividend*100)/divider;
}
