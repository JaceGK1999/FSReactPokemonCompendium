import React from 'react';

export default function Sorting({ value, setSort, label }) {
  return (
    <div>
      <label>
        {label}
        <input type="radio" checked={value} onChange={(e) => setSort(e.target.value)} />
      </label>
    </div>
  );
}
