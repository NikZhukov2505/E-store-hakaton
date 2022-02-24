import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Login from './Pages/Auth-scenes/Login/Login';
import Registration from './Pages/Auth-scenes/Regist/Registration';
import Basket from './Pages/Basket/Basket';
import Detail from './Pages/Detail/Detail';
import Home from './Pages/Home/Home';

const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/basket' element={<Basket />} />
        <Route path='login' element={<Login />} />
        <Route path='registration' element={<Registration />} />
      </Routes>

      <Footer />

    </div>
  );
};

export default App;
