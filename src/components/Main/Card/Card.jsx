import style from './Card.module.scss';

function Card() {
  const productData = [
    {
      id: 1,
      title: 'Spicy seasoned seafood noodles',
      price: 2.29,
      imgUrl: './images/products/1.png',
    },
    {
      id: 2,
      title: 'Salted Pasta with mushroom sauce',
      price: 2.51,
      imgUrl: './images/products/2.png',
    },
    {
      id: 3,
      title: 'Beef dumpling in hot and sour soup',
      price: 2.99,
      imgUrl: './images/products/3.png',
    },
    {
      id: 4,
      title: 'Healthy noodle with spinach leaf',
      price: 3.61,
      imgUrl: './images/products/4.png',
    },
    {
      id: 5,
      title: 'Spicy instant noodle with special omelette',
      price: 3.99,
      imgUrl: './images/products/5.png',
    },
    {
      id: 6,
      title: 'Spicy seasoned seafood noodles',
      price: 2.29,
      imgUrl: './images/products/1.png',
    },
    {
      id: 6,
      title: 'Salted Pasta with mushroom sauce',
      price: 2.51,
      imgUrl: './images/products/2.png',
    },
    {
      id: 7,
      title: 'Beef dumpling in hot and sour soup',
      price: 2.99,
      imgUrl: './images/products/3.png',
    },
  ];

  return (
    <ul className={`${style.card} listReset grid`}>
      {productData.map(item => (
        <li key={item.id} className={style.card__item}>
          <img className={style.card__img} src={item.imgUrl} alt='product' />
          <h3 className={style.card__title}>{item.title}</h3>
          <div className={style.card__price}>
            <span className={style.card__priceCurrency}>$</span>
            <span className={style.card__priceValue}>{item.price}</span>
          </div>
          <button className={`${style.card__btn} btn btn_addToCart`}>
            Add to cart
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Card;
