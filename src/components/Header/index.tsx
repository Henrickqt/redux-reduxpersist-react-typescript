import React from 'react';

import { Container, Title, Button } from './styles';

function Header() {
  return (
    <Container>
      <Title>
        <span>#my</span>
        SHOPPING-LIST
      </Title>
      <Button>
        CONCLUIR LISTA
      </Button>
    </Container>
  );
}

export default Header;
