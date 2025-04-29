import React, { useState } from 'react';
import { FaBars, FaLaptopCode } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import './styles.scss';

const data = [
    { label: 'Home', to: '#home' },
    { label: 'About', to: '#about' },
    { label: 'Skills', to: '#skills' },
    { label: 'Resume', to: '#resume' },
    { label: 'Projects', to: '#projects1' },
    { label: 'Contact', to: '#contact' },
];

const Navbar = () => {
    const [toggleIcon, setToggleIcon] = useState(false);

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    };

    const handleLinkClick = () => {
        setToggleIcon(false);  // Close menu after clicking
    };

    return (
        <nav className="navbar">
            <div className="navbar__container">
                <a href="#home" className="navbar__container__logo">
                    <FaLaptopCode size={50} />
                </a>

                <ul className={`navbar__container__menue ${toggleIcon ? "active" : ""}`}>
                    {data.map((item, key) => (
                        <li key={key} className="navbar__container__menue__item">
                            <a
                                href={item.to}
                                className="navbar__container__menue__item__links"
                                onClick={handleLinkClick}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="nav-icon" onClick={handleToggleIcon}>
                    {toggleIcon ? <HiX size={30} /> : <FaBars />}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
