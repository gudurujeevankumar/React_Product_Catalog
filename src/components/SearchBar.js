import React from 'react';

const SearchBar = ({ search, setSearch }) => (
  <form className="search-form" onSubmit={e => e.preventDefault()}>
    <input
      type="text"
      placeholder="Search..."
      value={search}
      onChange={e => setSearch(e.target.value)}
      className="search-input"
    />
    <button
      type="submit"
      className="search-btn"
      aria-label="Search"
    >
      <svg width="22" height="22" fill="#131921" viewBox="0 0 24 24"><path d="M10.5 3a7.5 7.5 0 015.93 12.19l4.69 4.7a1 1 0 01-1.42 1.41l-4.7-4.69A7.5 7.5 0 1110.5 3zm0 2a5.5 5.5 0 100 11 5.5 5.5 0 000-11z"></path></svg>
    </button>
  </form>
);

export default SearchBar;
