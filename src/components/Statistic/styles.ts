import styled from 'styled-components';

export const Container = styled.div`
  height: 488px;
  border-radius: 8px;
  padding: 20px;
  background-color: var(--color-box-background);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Value = styled.p`
  margin-top: 16px;
  color: var(--color-title);
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 3px;
`;
