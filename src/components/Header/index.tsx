import React from 'react';
import { IoMdRefresh } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';

import { toggleProduct } from '../../store/Product/Product.actions';
import { getSelectedProducts } from '../../store/Product/Product.selectors';

import { Container, Title, Button } from './styles';

function Header() {
  const dispatch = useDispatch();

  const selectedProducts = useSelector(getSelectedProducts);

  function handleCompleteList() {
    selectedProducts.map((product) => {
      return dispatch(toggleProduct(product.id));
    });
  }

  return (
    <Container>
      <Title>
        <span>#my</span>
        Shopping-list
      </Title>
      <Button onClick={handleCompleteList}>
        <span>
          <IoMdRefresh />
        </span>
        Resetar lista
      </Button>
    </Container>
  );
}

export default Header;
