import React from 'react';
import './Footer.scss';
import SocialLinks from '../SocialLinks/SocialLinks';

const Footer = () => {
  const footerLinks = [
    'Audio and Subtitles',
    'Audio Description',
    'Help Center',
    'Gift Cards',
    'Media Center',
    'Investor Relations',
    'Jobs',
    'Terms of use',
    'Privacy',
    'Legal Notices',
    'Cookie Preferences',
    'Impressum',
    'Contact Us',
  ];

  return (
    <div className="footer">
      <SocialLinks />
      <div className="footer__links">
        {footerLinks.map((link) => (
          <a
            key={link}
            href="https://vanja.bixtep.com"
            target="_blank"
            rel="noreferrer"
            className="footer__link"
          >
            {link}
          </a>
        ))}
      </div>
      <a
        href="https://vanja.bixtep.com"
        target="_blank"
        rel="noreferrer"
        className="footer__service"
      >
        Service Code
      </a>
      <p className="footer__copy">&copy; 1997-2021 Netflix, Inc.</p>
    </div>
  );
};

export default Footer;
