import style from './Main.module.scss';

function Main() {
  return (
    <div className={style.main}>
      <input type='text' placeholder='Search for food, coffe, etc..' />
      <div className='main__filterBlock'>
        <ul className={`listReset`}>
          <li>
            <button>Hot Dishes</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Main;
