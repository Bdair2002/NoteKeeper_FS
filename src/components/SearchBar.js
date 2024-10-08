import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="searchBar">
      <span className="search-icon material-symbols-outlined">search</span>
      <input
        className="searchBar__input"
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearch}
      />
      <button
        onClick={() => {
          onSearch(searchTerm);
        }}
        className="btn-search"
      >
        Search
      </button>
      <button
        onClick={() => {
          setSearchTerm("");
          onSearch("");
        }}
        className="btn-clear"
      >
        Clear
      </button>
    </div>
  );
};

export default SearchBar;
