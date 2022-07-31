import React from 'react';

import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Weathers from '../../Components/Weathers/Weathers';
import MapView from '../../Components/Map/MapView';
import Search from '../../Components/Search/Search';
import './Home.css';


function HomePage() {


  return (
    <div className='parentDiv'>
      <Header></Header>
      <div className='row'>
        <Search></Search>
      </div>
      <div className='row'>
        <div className='col-8'>
          <MapView></MapView>
        </div>
      </div>
      <div className='row'>
        <Weathers />
      </div>
      <Footer />
    </div>
  )
}

export default HomePage;