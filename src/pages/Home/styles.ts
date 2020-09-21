import styled from 'styled-components';

export const Page = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--color-wallpaper);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 800px;
  height: 600px;
  background-color: var(--color-background);
  border-radius: 8px;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, .15);
`;
