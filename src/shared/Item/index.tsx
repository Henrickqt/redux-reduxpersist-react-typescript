import React from 'react';
import { useDispatch } from 'react-redux';

import { toggleProduct } from '../../store/Product/Product.actions';

import { Container, Indicator, Label } from './styles';

interface ItemProps {
  id: string;
  name: string;
  checked: boolean;
}

const Item: React.FC<ItemProps> = (props) => {
  const dispatch = useDispatch();

  function handleToggle(id: string) {
    dispatch(toggleProduct(id));
  }

  return (
    <Container onClick={() => handleToggle(props.id)}>
      <Indicator checked={props.checked} />
      <Label>
        {props.name.length > 16 
          ? props.name.substring(0, 14).concat('...') 
          : props.name
        }
      </Label>
    </Container>
  );
}

export default Item;
