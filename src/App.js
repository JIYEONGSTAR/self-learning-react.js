import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import UserPage from 'pages/UserPage';
import MoviePage from 'pages/MoviePage';
import Login from './pages/Login';
import AnalyzePage from './pages/AnalyzePage'
import React from 'react';
import ChangeInformation from './pages/ChangeInformation';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
// import Footer from './components/Footer'

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
                <Route path='/changeInfo' component={ChangeInformation}/>
                <Route path='/analyzepage'component={AnalyzePage}/>
            </Switch>
            {/* <Footer /> */}
        </Router>

        </>
    );
}

export default App;
