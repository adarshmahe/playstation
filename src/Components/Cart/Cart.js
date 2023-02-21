import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart, clearCart } from "../../Features/CartSlice";
import "./Cart.css";

export default function Cart({ cartItems }) {
  const cartCountTotal = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  const cartPriceTotal = cartItems.reduce(
    (acc, item) => acc + item.Price * item.quantity,
    0
  );

  const dispatch = useDispatch();

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
    window.location.reload();
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    window.location.reload();
  };

  return (
    <div className='cart-items'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h2 className='cart-items-header my-5 text-start'>Your Cart</h2>

            {cartItems.length === 0 && (
              <>
                <div className='cart-items-empty fs-1'>
                  <i className='bi bi-cart-x'></i>
                  <p>Your cart is empty.</p>
                </div>
                <Link
                  to='/shop'
                  className='btn btn-link mb-5 fw-bold text-decoration-none'
                >
                  Continue Shopping
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col'>
            <ul className='list-group list-group-flush cart-item-list'>
              {cartItems.map((item) => (
                <li
                  className='list-group-item py-3 align-items-center'
                  key={item.ID}
                >
                  <div className='d-flex'>
                    <img src={item.image} alt={item.Title} />
                    <div className='text-start'>
                      <p className='mb-1 fs-5 fw-semibold'>{item.Title}</p>
                      <p className='mb-1'>Status: {item.Status}</p>
                      <p>₹ {item.Price ? item.Price : "2000"}</p>
                    </div>
                  </div>
                  <div>
                    <button
                      className='btn btn-outline-danger'
                      onClick={() => handleRemoveFromCart(item)}
                    >
                      <i class='bi bi-trash3'></i>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <div className='d-flex justify-content-between py-3 border-top'>
              <Link to='/shop' className='btn btn-primary'>
                Continue Shopping
              </Link>
              <button className='btn btn-danger' onClick={() => handleClearCart()}>
                Clear Cart
              </button>
            </div>
          </div>
        </div>

        <div className='row'>
          {cartItems.length !== 0 && (
            <div className='col'>
              <div className='cart-total-wrapper text-start mb-5 p-3'>
                {/* <div className='d-flex justify-content-between'>
                  <p>Subtotal </p>
                  <p>₹ {cartPriceTotal}</p>
                </div> */}
                {/* <div className='d-flex justify-content-between'>
                  <p>Discount</p>
                  <p>₹ </p>
                </div> */}
                <div className='d-flex justify-content-between'>
                  <p className='fw-bold'>
                    Total ({{ cartCountTotal } === 1 ? "item" : "items"}){" "}
                    {cartCountTotal}{" "}
                  </p>
                  <p className='fw-bold'>₹ {cartPriceTotal}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
