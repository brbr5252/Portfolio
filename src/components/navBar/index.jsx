import React, { useState } from 'react';
import{FaBars, FaLaptopCode} from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import {Link} from 'react-router-dom';
import './styles.scss';

const data = [
    {
        label: 'Home',
        to : '/'
    },
    {
        label: 'About',
        to : '/about'
    },
    {
        label: 'Skills',
        to : '/skills'
    },
    {
        label: 'Resume',
        to : '/resume'
    },
    {
        label: 'Project',
        to : '/portfolio'
    },
    {
        label: 'Contact',
        to : '/contact'
    },
];

const Navbar = ()=> {
    const [toggleIcon, setToggleIcon] = useState(false);

    const handleToggleIcon = ()=> {
        setToggleIcon(!toggleIcon);
    };
    return(
        <div>

            <nav className="navbar">
                <div className="navbar__container">
                    <Link to={'/'} className="navbar__container__logo">
                    <FaLaptopCode size={30}/>
                    </Link>
                </div>
                <ul className={`navbar__container__menue ${toggleIcon ? "active" : ""}`}>
                    {
                        data.map((item, key)=>(
                            <li key={key} className="navbar__container__menue__item">
                                <Link className="navbar__container__menue__item__links" to={item.to}>
                                {item.label}

                                </Link>

                            </li>
                        ))
                    }

                </ul>
                <div className="nav-icon" onClick={handleToggleIcon}>
                    {
                        toggleIcon ? <HiX size={30} /> : <FaBars/>
                    }
                    
                </div>
            </nav>

        </div>
    )
}

export default Navbar;