import React, { useState } from 'react';
import Header from './components/Header';
import './scss/app.scss';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import NotFound from './pages/NotFound';
import Basket from './pages/Basket';
import PopupPizza from './pages/PopupPizza';

export const MyContext = React.createContext('');

function App() {
  const [searchString, setSearchString] = useState('');

  return (
    <div className="wrapper">
      <MyContext.Provider value={{ searchString, setSearchString }}>
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/basket" element={<Basket />} />
              <Route path="/" element={<Home />} />
              <Route path="/pizza/:id" element={<PopupPizza />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </MyContext.Provider>
    </div>
  );
}

export default App;


