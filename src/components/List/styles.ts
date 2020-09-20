import styled from 'styled-components';

export const Container = styled.div`
  height: 488px;
  border-radius: 8px;
  padding: 20px;
  background-color: var(--color-box-background);
`;

export const Array = styled.div`
  height: 446px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 6px;
    border-right: 1px dashed var(--color-background);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: var(--color-background);
  }
`;
