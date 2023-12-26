import { memo } from 'react';
import { markAllAsUnpacked } from '../lib/reducer';

const MarkAllAsUnpacked = ({ dispatch }) => (
  <div className="mb-16">
    <button className="w-full" onClick={() => dispatch(markAllAsUnpacked)}>
      🏠 Mark All As Unpacked
    </button>
  </div>
);

export default memo(MarkAllAsUnpacked);
