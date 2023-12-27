import { useContext } from 'react';
import { ActionContext, ItemsContext } from './context';

export const useItems = () => {
  const items = useContext(ItemsContext);
  return items;
};

export const useActions = () => {
  const dispatch = useContext(ActionContext);
  return dispatch;
};
