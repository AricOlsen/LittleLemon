import '../Styles/App.css'
import logoImage from '../Content/Logo .svg';
import React, { useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";

export default function Nav (){
    const [open, setOpen] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const goHome = useNavigate();
    const reserveNow = useNavigate();

    const toggleNav = () => {
        setOpen(!open)

      }
      useEffect(() => {

    const changeWidth = () => {
        setScreenWidth(window.innerWidth);
    }
    
    window.addEventListener('resize', changeWidth)
    return () => {
        window.removeEventListener('resize', changeWidth)
    }
    
    }, [])
    return (
        <>
        <nav className="navbar">
            <div className="navimg" href=""><img src={logoImage} alt="Logo of Little Lemon" onClick={()=>goHome('/')}></img></div>  
            {(open || screenWidth > 1024) && (
                <ul className="navlinks">
                    <li className="nitem">
                        <a className="nlink" onClick={()=>goHome('/')}>Home</a>
                    </li>
                    <li className="nitem">
                        <a className="nlink">About</a>
                    </li>
                    <li className="nitem">
                        <a className="nlink">Menu</a>
                    </li>
                    <li className="nitem">
                        <a className="nlink" onClick={()=>reserveNow('/reservationPage')}>Reservations</a>
                    </li>
                    <li className="nitem">
                        <a className="nlink">Order</a>
                    </li>
                    <li className="nitem">
                        <a className="nlink">Login</a>
                    </li>
                </ul>
            )}
            <div className="hamburger" id='burger-menu' onClick={toggleNav}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
        </>
        )
        
};
