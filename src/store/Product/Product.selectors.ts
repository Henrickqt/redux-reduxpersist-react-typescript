interface Product {
  id: string;
  type: string;
  name: string;
  checked: boolean;
  price: number;
  tags: string[];
}

interface ProductArray {
  products: [Product],
}

export const selectAllProducts = (state: ProductArray) => { 
  return state.products;
};

export const selectSelectedProducts = (state: ProductArray) => {
  return selectAllProducts(state)
    .filter(product => product.checked === true)
  ;
}

export const selectTotalPrice = (state: ProductArray) => {
  return selectSelectedProducts(state)
    .reduce((previous, current) => previous + current.price, 0)
  ;
}
