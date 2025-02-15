import React, { useRef, useEffect } from 'react';

export default function SearchBar({ onSearch, onReset }) {
  const inputRef = useRef(null);

  const handleChange = (e) => {
    const query = e.target.value;
    if (query.trim() === '') {
      onReset();
    } else {
      onSearch(query);
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="search-bar">
      <input
        type="text"
        ref={inputRef}
        placeholder="Name of Movie ..."
        onChange={handleChange}
      />
    </div>
  );
}