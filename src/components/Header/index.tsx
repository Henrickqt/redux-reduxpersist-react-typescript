import React from 'react';
import { IoMdRefresh } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';

import { toggleProduct } from '../../store/Product/Product.actions';
import { getSelectedProducts } from '../../store/Product/Product.selectors';

import { Container, Title, Button } from './styles';

function Header() {
  const dispatch = useDispatch();
  const selectedProducts = useSelector(getSelectedProducts);

  function changeTheme() {
    document.getElementById('root')?.classList.toggle('dark-mode');
    document.getElementById('root')?.classList.toggle('light-mode');
  }

  function handleResetList() {
    selectedProducts.map((product) => {
      return dispatch(toggleProduct(product.id));
    });
  }

  return (
    <Container>
      <Title onClick={changeTheme}>
        <span>#my</span>
        Shopnlist
      </Title>
      <Button onClick={handleResetList}>
        <span>
          <IoMdRefresh />
        </span>
        Resetar lista
      </Button>
    </Container>
  );
}

export default Header;
