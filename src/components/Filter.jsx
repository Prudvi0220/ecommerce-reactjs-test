import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";

function Filter() {

  const { category, setCategory, size, setSize } = useContext(FilterContext);

  return (
    <div className="filters">

      {/* Category Filter */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="mens-shirts">Men</option>
        <option value="womens-dresses">Women</option>
        <option value="mens-shoes">Shoes</option>
        <option value="womens-shoes">Women Shoes</option>
      </select>

      {/* Size Filter */}
      <select
        value={size}
        onChange={(e) => setSize(e.target.value)}
      >
        <option value="">All Sizes</option>
        <option value="S">Small</option>
        <option value="M">Medium</option>
        <option value="L">Large</option>
        <option value="XL">XL</option>
      </select>

    </div>
  );
}

export default Filter;