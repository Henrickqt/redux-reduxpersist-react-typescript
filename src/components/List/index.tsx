import React from 'react';
import { useSelector } from 'react-redux';

import Subject from '../../shared/Subject';
import Item from '../../shared/Item';

import { 
  getProducts, 
  getSelectedProducts 
} from '../../store/Product/Product.selectors';

import { Container, Array } from './styles';

interface ListProps {
  title: string;
  selected?: boolean;
}

const List: React.FC<ListProps> = (props) => {
  const products = useSelector(props.selected 
    ? getSelectedProducts 
    : getProducts
  );

  return (
    <Container>
      <Subject title={props.title}>
        <Array>
          {products.map((product) => 
            <Item 
              key={product.id} 
              id={product.id}
              name={product.name} 
              checked={product.checked}
            />
          )}
        </Array>
      </Subject>
    </Container>
  );
}

export default List;
