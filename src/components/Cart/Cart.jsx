import style from './Cart.module.scss';
import CartList from './CartList/CartList';

function Cart({ items }) {
  return (
    <div className={style.cart}>
      <div>
        <div className={style.cart__titles}>
          <h4>Item</h4>
          <div className={style.cart__titles_right}>
            <h4>Qty</h4>
            <h4>Price</h4>
          </div>
        </div>
        <ul className={`listReset ${style.cartList}`}>
          {items.map(item => (
            <CartList
              d={item.id}
              title={item.title}
              price={item.price}
              imgUrl={item.imgUrl}
            />
          ))}
        </ul>
      </div>

      <div className={style.cart__bottom}>
        <div className={style.cart__total}>
          <span className={style.cart__totalTitle}>Sub total</span>
          <div className={style.cart__price}>
            <span className={style.cart__priceCurrency}>$</span>
            <span className={style.cart__priceValue}>3.99</span>
          </div>
        </div>

        <button className={`btn btn__cart`}>Continue to Payment</button>
      </div>
    </div>
  );
}

export default Cart;
