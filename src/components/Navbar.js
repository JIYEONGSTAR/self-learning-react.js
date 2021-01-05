import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import '../css/Navbar.css';
function Navbar() {
   const [thisPage,setThisPage]=useState('');
   
    return (
        <>
        <nav className="navbar">
            <Link to ="/"><h1 className="logo">무비리스트</h1></Link>
            <div className="navbar-container">
                <Link to="/" className="nav-link" onClick={()=>setThisPage('Home')}>Home</Link>
                <Link to="/userpage" className="nav-link" onClick={()=>setThisPage('UserPage')}>UserPage</Link>
                <Link to="/moviepage" className="nav-link" onClick={()=>setThisPage('Home')}>채워넣기용</Link>
                <Link to="/analyzepage" className="nav-link" onClick={()=>setThisPage('UserPage')}>채워넣기용</Link>
            </div>
            <Link to="/login" className="nav-login" onClick={()=>setThisPage('LogIn')}>Login</Link>
            <Link to="/analyzepage"><button className="analyze-page">분석페이지</button></Link>
            <div className="navbar-page">
             <h1>{thisPage}</h1>
             </div>
        </nav>
           
        </>
    )
}

export default Navbar
