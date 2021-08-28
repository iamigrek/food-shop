import style from './Card.module.scss';
import React from 'react';

function Card({ productSearch, title, price, imgUrl, id }) {
  const [cartAddSrate, setCartAddSrate] = React.useState(false);

  const addToCart = () => {
    setCartAddSrate(!cartAddSrate);
    console.log(cartAddSrate);
  };

  return (
    <li key={id} className={style.card__item}>
      <img className={style.card__img} src={imgUrl} alt='product' />
      <h3 className={style.card__title}>{title}</h3>
      <div className={style.card__price}>
        <span className={style.card__priceCurrency}>$</span>
        <span className={style.card__priceValue}>{price}</span>
      </div>

      <button
        onClick={() => addToCart()}
        className={cartAddSrate ? 'btn_addedToCart' : 'btn_addToCart'}
      >
        {cartAddSrate ? 'Added to cart' : 'Add to cart'}
      </button>
    </li>
  );
}

export default Card;
