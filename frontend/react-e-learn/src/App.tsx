import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { HomePage } from './layouts/HomePage/HomePage';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { SearchCoursePage } from './layouts/SearchCoursePage/SearchCoursePage';
import { Switch, Route, Redirect } from 'react-router-dom';

export const App = () => {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <Navbar/>
      <div className='flex-grow-1'>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/home'/>
          </Route>
          <Route path='/home'>
            <HomePage/>
          </Route>
          <Route path='/search'>
            <SearchCoursePage/>
          </Route>
          {/* <Route path='/checkout/:bookId'> */}
            {/* <BookCheckoutPage/> */}
          {/* </Route> */}
        </Switch>
      </div>
      <Footer/>
    </div>
  );
}