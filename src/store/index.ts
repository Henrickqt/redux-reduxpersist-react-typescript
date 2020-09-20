import { createStore, combineReducers,  } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import productReducer from './Product/Product.reducers';

const rootReducer = combineReducers({
  products: productReducer,
});

const persistedReducer = persistReducer({
  key: 'root',
  storage,
}, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store as any);
