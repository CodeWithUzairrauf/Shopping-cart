import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity
  } = useContext(CartContext);

  const [paymentMethod, setPaymentMethod] = useState('');
  const [checkoutMessage, setCheckoutMessage] = useState('');

  const TAX_RATE = 0.13;

  const calculateSubtotal = (item) => item.price * item.quantity;

  const subtotal = cart.reduce(
    (total, item) => total + calculateSubtotal(item),
    0
  );

  const tax = subtotal * TAX_RATE;
  const grandTotal = subtotal + tax;

  const handleCheckout = () => {
    if (!paymentMethod) {
      alert('Please select a payment method.');
      return;
    }

    // Simulate processing
    setCheckoutMessage(`Order placed successfully with ${paymentMethod}. Total: Rs ${grandTotal.toFixed(2)}`);
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Cart Items</h2>

      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="mb-6 border-b pb-4 flex gap-6 items-center">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover" />
              <div className="flex-1">
                <p className="text-xl font-bold">{item.name}</p>
                <p className="text-gray-600">{item.description}</p>
                <p className="text-green-700 font-semibold">Price: Rs {item.price}</p>

                <div className="flex items-center mt-2">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="px-2 py-1 bg-gray-300 rounded"
                  >-</button>
                  <span className="px-3">{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="px-2 py-1 bg-gray-300 rounded"
                  >+</button>
                </div>

                <p className="mt-1 font-semibold">Subtotal: Rs {calculateSubtotal(item)}</p>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Totals */}
          <div className="mt-8 text-lg border-t pt-4">
            <p>Subtotal: <strong>Rs {subtotal.toFixed(2)}</strong></p>
            <p>Tax (13%): <strong>Rs {tax.toFixed(2)}</strong></p>
            <p className="text-xl mt-2">Grand Total: <strong>Rs {grandTotal.toFixed(2)}</strong></p>
          </div>

          {/* Payment Methods */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Select Payment Method:</h3>
            <div className="flex flex-col gap-2">
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="Cash on Delivery"
                  checked={paymentMethod === 'Cash on Delivery'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                /> Cash on Delivery
              </label>
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="Bank Transfer"
                  checked={paymentMethod === 'Bank Transfer'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                /> Bank Transfer
              </label>
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="Easypaisa"
                  checked={paymentMethod === 'Easypaisa'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                /> Easypaisa
              </label>
            </div>
          </div>

          {/* Checkout Button */}
          <div className="mt-6">
            <button
              onClick={handleCheckout}
              className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700"
            >
              Checkout
            </button>
          </div>

          {/* Confirmation Message */}
          {checkoutMessage && (
            <div className="mt-4 text-green-600 font-semibold">
              {checkoutMessage}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
