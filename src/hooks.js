import { useContext } from 'react';
import { ActionContext, ItemCountContext, ItemsContext } from './context';

export const useItems = () => {
  const items = useContext(ItemsContext);
  return items;
};

export const useActions = () => {
  const dispatch = useContext(ActionContext);
  return dispatch;
};

export const useItemCount = () => {
  const itemCount = useContext(ItemCountContext);
  return itemCount;
};
