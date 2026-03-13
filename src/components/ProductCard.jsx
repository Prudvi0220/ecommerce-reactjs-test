import { memo } from "react";
import { Link } from "react-router-dom";

function ProductCardComponent({ product }) {
  return (
    <div className="card">
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p className="price">₹{product.price}</p>
      <p className="description">{product.description.slice(0, 60)}...</p>
      <span className="product-category">Category: {product.category}</span>
      <span className="product-size">Size: {product.size}</span>
      <Link to={`/product/${product.id}`} className="viewbtn">
        View Details
      </Link>
    </div>
  );
}

const ProductCard = memo(ProductCardComponent);

export default ProductCard;