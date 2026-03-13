import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductDetailsSkeleton from "../components/ProductDetailsSkeleton";
import { getProductById } from "../services/api";


function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);

    getProductById(id)
      .then((res) => {
        if (!isMounted) return;
        setProduct(res.data);
      })
      .catch(() => {
        if (!isMounted) return;
        setError("Failed to load product. Please try again.");
      })
      .finally(() => {
        if (!isMounted) return;
        setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (loading) return <ProductDetailsSkeleton />;

  if (error) {
    return (
      <div className="product-details-container">
        <div className="info-container">
          <h1>{error}</h1>
          <Link to="/" className="backbtn">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  if (!product) {
    return null;
  }

  return (
      <div className="product-details-container">
      <div className="image-container">
        <img
          src={
            product.thumbnail ||
            (Array.isArray(product.images) ? product.images[0] : product.images)
          }
          alt={product.title}
        />
      </div>

      <div className="info-container">
        <h2 className="category">{product.category}</h2>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <h2 className="price">₹{product.price}</h2>

        <Link to="/" className="backbtn">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default ProductDetails;