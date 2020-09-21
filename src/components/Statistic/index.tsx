import React from 'react';
import { useSelector } from 'react-redux';

import Subject from '../../shared/Subject';
import LineChart from '../../shared/LineChart';

import { 
  getSelectedProducts, 
  getTotalPrice 
} from '../../store/Product/Product.selectors';

import calculatePercentage from '../../utils/calculatePercentage';

import { Container, Value } from './styles';

function Statistic() {
  const selectedProducts = useSelector(getSelectedProducts);
  const totalPrice = useSelector(getTotalPrice);

  function handlePercentage(category: string) {
    const totalProducts = selectedProducts.length;
    const totalCategory = selectedProducts
      .filter((product) => product.tags.includes(category)).length
    ;
    
    return calculatePercentage(totalCategory, totalProducts);
  }

  return (
    <Container>
      <Subject title="Estatísticas">
        <LineChart 
          title="Saudável" 
          color="var(--color-primary-lighter)" 
          percentage={handlePercentage('healthy')} 
        />
        <LineChart 
          title="Não-saudável" 
          color="var(--color-primary-light)" 
          percentage={handlePercentage('junk')} 
        />
        <LineChart 
          title="Cuidados médicos" 
          color="var(--color-primary)" 
          percentage={handlePercentage('health')} 
        />
        <LineChart 
          title="Higiene" 
          color="var(--color-primary-dark)" 
          percentage={handlePercentage('hygiene')} 
        />
        <LineChart 
          title="Limpeza" 
          color="var(--color-primary-darker)" 
          percentage={handlePercentage('cleaning')} 
        />
        <LineChart 
          title="Outros" 
          color="var(--color-primary-darkest)" 
          percentage={handlePercentage('others')} 
        />
      </Subject>
      
      <Subject title="Valor total">
        <Value>
          {totalPrice.toLocaleString('pt-br', {
            minimumFractionDigits: 2,
            style: 'currency',
            currency: 'BRL'
          })}
        </Value>
      </Subject>
    </Container>
  );
}

export default Statistic;
