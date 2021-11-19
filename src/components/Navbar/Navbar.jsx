import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import SecondaryNavigation from '../SecondaryNavigation';
import Logo from '../../assets/netflix-logo.png';

const Navbar = () => {
  const navLinks = ['Home', 'TV Shows', 'Movies', 'New & Popular', 'My List'];

  const [navbar, setNavbar] = useState(false);

  const navbarToggler = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 5) {
      setNavbar(!navbar);
    } else {
      setNavbar(navbar);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', navbarToggler);
  }, []);

  return (
    <div className={navbar ? 'navbar scrolled' : 'navbar'}>
      <div className="navbar__left">
        <img src={Logo} alt="netflix logo" className="navbar__logo" />
        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link} className="navbar__link">
              <a
                style={{ color: 'inherit' }}
                href="https://vanja.bixtep.com"
                target="_blank"
                rel="noreferrer"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <SecondaryNavigation />
    </div>
  );
};

export default Navbar;
