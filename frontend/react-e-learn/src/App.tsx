import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { HomePage } from './layouts/HomePage/HomePage';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { SearchCoursesPage } from './layouts/SearchCoursePage/SearchCoursesPage';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CoursePage } from './layouts/CoursePage/CoursePage';

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
            <SearchCoursesPage/>
          </Route>
          <Route path='/checkout/:courseId'>
            <CoursePage/>
          </Route>
        </Switch>
      </div>
      <Footer/>
    </div>
  );
}