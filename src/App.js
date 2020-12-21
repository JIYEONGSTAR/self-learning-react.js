import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import UserPage from 'pages/UserPage';
import MoviePage from 'pages/MoviePage';
import Login from './pages/Login';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
    return (
        <> 
        < Router >
            <Navbar/>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/userpage' component={UserPage} />
                <Route path='/moviepage' component={MoviePage} />
                <Route path='/login' component={Login} />
            </Switch>
        </Router>

        </>
    );
}

export default App;
