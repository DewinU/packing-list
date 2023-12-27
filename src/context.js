import { createContext, useReducer } from 'react';
import { getInitialItems } from './lib/items';
import { reducer } from './lib/reducer';

export const ItemsContext = createContext({});

const ItemsProvider = ({ children }) => {
  const [items, dispatch] = useReducer(reducer, getInitialItems());

  return (
    <ItemsContext.Provider value={{ items, dispatch }}>
      {children}
    </ItemsContext.Provider>
  );
};

export default ItemsProvider;
