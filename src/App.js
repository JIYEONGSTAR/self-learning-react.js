// import Navbar from 'components/Navbar';
// import Home from 'pages/Home';
// import UserPage from 'pages/UserPage';
import React from 'react';
// import { Router } from 'react-router-dom';
import './App.css';
// import { Search } from './components/Search';
import { Movie } from './components/Movie';
function App() {
  return (
  <>
  {/* <Router>
  <Navbar />
  <Switch>
    <Route path ='/' exact component = {Home} />
    <Route path ='/userpage' component = {UserPage} />
    <Route path = '/movie' component = {}/>

  </Switch>
  </Router> */}
  {/* <Search/> */}
  <Movie />
  </>
  );
}

export default App;
