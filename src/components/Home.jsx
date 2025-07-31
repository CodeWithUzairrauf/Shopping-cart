import React, { useContext } from 'react';
import img1 from '../assets/tshirt.png';
import { CartContext } from './CartContext';

const Home = () => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    const item = {
      id: 1,
      name: 'T-Shirt',
      description: 'Nice quality cotton tee',
      image: img1,
      price: 1200, 
      quantity: 1 
    };
    addToCart(item);
  };

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold mb-2">T-Shirts</h1>
      <div className="bg-white p-4 rounded shadow">
        <img src={img1} alt="tshirt" className="w-32 mb-2" />
        <p>Nice quality cotton tee</p>
        <p className="font-bold text-green-600">Rs 1200</p>
        <button
          onClick={handleAddToCart}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Home;
