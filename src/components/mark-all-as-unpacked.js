import { memo, useContext } from 'react';
import { markAllAsUnpacked } from '../lib/reducer';
import { ItemsContext } from '../context';

const MarkAllAsUnpacked = () => {
  const { dispatch } = useContext(ItemsContext);

  return (
    <div className="mb-16">
      <button className="w-full" onClick={() => dispatch(markAllAsUnpacked)}>
        🏠 Mark All As Unpacked
      </button>
    </div>
  );
};

export default memo(MarkAllAsUnpacked);
