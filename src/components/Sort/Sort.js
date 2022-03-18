import React from 'react';

export default function Sorting({ value, label, sortHandle }) {
  return (
    <div>
      <label>
        {label}
        <input type="radio" checked={value} onChange={sortHandle} />
      </label>
    </div>
  );
}
