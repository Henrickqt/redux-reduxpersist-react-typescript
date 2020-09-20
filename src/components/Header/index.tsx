import React from 'react';

import { Container, Title, Button } from './styles';

function Header() {
  return (
    <Container>
      <Title>
        <span>#my</span>
        Shopping-list
      </Title>
      <Button>
        Concluir lista
      </Button>
    </Container>
  );
}

export default Header;
