import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../actions/cart';
import { getCartProducts } from '../utils/getCartProducts';

export default function NavCart({ cartItems, count, products }) {
  const cartProducts = getCartProducts(cartItems, products);
  const dispatch = useDispatch();
  let totalPrice = 0;

  function handleRemove(id) {
    dispatch(removeFromCart(id));
  }
  return (
    <div id='nav-cart'>
      <div className='card'>
        <div className='card-body'>
          {count === 0 && <p className='text-center mx-0'>Cart is empty</p>}
          {count > 0 &&
            cartProducts.map((item) => {
              totalPrice += item.count * item.price;
              return (
                <div className='cart-product-item' key={item.id}>
                  <div className='d-flex justify-content-between align-items-center'>
                    <strong>{item.title}</strong>
                    <div className='price'>${item.price}</div>
                    <div className='nav-cart-img'>
                      <img
                        src={item.image}
                        alt={item.title}
                        width='60px'
                        height='60px'
                      />
                    </div>
                  </div>
                  <div className='d-flex justify-content-between alig-items-center mt-1'>
                    <div className='count'>Quantity: x{item.count}</div>
                    <div className='total-amount'>
                      <strong className='final-price'>
                        Total: $ {(item.count * item.price).toFixed(2)}
                      </strong>
                    </div>
                    <button
                      type='button'
                      className='btn btn-outline-danger'
                      onClick={() => handleRemove(item.id)}
                    >
                      remove
                    </button>
                  </div>
                </div>
              );
            })}
          <div className='cart-final-total'>
            <div className='d-flex align-items-center justify-content-between mt-2'>
              <div className='cart-total-title'>Cart total</div>
              <div className='cart-total-price'>{totalPrice.toFixed(2)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
