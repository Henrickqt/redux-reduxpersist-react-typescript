import React from 'react';

import Subject from '../../shared/Subject';
import Item from '../../shared/Item';

import products from '../../mocks/products.json';

import { Container, Array } from './styles';

interface ListProps {
  title: string;
}

const List: React.FC<ListProps> = (props) => {
  const myProducts = products.products;

  return (
    <Container>
      <Subject title={props.title}>
        <Array>
          {myProducts.map((product) => {
            return (
              <Item 
                key={product.id} 
                name={product.name} 
              />
            );
          })}
        </Array>
      </Subject>
    </Container>
  );
}

export default List;
