import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";

function SearchBar() {

  const { search, setSearch } = useContext(FilterContext);

  return (
    <input
      className="search-bar"
      placeholder="Search product by title..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;