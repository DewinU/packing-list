import { memo } from 'react';
import { useItemCount } from '../hooks';

const Header = () => {
  const itemCount = useItemCount();

  return (
    <header id="page-header">
      <h1 className="text-2xl font-bold">Packing List</h1>
      <p id="number-of-items">
        {itemCount} {itemCount === 1 ? 'item' : 'items'}
      </p>
    </header>
  );
};

export default memo(Header);
