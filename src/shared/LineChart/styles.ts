import styled from 'styled-components';

interface ChartProps {
  color: string;
  percentage: number;
}

export const Container = styled.div`
  margin-top: 16px;
  margin-bottom: 24px;
`;

export const Title = styled.h3`
  color: var(--color-item);
  font-size: 14px;
  font-weight: 400;
`;

export const Chart = styled.div<ChartProps>`
  width: ${(props) => props.percentage}%;
  height: 8px;
  border-radius: 4px;
  margin-top: 6px;
  background-color: ${(props) => props.color};
  transition: 0.5s ease;
`;
