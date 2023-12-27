import { createContext, useReducer } from 'react';
import { getInitialItems } from './lib/items';
import { reducer } from './lib/reducer';

export const ItemsContext = createContext({});
export const ActionContext = createContext({});

const ItemsProvider = ({ children }) => {
  const [items, dispatch] = useReducer(reducer, getInitialItems());

  return (
    <ItemsContext.Provider value={items}>
      <ActionContext.Provider value={dispatch}>
        {children}
      </ActionContext.Provider>
    </ItemsContext.Provider>
  );
};

export default ItemsProvider;
