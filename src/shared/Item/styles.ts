import styled from 'styled-components';

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

export const Indicator = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin-left: 8px;
  margin-right: 16px;
  background-color: var(--color-primary);
`;

export const Label = styled.p`
  height: 20px;
  color: var(--color-item);
`;
