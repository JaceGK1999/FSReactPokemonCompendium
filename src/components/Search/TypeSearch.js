import React from 'react';

export function TypeSearch({ types, selectedType, setSelectedType }) {
  return (
    <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
      {types.map((type) => (
        <option key={type}>{type}</option>
      ))}
    </select>
  );
}
