interface Product {
  id: string;
  type: string;
  name: string;
  checked: boolean;
  price: number;
  tags: string[];
}

interface Products {
  products: [Product],
}

export const getProducts = (state: Products) => { 
  return state.products;
};

export const getSelectedProducts = (state: Products) => {
  return getProducts(state)
    .filter(product => product.checked === true)
  ;
}

export const getTotalPrice = (state: Products) => {
  return getSelectedProducts(state)
    .reduce((previous, current) => previous + current.price, 0)
  ;
}
