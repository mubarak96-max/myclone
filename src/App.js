import React, {useState} from 'react';
import Header from './components/Header'
import SearchCar from './components/SearchCar'
import Cars from './components/Cars'
import ShopBy from './components/ShopBy'
import Keywords from './components/Keywords'
import Login from './components/Login'
import Assistance from './components/Assistance'
import Questions from './components/Questions'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <Header/>
      <SearchCar/>
      <Cars/>
      <ShopBy/>
      <Keywords/>
      <Login/>
      <Assistance/>
      <Questions/>
      <Footer/>

    </div>
  );
}

export default App
