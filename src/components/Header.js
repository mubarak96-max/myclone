import React, {useState} from 'react'
import { FaBars, FaSearch, FaHome, FaHeart } from 'react-icons/fa'
import SideNav from './SideNav'

function Header(){
    
    return (
        <>
        <section className="top">
        <img className="top-img" src="images/beforw.jpg" alt="top" />

        <nav>
        <div className="nav-link">
            <button>
            <FaBars 
            color="white"
            size={20}/>
            </button>
        
        <h3>Menu</h3>
        </div>
        <div className="nav-link">
        <a href="http://beforward.com" target="_blank"><img src="images/beforward-logo.png" alt="" className="beforward-logo"/></a>
        </div>
        <div className="nav-link">
        <FaSearch 
        color="white"
        size={20}/>
        <h3>Search</h3>
        </div>
        <div className="nav-link">
        <FaHome 
        color="white"
        size={20}/>
        <h3>Login</h3>
        </div>
        <div className="nav-link">
            <div className="count">
            <FaHeart 
            color="red"
            size={23}/>
            <span>0</span>  
            </div>
        <h3>Favorite</h3>
        </div>
        </nav>

        </section>

        </>
    )
}

export default Header