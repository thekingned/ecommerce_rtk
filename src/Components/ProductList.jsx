import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart } from './CartSlice'; // Assuming CartSlice is in the same directory
import './ProductList.css'; 





const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartitems);


  const products = [
    { id: 1, name: 'Product A', price: 60 },
    { id: 2, name: 'Product B', price: 75 },
    { id: 3, name: 'Product C', price: 30 },
  ];

  const handAddToCart = (product) => {
    dispatch(addItemToCart(product));
  };

  return (
    <div className="product-list">
      <h2 className="product-list-title">Products</h2>
      <ul className="product-list-items">
        {products.map(product => {
          const isAlreadyInCart = cartItems.some(item => item.id === product.id);
          
          return (
          <li key={product.id} className="product-list-item">
            <span>{product.name}  -  ${product.price}</span>
            <button 
            className={`add-to-cart-btn ${cartItems.some(item => item.id === product.id) ? 'disabled' : ''}`}
            onClick={() => handAddToCart(product)}
            disabled={cartItems.some(item => item.id === product.id)}
            >
              {cartItems.some(item => item.id === product.id) ? 'Added to Cart' : 'Add to Cart'}
            </button>
          </li>
        );
        }
      )}  
      </ul>
    </div>
  );
};

export default ProductList;
