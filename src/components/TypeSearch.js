import React from 'react';

export default function TypeDropdown({ types, selectedType, setSelectedType }) {
  return (
    <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
      {types.map((type) => (
        <option key={type}>{type}</option>
      ))}
    </select>
  );
}
