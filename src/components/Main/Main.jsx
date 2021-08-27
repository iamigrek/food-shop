import Card from './Card/Card';
import Filter from './Filter/Filter';
import style from './Main.module.scss';

function Main() {
  return (
    <div className={style.main}>
      <form className={style.main__form} action='#'>
        <input
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
        <h2 className={style.main__productsTitle}>Choose Dishes</h2>
        <Card />
      </div>
    </div>
  );
}

export default Main;
