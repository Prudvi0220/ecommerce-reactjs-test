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
        <option value="beauty">Beauty</option>
        <option value="fragrances">Fragrances</option>
        <option value="furniture">Furniture</option>
        <option value="groceries">Groceries</option>
        <option value="home-decoration">Home Decoration</option>
        <option value="kitchen-accessories">Kitchen Accessories</option>
        <option value="laptops">Laptops</option>
        <option value="mens-shirts">Men's Shirts</option>
        <option value="mens-shoes">Men's Shoes</option>
        <option value="mens-watches">Men's Watches</option>
        <option value="mobile-accessories">Mobile Accessories</option>
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