import '../Styles/App.css'
import logoImage from '../Content/Logo .svg';
import React, { useState, useEffect} from 'react';

export default function Nav (){
    const [open, setOpen] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);


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
            <div className="navimg" href=""><img src={logoImage} alt="Logo of Little Lemon"></img></div>  
            {(open || screenWidth > 1024) && (
                <ul className="navlinks">
                    <li className="nitem">
                        <a className="nlink">Home</a>
                    </li>
                    <li className="nitem">
                        <a className="nlink">About</a>
                    </li>
                    <li className="nitem">
                        <a className="nlink">Menu</a>
                    </li>
                    <li className="nitem">
                        <a className="nlink">Reservations</a>
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
