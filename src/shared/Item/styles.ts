import styled from 'styled-components';

interface IndicatorProps {
  checked: boolean;
}

export const Container = styled.div`
  border-radius: 6px;
  margin: 8px 0;
  padding: 8px 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: var(--color-hover);
  }
`;

export const Indicator = styled.div<IndicatorProps>`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin-left: 8px;
  margin-right: 16px;
  background-color: ${(props) => props.checked 
    ? 'var(--color-primary)' 
    : 'var(--color-line)'};
`;

export const Label = styled.p`
  height: 20px;
  color: var(--color-item);
`;
