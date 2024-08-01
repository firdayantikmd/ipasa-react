import React from 'react';
import './Footer.css';
import { IconArrowUpRight, IconMapPin, IconPhone, IconMail } from '@tabler/icons-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src="/assets/gibhor-footer.svg" alt="Logo" className='footer-logo' />
        </div>
        <div className="footer-contact">
          <p>
            <IconMapPin size={16} /> Gaviota #1358 GUADALAJARA , JALISCO , COL MORELOS
          </p>
          <p>
            <IconPhone size={16} /> +52-XX-XXXX-XXXX
          </p>
          <p>
            <IconMail size={16} /> xxxxx@xxxx.com
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © Gihbor Packaging SA 2024. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
