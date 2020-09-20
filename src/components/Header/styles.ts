import styled from 'styled-components';

export const Container = styled.header`
  height: 72px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 0 20px;
  background-color: var(--color-box-background);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  color: var(--color-title);
  font-size: 24px;
  font-weight: 700;

  span {
    padding-right: 8px;
    font-size: 16px;
  }
`;

export const Button = styled.button`
  width: 240px;
  height: 40px;
  border: none;
  border-radius: 8px;
  background-color: var(--color-primary);
  color: var(--color-title);
  font-size: 14px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--color-primary-dark);
  }
`;
