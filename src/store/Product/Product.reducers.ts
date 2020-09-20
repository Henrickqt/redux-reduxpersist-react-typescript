import products from '../../mocks/products.json';

interface Action {
  type: string, 
  payload: string,
}

export default function (state = products.products, action: Action) {
  switch (action.type) {
    case 'TOGGLE_PRODUCT':
      return state.map(product => {
        if (product.id === action.payload) {
          product.checked = !product.checked;
        }
        return product;
      });
    default:
      return state;
  }
}
