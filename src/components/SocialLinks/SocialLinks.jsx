import React from 'react';
import './SocialLinks.scss';
// Assets
import FbIcon from '../../assets/facebook.svg';
import IgIcon from '../../assets/instagram.svg';
import TwIcon from '../../assets/twitter.svg';
import YtIcon from '../../assets/youtube.svg';

const SocialLinks = () => {
  const socialIcons = [FbIcon, IgIcon, TwIcon, YtIcon];

  return (
    <div className="soc-links">
      {socialIcons.map((icon) => (
        <img
          key={icon}
          src={icon}
          alt="social media icon"
          className="soc-links__icon"
        />
      ))}
    </div>
  );
};

export default SocialLinks;
