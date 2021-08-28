import Cart from './components/Cart/Cart';
import Discount from './components/Discount/Discount';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Route exact path='/'>
          <Main />
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
