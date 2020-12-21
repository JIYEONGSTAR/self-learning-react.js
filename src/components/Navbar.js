import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import '../css/Navbar.css';
function Navbar() {
   const [thisPage,setThisPage]=useState('');
   
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="nav-link" onClick={()=>setThisPage('Home')}>Home</Link>
                <Link to="/userpage" className="nav-link" onClick={()=>setThisPage('UserPage')}>UserPage</Link>
                <Link to="/login" className="nav-link" onClick={()=>setThisPage('LogIn')}>Login</Link>
            </div>
            <div className="navbar-page">
             <h1>{thisPage}</h1>
             </div>
        </nav>
           
        </>
    )
}

export default Navbar
