import styled from 'styled-components';

export const Container = styled.div`
  height: 488px;
  border-radius: 8px;
  padding: 20px;
  background-color: var(--color-box-background);
`;

export const Array = styled.div`
  height: 444px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 8px;
    border-right: 1px dashed var(--color-line);
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: var(--color-background);
  }
`;
