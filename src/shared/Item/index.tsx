import React from 'react';

import { Container, Indicator, Label } from './styles';

interface ItemProps {
  name: string;
}

const Item: React.FC<ItemProps> = (props) => {
  return (
    <Container>
      <Indicator />
      <Label>
        {props.name}
      </Label>
    </Container>
  );
}

export default Item;
