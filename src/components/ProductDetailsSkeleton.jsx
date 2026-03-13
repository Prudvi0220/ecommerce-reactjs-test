const ProductDetailsSkeleton = () => {
  return (
    <div className="product-details-container">
      <div className="image-container">
        <div className="details-skeleton details-skeleton-image"></div>
      </div>

      <div className="info-container">
        <div className="details-skeleton details-skeleton-category"></div>
        <div className="details-skeleton details-skeleton-title"></div>
        <div className="details-skeleton details-skeleton-desc"></div>
        <div className="details-skeleton details-skeleton-desc"></div>
        <div className="details-skeleton details-skeleton-price"></div>
        <div className="details-skeleton details-skeleton-btn"></div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;