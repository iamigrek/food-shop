import style from './Filter.module.scss';

function Filter() {
  return (
    <ul className={`listReset ${style.filter}`}>
      <li className={`${style.filter__item}`}>
        <a
          className={`${style.filter__link} ${style.filter__link_active}`}
          href='#'
        >
          Hot Dishes
        </a>
      </li>
      <li className={`${style.filter__item}`}>
        <a className={style.filter__link} href='#'>
          Cold Dishes
        </a>
      </li>
      <li className={`${style.filter__item}`}>
        <a className={style.filter__link} href='#'>
          Soup
        </a>
      </li>
      <li className={`${style.filter__item}`}>
        <a className={style.filter__link} href='#'>
          Grill
        </a>
      </li>
      <li className={`${style.filter__item}`}>
        <a className={style.filter__link} href='#'>
          Appetizer
        </a>
      </li>
      <li className={`${style.filter__item}`}>
        <a className={style.filter__link} href='#'>
          Dessert
        </a>
      </li>
    </ul>
  );
}

export default Filter;
