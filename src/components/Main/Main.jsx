import Card from './Card/Card';
import Filter from './Filter/Filter';
import style from './Main.module.scss';
import React from 'react';

function Main({ productData, onAddToCart, addToCart, onCart }) {
  const [searchItem, setSearchItem] = React.useState();

  const productSearch = event => {
    setSearchItem(event.target.value);
  };
  return (
    <div className={style.main}>
      <form className={style.main__form} action='#'>
        <input
          onChange={productSearch}
          className={style.main__input}
          type='text'
          placeholder='Search for food, coffe, etc..'
        />
        <img
          className={style.main__inputImg}
          src='./images/search.svg'
          alt='search'
        />
      </form>

      <Filter />

      <div className={style.main__products}>
        <h2 className={style.main__productsTitle}>
          {searchItem ? `Search by request: "${searchItem}"` : `Choose Dishes`}
        </h2>
        <ul className={`listReset grid`}>
          {productData.map(item => (
            <Card
              productSearch={productSearch}
              id={item.id}
              title={item.title}
              price={item.price}
              imgUrl={item.imgUrl}
              onCart={obj => {
                onAddToCart(obj);
              }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Main;
