import { memo, useState } from 'react';
import { filterItems } from '../lib/items';
import { toKebabCase } from '../lib/kebab-case';
import Item from './item';
import { useItems } from '../hooks';

const EmptyState = ({ id, items, filteredItems }) => (
  <p id={id} className="text-primary-400">
    (No items.)
  </p>
);

const ItemList = ({ title = 'Items' }) => {
  const items = useItems();
  const [filter, setFilter] = useState('');
  const id = toKebabCase(title);

  let filteredItems = items;

  title.includes('Unpacked')
    ? (filteredItems = filterItems(filteredItems, { packed: false }))
    : (filteredItems = filterItems(filteredItems, { packed: true }));

  const searchItems = filterItems(filteredItems, { name: filter });
  const isEmpty = !searchItems.length;

  return (
    <section id={id} className="w-full border-2 border-primary-200 p-4">
      <header className="mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <label htmlFor={`${id}-filter`} className="hidden"></label>
        <input
          id={`${id}-filter`}
          placeholder="Filter"
          className="my-2 w-full py-1"
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        />
      </header>
      <ul className="flex flex-col gap-2">
        {searchItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
      {isEmpty && (
        <EmptyState
          id={`${id}-empty-state`}
          items={filteredItems}
          filteredItems={searchItems}
        />
      )}
    </section>
  );
};

export default memo(ItemList);
