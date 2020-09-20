import React from 'react';

import Subject from '../../shared/Subject';
import Item from '../../shared/Item';

import { Container, Array } from './styles';

interface ListProps {
  title: string;
}

const List: React.FC<ListProps> = (props) => {
  return (
    <Container>
      <Subject title={props.title}>
        <Array>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </Array>
      </Subject>
    </Container>
  );
}

export default List;
