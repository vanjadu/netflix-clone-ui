import React from 'react';
import './SecondaryNavigation.scss';
import Avatar from '../Avatar';
// Assets
import SearchIcon from '../../assets/search.svg';
import BellIcon from '../../assets/bell.svg';
import SettingsIcon from '../../assets/settings.svg';

const SecondaryNavigation = () => {
  const navIcons = [SearchIcon, BellIcon, SettingsIcon];

  return (
    <div className="sec-nav">
      {navIcons.map((icon) => (
        <img
          key={icon}
          src={icon}
          alt="netflix icon"
          className="sec-nav__icon"
        />
      ))}
      <Avatar />
    </div>
  );
};

export default SecondaryNavigation;
