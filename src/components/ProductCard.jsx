/* eslint-disable react/prop-types */
import RatingWidget from './RatingWidget';

function ProductCard({ product, onRatingSubmit }) {
  return (
    <div className="product-card">
      <img 
        src={product.image} 
        alt={product.name} 
        className="product-image"
      />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="rating-info">
          <p>Average Rating: {product.avgRating.toFixed(1)} ★</p>
          <RatingWidget 
            productId={product.id} 
            onRatingSubmit={onRatingSubmit}
          />
        </div>
      </div>
    </div>
  );
}


export default ProductCard;