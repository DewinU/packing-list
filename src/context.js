import { createContext, useReducer } from 'react';
import { getInitialItems } from './lib/items';
import { reducer } from './lib/reducer';

export const ItemsContext = createContext({});
export const ActionContext = createContext({});
export const ItemCountContext = createContext({});

const ItemsProvider = ({ children }) => {
  const [items, dispatch] = useReducer(reducer, getInitialItems());

  return (
    <ItemsContext.Provider value={items}>
      <ActionContext.Provider value={dispatch}>
        <ItemCountContext.Provider value={items.length}>
          {children}
        </ItemCountContext.Provider>
      </ActionContext.Provider>
    </ItemsContext.Provider>
  );
};

export default ItemsProvider;
