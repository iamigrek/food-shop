import Cart from './components/Cart/Cart';
import Discount from './components/Discount/Discount';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

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

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Route exact path='/'>
          <Main productData={productData} />
        </Route>
        <Route path='/discount'>
          <Discount />
        </Route>
        <Cart />
      </div>
    </BrowserRouter>
  );
}

export default App;
